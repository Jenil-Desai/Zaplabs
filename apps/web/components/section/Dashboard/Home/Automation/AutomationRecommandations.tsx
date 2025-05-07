"use client";
import React from "react";
import {Card} from "@/components/ui/card";
import {recommandedAutomations} from "@/components/section/Dashboard/Home/Automation/RecommandedAutomationList";
import {
    AutomationRecommandationCards
} from "@/components/section/Dashboard/Home/Automation/AutomationRecommandationCards";
import {useRouter} from "next/navigation";

export const AutomationRecommandations = () => {
    const router = useRouter();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {recommandedAutomations.map((automation, index) => (
                <AutomationRecommandationCards automation={automation} key={index}/>
            ))}
            <Card
                onClick={() => router.push("/dashboard/zaps/create")}
                className="flex items-center justify-center p-6 border border-dashed border-pink-300 bg-white/80 backdrop-blur-sm cursor-pointer">
                <div className="text-center">
                    <div className="text-5xl text-pink-300 mb-2">+</div>
                    <h3 className="text-lg font-medium text-pink-700">Create New Automation</h3>
                    <p className="text-sm text-gray-500 mt-1">Connect apps and build custom workflows</p>
                </div>
            </Card>
        </div>
    );
};
