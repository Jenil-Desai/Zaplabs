import {Clock, Layers, Puzzle, Shield, Zap} from "lucide-react";
import React from "react";

export const features = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: "No-Code Automation",
        description: "Build powerful workflows without writing a single line of code.",
    },
    {
        icon: <Puzzle className="w-6 h-6" />,
        title: "300+ App Integrations",
        description: "Connect with all your favorite tools and services seamlessly.",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Instant Triggers",
        description: "Set up real-time automations that respond to events instantly.",
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Enterprise Security",
        description: "Industry-leading security standards to keep your data safe.",
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Conditional Logic",
        description: "Create sophisticated workflows with if/then conditions.",
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Scheduled Tasks",
        description: "Set up recurring automations on your preferred schedule.",
    },
];