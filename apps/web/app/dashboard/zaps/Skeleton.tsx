import React from "react";
import {Skeleton} from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function ZapsListSkeleton() {
    const router = useRouter();

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
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Zap Name</TableHead>
                                <TableHead className="text-center">Actions</TableHead>
                                <TableHead className="text-center">Runs</TableHead>
                                <TableHead className="text-center">Status</TableHead>
                                <TableHead>Created</TableHead>
                                <TableHead>Last Updated</TableHead>
                                <TableHead className="text-right">Options</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array(5).fill(0).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Skeleton className="h-6 w-[180px]"/>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <Skeleton className="h-6 w-8 mx-auto"/>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <Skeleton className="h-6 w-12 mx-auto"/>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <Skeleton className="h-6 w-16 rounded-full mx-auto"/>
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-6 w-24"/>
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-6 w-24"/>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Skeleton className="h-8 w-8 rounded-md ml-auto"/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="py-4 px-2">
                    <Skeleton className="h-10 w-[300px] mx-auto"/>
                </div>
            </div>
        </>
    );
};
