import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {BarChart4, FileText, Image, Images, Mail, MessageSquare, PictureInPicture, Play} from "lucide-react";
import React from "react";
import {RecommandedAutomation} from "@/components/section/Dashboard/Home/Automation/RecommandedAutomationList";

const getRandomIcon = () => {
    const icons = [Images, PictureInPicture, Image, FileText, BarChart4, Mail, MessageSquare];
    return icons[Math.floor(Math.random() * icons.length)];
};

const getRandomPinkGradient = () => {
    const pinkGradients = [
        "bg-gradient-to-br from-pink-100 to-pink-300",
        "bg-gradient-to-br from-pink-200 to-pink-400",
        "bg-gradient-to-br from-pink-300 to-pink-500",
        "bg-gradient-to-br from-pink-400 to-pink-600",
        "bg-gradient-to-br from-pink-500 to-pink-700",
    ];
    return pinkGradients[Math.floor(Math.random() * pinkGradients.length)];
};

export function AutomationRecommandationCards({automation}: { automation: RecommandedAutomation }) {
    return (
        <Card className="overflow-hidden border-0 shadow-md">
            <div className={`${getRandomPinkGradient()} p-6 text-white relative overflow-hidden`}>
                {/* Add illustration with lower opacity */}
                <div className="absolute right-0 top-0 opacity-15 transform translate-x-1/4 -translate-y-1/4">
                    {React.createElement(getRandomIcon(), {size: 120, strokeWidth: 1})}
                </div>
                <div className="relative z-10">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-sm font-medium opacity-80 mb-1">{automation.subtitle}</div>
                            <h3 className="text-2xl font-bold">{automation.title}</h3>
                            <p className="mt-2 opacity-90 text-sm">{automation.description}</p>
                        </div>
                        <Button
                            size="icon"
                            variant="ghost"
                            className="h-12 w-12 rounded-full bg-white text-pink-900 shadow-sm hover:bg-pink-50 hover:text-pink-700 border border-gray-100"
                        >
                            <Play className="h-5 w-5"/>
                            <span className="sr-only">Start automation</span>
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}