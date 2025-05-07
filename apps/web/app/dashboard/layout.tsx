import {SidebarProvider} from "@/components/ui/sidebar";
import AnimatedGlassmorphism from "@/components/global/AnimatedGlassmorphism";
import {DashboardSidebar} from "@/components/global/sidebar/Sidebar";
import DashboardTopbar from "@/components/global/topbar/TopBar";
import React from "react";

export default function DashboardLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <SidebarProvider defaultOpen={true}>
            <div className="min-h-screen flex bg-gradient-to-br from-pink-50 to-pink-100 w-full">
                <AnimatedGlassmorphism/>
                <DashboardSidebar/>
                <div className="flex-1 flex flex-col">
                    <DashboardTopbar/>
                    <main className="flex-1 p-6 overflow-y-auto z-10">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}
