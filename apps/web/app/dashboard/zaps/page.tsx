"use client";
import {Button} from "@/components/ui/button";
import {useQuery} from "@tanstack/react-query";
import {getUserZaps} from "@/queryFn/getUserZaps";
import {DataTable} from "@/app/dashboard/zaps/data-table";
import {columns} from "@/app/dashboard/zaps/columns";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter();
    const {isError, isPending, data} = useQuery({
        queryKey: ["zaps"],
        queryFn: getUserZaps,
    })

    if (isError) {
        return <div>Error loading zaps</div>;
    }

    if (isPending) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-pink-700">Your Zaps</h1>
                <Button className="bg-pink-500 hover:bg-pink-600 text-white"
                        onClick={() => router.push("/dashboard/zaps/create")}>
                    Create New Zap
                </Button>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-pink-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <DataTable columns={columns} data={data}/>
                </div>
            </div>
        </>
    );
}