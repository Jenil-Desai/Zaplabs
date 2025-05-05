"use client"
import React, {useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ArrowRight, Check, Clock} from "lucide-react";
import {steps} from "@/components/section/Landing/WorkflowDemo/WorkflowDemoSteps";

const WorkflowDemo = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const runDemo = () => {
        setIsAnimating(true);
        setActiveStep(0);

        // Animate through each step
        let step = 0;
        const interval = setInterval(() => {
            step += 1;
            if (step >= steps.length) {
                clearInterval(interval);
                setIsAnimating(false);
            } else {
                setActiveStep(step);
            }
        }, 1500);
    };

    return (
        <section
            id="workflow"
            className="py-24 bg-gradient-to-b from-white to-pink-50"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
                        See Zaplabs in Action
                    </h2>
                    <p className="text-xl text-gray-600 reveal">
                        Watch how a simple workflow can save you hours of manual work every day.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto reveal">
                    <Card className="border border-pink-100 shadow-lg overflow-hidden">
                        <CardContent className="p-0">
                            <div className="bg-pink-50 p-4 border-b border-pink-100">
                                <h3 className="text-lg font-medium flex items-center">
                                    <span className="w-3 h-3 rounded-full bg-pink-500 mr-2"></span>
                                    Email Processing Workflow
                                </h3>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-col md:flex-row gap-4 justify-between">
                                    {steps.map((step, index) => {
                                        const isActive = index <= activeStep;
                                        const isCurrentStep = index === activeStep;
                                        return (
                                            <div
                                                key={index}
                                                className={`flex-1 relative ${
                                                    index !== steps.length - 1
                                                        ? "md:after:content-[''] md:after:absolute md:after:top-6 md:after:right-0 md:after:w-full md:after:h-0.5 md:after:bg-gray-200 md:after:translate-x-1/2"
                                                        : ""
                                                }`}
                                            >
                                                <div
                                                    className={`${
                                                        isActive ? step.color : "bg-gray-100 text-gray-400"
                                                    } w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 z-10 relative ${
                                                        isCurrentStep && isAnimating ? "animate-pulse-soft" : ""
                                                    }`}
                                                >
                                                    {isActive ? (
                                                        index < activeStep ? (
                                                            <Check className="h-5 w-5"/>
                                                        ) : (
                                                            step.icon
                                                        )
                                                    ) : (
                                                        step.icon
                                                    )}
                                                </div>
                                                <div
                                                    className={`text-center transition-all duration-300 ${
                                                        isActive ? "opacity-100" : "opacity-50"
                                                    }`}
                                                >
                                                    <h4 className="font-medium mb-1">{step.title}</h4>
                                                    <p className="text-xs text-gray-500 hidden md:block">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-12 flex justify-center">
                                    <Button
                                        onClick={runDemo}
                                        className="bg-pink-500 hover:bg-pink-600 text-white"
                                        disabled={isAnimating}
                                    >
                                        {isAnimating ? (
                                            <>
                                                <Clock className="mr-2 h-4 w-4 animate-spin"/>
                                                Running Demo...
                                            </>
                                        ) : (
                                            <>
                                                Run Demo
                                                <ArrowRight className="ml-2 h-4 w-4"/>
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-pink-500 mb-2">85%</div>
                        <p className="text-gray-600">Time Saved on Repetitive Tasks</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-pink-500 mb-2">300+</div>
                        <p className="text-gray-600">App Integrations</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-pink-500 mb-2">10k+</div>
                        <p className="text-gray-600">Businesses Automated</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowDemo;
