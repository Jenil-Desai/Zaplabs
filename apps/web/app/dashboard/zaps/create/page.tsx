"use client";
import "@xyflow/react/dist/style.css";
import {useCallback, useState} from "react";
import {Background, Controls, ReactFlow, Node, Edge, applyNodeChanges, applyEdgeChanges} from "@xyflow/react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from "@/components/ui/dialog";
import {useQuery} from "@tanstack/react-query";
import {getAvailableTrigger} from "@/queryFn/getAvailableTriggers";
import {getAvailableActions} from "@/queryFn/getAvailableActions";
import {createZap} from "@/actions/createZap";
import {logger} from "@repo/logger";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import ZapCreationSkeleton from "@/app/dashboard/zaps/create/Skeleton";

export default function Page() {
    const {isError: isTriggerError, isPending: isTriggerPending, data: triggerData} = useQuery({
        queryKey: ["triggers"],
        queryFn: getAvailableTrigger,
    })

    const {isError: isActionError, isPending: isActionPending, data: actionData} = useQuery({
        queryKey: ["actions"],
        queryFn: getAvailableActions,
    })

    const [title, setTitle] = useState("Untitled Zap");
    const [nodes, setNodes] = useState<Node[]>([
        {id: "trigger", data: {label: "Select Trigger"}, position: {x: 50, y: 50}, type: "input"},
        {id: "action-1", data: {label: "Select Action 1"}, position: {x: 50, y: 150}},
        {id: "add-action", data: {label: "+"}, position: {x: 50, y: 250}, type: "output"},
    ]);
    const [edges, setEdges] = useState<Edge[]>([
        {id: "e1", source: "trigger", target: "action-1"},
        {id: "e2", source: "action-1", target: "add-action"},
    ]);
    const [modal, setModal] = useState<null | "trigger" | { actionId: string }>(null);
    const router = useRouter();

    const onNodesChange = useCallback((changes: Parameters<typeof applyNodeChanges>[0]) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);
    const onEdgesChange = useCallback((changes: Parameters<typeof applyEdgeChanges>[0]) => setEdges((eds) => applyEdgeChanges(changes, eds)), [setEdges]);

    const addAction = () => {
        const actionNodes = nodes.filter((n) => n.id.startsWith("action-"));
        const nextActionNumber = actionNodes.length + 1;
        const newActionId = `action-${nextActionNumber}`;
        const filteredNodes = nodes.filter((n) => n.id !== "add-action");
        const lastNode = actionNodes.length > 0 ? actionNodes[actionNodes.length - 1] : nodes.find((n) => n.id === "trigger");
        const newY = lastNode ? lastNode.position.y + 100 : 150;
        const newActionNode: Node = {
            id: newActionId,
            data: {label: `Select Action ${nextActionNumber}`},
            position: {x: 50, y: newY},
        };
        const newAddActionNode: Node = {
            id: "add-action",
            data: {label: "+"},
            position: {x: 50, y: newY + 100},
            type: "output",
            style: {cursor: "pointer", background: "#ff5c7c", color: "#fff", borderRadius: 8, border: "none"},
        };
        setNodes([...filteredNodes, newActionNode, newAddActionNode]);
        let newEdges = edges.filter((e) => e.target !== "add-action");

        const lastActionId = actionNodes.length > 0 ? actionNodes[actionNodes.length - 1].id : "trigger";
        newEdges = newEdges.filter((e) => e.source !== lastActionId || e.target !== "add-action");
        newEdges.push({id: `e${Date.now()}`, source: lastActionId, target: newActionId});
        newEdges.push({id: `e${Date.now() + 1}`, source: newActionId, target: "add-action"});
        setEdges(newEdges);

        // After adding, open modal for new action
        setTimeout(() => {
            setModal({actionId: newActionId});
        }, 0);
    };

    // Handle trigger selection
    const handleSelectTrigger = (trigger: { id: string; name: string }) => {
        setNodes((nds) => nds.map((node) => (node.id === "trigger" ? {
            ...node,
            data: {...node.data, label: trigger.name, selectedTrigger: trigger}
        } : node)));
        setModal(null);
    };

    // Handle action selection
    const handleSelectAction = (action: { id: string; name: string }) => {
        if (modal && typeof modal === "object" && modal.actionId) {
            setNodes((nds) => nds.map((node) => (node.id === modal.actionId ? {
                ...node,
                data: {...node.data, label: action.name, selectedAction: action}
            } : node)));
        }
        setModal(null);
    };

    async function handlePublish() {
        const triggerNode = nodes.find((node) => node.id === "trigger");
        const selectedTriggerId = triggerNode?.data.selectedTrigger?.id;

        const actionNodes = nodes
            .filter((node) => node.id.startsWith("action-"))
            .map((node, index) => ({
                order: index + 1,
                actionId: node.data.selectedAction?.id,
            }))
            .filter((action) => action.actionId); // Filter out actions without a selected ID

        const response = await createZap({
            name: title,
            triggerId: selectedTriggerId,
            actions: actionNodes
        });

        if (response.error) {
            logger.error("Error creating Zap:", response.error);
            toast.error("Error creating Zap");
        } else {
            toast.success("Zap created successfully");
            router.push("/dashboard/zaps");
        }
    };

    if (isTriggerError || isActionError) {
        toast.error("Error loading triggers or actions");
        return <ZapCreationSkeleton/>;
    }

    if (isTriggerPending || isActionPending) return <ZapCreationSkeleton/>;

    return (
        <div className="flex flex-col justify-center space-y-4 h-full w-full">
            <div className="flex justify-between items-center">
                <Input className="w-1/4" type="text" placeholder="Untitled Zap" value={title}
                       onChange={(event) => setTitle(event.target.value)}/>
                <Button className="bg-pink-500 hover:bg-pink-600 text-white" onClick={handlePublish}>
                    Publish
                </Button>
            </div>
            <div className="h-full w-full border border-pink-200/30 rounded-lg shadow-sm backdrop-blur-sm bg-white/50">
                <ReactFlow
                    fitView
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onNodeClick={(event, node) => {
                        if (node.id === "add-action") addAction();
                        else if (node.id === "trigger") setModal("trigger");
                        else if (node.id.startsWith("action-")) setModal({actionId: node.id});
                    }}
                >
                    <Background/>
                    <Controls showInteractive={true}/>
                </ReactFlow>
            </div>

            {/* Trigger selection modal */}
            <Dialog open={modal === "trigger"} onOpenChange={() => setModal(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Select a Trigger</DialogTitle>
                        <DialogDescription>Choose how this Zap will start.</DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-2 mt-4">
                        {triggerData.map((trigger) => (
                            <button key={trigger.id}
                                    className="px-4 py-2 rounded bg-pink-100 hover:bg-pink-200 text-pink-700 text-left"
                                    onClick={() => handleSelectTrigger(trigger)}>
                                {trigger.name}
                            </button>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>

            {/* Action selection modal */}
            <Dialog open={!!(modal && typeof modal === "object" && modal.actionId)} onOpenChange={() => setModal(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Select an Action</DialogTitle>
                        <DialogDescription>Choose what happens when the Zap runs.</DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-2 mt-4">
                        {actionData.map((action) => (
                            <button key={action.id}
                                    className="px-4 py-2 rounded bg-pink-100 hover:bg-pink-200 text-pink-700 text-left"
                                    onClick={() => handleSelectAction(action)}>
                                {action.name}
                            </button>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
