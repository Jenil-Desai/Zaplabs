import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ArrowDownRight, ArrowUpRight} from "lucide-react";
import React from "react";
import {Stat} from "@/components/section/Dashboard/Home/Statatics/DashboardStats";

export function DashboardStatsCard({stat}: { stat: Stat }) {
    return (
        <Card className="border border-pink-100 shadow-md backdrop-blur-sm bg-white/80">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-full ${stat.color}`}>
                    <stat.icon className="h-4 w-4"/>
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center pt-1">
                    {stat.isPositive ? (
                        <ArrowUpRight className="h-4 w-4 text-green-600 mr-1"/>
                    ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-600 mr-1"/>
                    )}
                    <p className={`text-xs ${
                        stat.isPositive ? "text-green-600" : "text-red-600"
                    }`}>
                        {stat.change} from last month
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}