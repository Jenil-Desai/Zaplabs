"use client";
import "@xyflow/react/dist/style.css";
import { useCallback, useState } from "react";
import { Background, Controls, ReactFlow, Node, Edge, applyNodeChanges, applyEdgeChanges } from "@xyflow/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

const AVAILABLE_TRIGGERS = [
  { id: "webhook", name: "Webhook Received" },
  { id: "schedule", name: "Scheduled Time" },
  { id: "email", name: "New Email" },
];
const AVAILABLE_ACTIONS = [
  { id: "send-email", name: "Send Email" },
  { id: "post-slack", name: "Post to Slack" },
  { id: "create-task", name: "Create Task" },
];

export default function Page() {
  const [title, setTitle] = useState("Untitled Zap");
  const [nodes, setNodes] = useState<Node[]>([
    { id: "trigger", data: { label: "Select Trigger" }, position: { x: 50, y: 50 }, type: "input" },
    { id: "action-1", data: { label: "Select Action 1" }, position: { x: 50, y: 150 } },
    { id: "add-action", data: { label: "+" }, position: { x: 50, y: 250 }, type: "output" },
  ]);
  const [edges, setEdges] = useState<Edge[]>([
    { id: "e1", source: "trigger", target: "action-1" },
    { id: "e2", source: "action-1", target: "add-action" },
  ]);
  const [modal, setModal] = useState<null | "trigger" | { actionId: string }>(null);

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
      data: { label: `Select Action ${nextActionNumber}` },
      position: { x: 50, y: newY },
    };
    const newAddActionNode: Node = {
      id: "add-action",
      data: { label: "+" },
      position: { x: 50, y: newY + 100 },
      type: "output",
      style: { cursor: "pointer", background: "#ff5c7c", color: "#fff", borderRadius: 8, border: "none" },
    };
    setNodes([...filteredNodes, newActionNode, newAddActionNode]);
    let newEdges = edges.filter((e) => e.target !== "add-action");

    const lastActionId = actionNodes.length > 0 ? actionNodes[actionNodes.length - 1].id : "trigger";
    newEdges = newEdges.filter((e) => e.source !== lastActionId || e.target !== "add-action");
    newEdges.push({ id: `e${Date.now()}`, source: lastActionId, target: newActionId });
    newEdges.push({ id: `e${Date.now() + 1}`, source: newActionId, target: "add-action" });
    setEdges(newEdges);

    // After adding, open modal for new action
    setTimeout(() => {
      setModal({ actionId: newActionId });
    }, 0);
  };

  // Handle trigger selection
  const handleSelectTrigger = (trigger: { id: string; name: string }) => {
    setNodes((nds) => nds.map((node) => (node.id === "trigger" ? { ...node, data: { ...node.data, label: trigger.name, selectedTrigger: trigger } } : node)));
    setModal(null);
  };

  // Handle action selection
  const handleSelectAction = (action: { id: string; name: string }) => {
    if (modal && typeof modal === "object" && modal.actionId) {
      setNodes((nds) => nds.map((node) => (node.id === modal.actionId ? { ...node, data: { ...node.data, label: action.name, selectedAction: action } } : node)));
    }
    setModal(null);
  };

  const handlePublish = () => {
    const triggerNode = nodes.find((node) => node.id === "trigger");
    const selectedTriggerId = triggerNode?.data.selectedTrigger?.id;

    const actionNodes = nodes.filter((node) => node.id.startsWith("action-"));
    const selectedActionIds = actionNodes.map((node) => node.data.selectedAction?.id).filter(Boolean);

    console.log("Trigger ID:", selectedTriggerId);
    console.log("Action IDs:", selectedActionIds);
    // You can now send selectedTriggerId and selectedActionIds to your API
  };

  return (
    <div className="flex flex-col justify-center space-y-4 h-full w-full">
      <div className="flex justify-between items-center">
        <Input className="w-1/4" type="text" placeholder="Untitled Zap" value={title} onChange={(event) => setTitle(event.target.value)} />
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
            else if (node.id.startsWith("action-")) setModal({ actionId: node.id });
          }}
        >
          <Background />
          <Controls showInteractive={true} />
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
            {AVAILABLE_TRIGGERS.map((trigger) => (
              <button key={trigger.id} className="px-4 py-2 rounded bg-pink-100 hover:bg-pink-200 text-pink-700 text-left" onClick={() => handleSelectTrigger(trigger)}>
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
            {AVAILABLE_ACTIONS.map((action) => (
              <button key={action.id} className="px-4 py-2 rounded bg-pink-100 hover:bg-pink-200 text-pink-700 text-left" onClick={() => handleSelectAction(action)}>
                {action.name}
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
