import React from "react";
import {Activity, Users, Clock, LucideIcon} from "lucide-react";
import {DashboardStatsCard} from "@/components/section/Dashboard/Home/Statatics/DashboardStatsCard";

export interface Stat {
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
    icon: LucideIcon;
    color: string;
}

export const DashboardStats = () => {
    const stats = [
        {
            title: "Total Zaps",
            value: "24",
            change: "+12%",
            isPositive: true,
            icon: Activity,
            color: "bg-pink-100 text-pink-700"
        },
        {
            title: "Active Zaps",
            value: "8",
            change: "+3%",
            isPositive: true,
            icon: Users,
            color: "bg-purple-100 text-purple-700"
        },
        {
            title: "Zap Runs (24h)",
            value: "157",
            change: "-5%",
            isPositive: false,
            icon: Clock,
            color: "bg-blue-100 text-blue-700"
        }
    ];

    return (
        <>
            {stats.map((stat, index) => (
                <DashboardStatsCard key={index} stat={stat}/>
            ))}
        </>
    );
};
