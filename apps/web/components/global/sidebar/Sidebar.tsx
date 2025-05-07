import {Settings, Zap} from "lucide-react";
import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from "@/components/ui/sidebar";
import {Button} from "@/components/ui/button";
import {sidebaritems} from "@/components/global/sidebar/sidebaritems";
import Link from "next/link";

export function DashboardSidebar() {
    return (
        <Sidebar variant="floating"
                 className="w-64 bg-white/50 border-none border-pink-200/30 rounded-lg z-20">
            <SidebarHeader className="p-4 flex items-center">
                <div className="flex items-center space-x-2">
                    <Link href="/" className="text-2xl font-bold text-pink-600">
                        Zap<span className="text-gray-800">labs</span>
                    </Link>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebaritems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        tooltip={item.title}
                                        isActive={item.isActive}
                                    >
                                        <a href={item.url} className="flex items-center">
                                            <item.icon className="h-5 w-5"/>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Shortcuts</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="Create Zap">
                                    <a href="#" className="flex items-center">
                                        <Zap className="h-5 w-5 text-pink-500"/>
                                        <span>Create New Zap</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="mt-auto p-4">
                <div className="flex items-center justify-center px-2 py-4 border-t border-pink-100">
                    <Button variant="outline" size="sm"
                            className="w-full text-pink-700 border-pink-200 hover:bg-pink-50">
                        <Settings className="h-4 w-4 mr-2"/>
                        Settings
                    </Button>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
