"use client";

import {ColumnDef} from "@tanstack/react-table";
import {Zap} from "@/queryFn/getUserZaps";
import {Badge} from "@/components/ui/badge";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {ArrowUpDown, Edit, Trash2} from "lucide-react";

export const columns: ColumnDef<Zap>[] = [
    {
        accessorKey: "name",
        header: ({column}) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Zap Name
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
    },
    {
        accessorKey: "actionCount",
        header: ({column}) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Actions
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
    },
    {
        accessorKey: "zapRunCount",
        header: ({column}) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Runs
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
    },
    {
        accessorKey: "active",
        header: "Active",
        cell: ({row}) => (
            <Badge
                variant={row.getValue("active") ? "default" : "outline"}
                className={row.getValue("active") ? "bg-pink-500 text-white hover:bg-pink-600" : "text-pink-700 border-pink-200"}
            >
                {row.getValue("active") ? "Active" : "Inactive"}
            </Badge>
        ),
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({row}) => new Date(row.original.createdAt).toLocaleDateString(),
    },
    {
        accessorKey: "updatedAt",
        header: "Updated At",
        cell: ({row}) => new Date(row.original.updatedAt).toLocaleDateString(),
    },
    {
        id: "options",
        header: "Options",
        cell: ({row}) => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-more-horizontal">
                            <circle cx="12" cy="12" r="1"/>
                            <circle cx="19" cy="12" r="1"/>
                            <circle cx="5" cy="12" r="1"/>
                        </svg>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4"/>
                        <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                        <Trash2 className="mr-2 h-4 w-4"/>
                        <span>Delete</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    }
];