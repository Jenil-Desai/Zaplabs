import {Compass, HelpCircle, LayoutDashboard, UserRound, Zap} from "lucide-react";

export const sidebaritems = [
    {title: "Dashboard", icon: LayoutDashboard, url: "/dashboard", isActive: true},
    {title: "Zaps", icon: Zap, url: "/dashboard/zaps", isActive: false},
    {title: "Profile", icon: UserRound, url: "/dashboard/profile", isActive: false},
    {title: "Explore", icon: Compass, url: "/dashboard/explore", isActive: false},
    {title: "Help", icon: HelpCircle, url: "/help", isActive: false},
];