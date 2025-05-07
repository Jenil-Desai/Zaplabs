import React from "react";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Bell, Search, Settings, Zap} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";

export default function DashboardTopbar() {
    return (
        <header
            className="h-16 border border-pink-200/30 rounded-lg shadow-sm backdrop-blur-sm bg-white/50 z-20 px-4 m-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <SidebarTrigger/>
                <div className="relative max-w-md hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-64 pl-8 bg-white/80 border-pink-100 focus-visible:ring-pink-500"
                    />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <Button variant="outline" size="sm"
                        className="hidden md:flex items-center text-pink-700 border-pink-200 hover:bg-pink-50">
                    <Zap className="h-4 w-4 mr-2"/>
                    Create Zap
                </Button>
                <Button variant="ghost" size="icon" className="text-pink-700">
                    <Bell className="h-5 w-5"/>
                </Button>
                <Button variant="ghost" size="icon" className="text-pink-700">
                    <Settings className="h-5 w-5"/>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                            <Avatar className="h-9 w-9 border border-pink-200">
                                <AvatarFallback className="bg-pink-100 text-pink-700">U</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

