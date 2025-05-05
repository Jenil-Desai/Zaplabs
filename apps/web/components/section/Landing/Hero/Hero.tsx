"use client";
import React, {useEffect} from "react";
import {Button} from "@/components/ui/button";
import {ArrowRight, Sparkles} from "lucide-react";
import SplineScene from "./SplineScene";

const Hero = () => {
    useEffect(() => {
        // Reveal animation for elements
        const revealElements = document.querySelectorAll(".reveal");

        const reveal = () => {
            revealElements.forEach((element) => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;

                if (elementTop < windowHeight - 150) {
                    element.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", reveal);
        reveal(); // Initial check on load

        return () => window.removeEventListener("scroll", reveal);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden hero-gradient pt-20">
            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight reveal">
                            <span>Automate Your </span>
                            <span className="gradient-text">Workflow</span>
                            <span> With Ease</span>
                        </h1>
                        <p className="text-xl text-gray-700 max-w-lg mx-auto md:mx-0 reveal">
                            Connect your apps and automate tasks in minutes. No coding required.
                            Zaplabs makes automation accessible for everyone.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start reveal">
                            <Button className="text-md px-8 py-6 bg-pink-500 hover:bg-pink-600 text-white">
                                Get Started Free
                                <ArrowRight className="ml-2 h-4 w-4"/>
                            </Button>
                            <Button variant="outline" className="text-md px-8 py-6">
                                <Sparkles className="mr-2 h-4 w-4"/>
                                Watch Demo
                            </Button>
                        </div>
                        <div
                            className="flex items-center justify-center md:justify-start mt-8 text-sm text-gray-500 reveal">
                            <div className="flex -space-x-2 mr-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-pink-100 border-2 border-white flex items-center justify-center text-xs font-medium text-pink-600"
                                    >
                                        {i}
                                    </div>
                                ))}
                            </div>
                            <span>
                Join <strong className="text-pink-600">10,000+</strong> businesses already automating
              </span>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative">
                        <div
                            className="absolute -top-16 -right-16 w-72 h-72 bg-pink-200/50 rounded-full blur-3xl"></div>
                        <div
                            className="absolute -bottom-8 -left-8 w-60 h-60 bg-pink-100/50 rounded-full blur-3xl"></div>

                        <div
                            className="relative bg-transparent rounded-2xl p-4 h-96 md:h-[500px] overflow-hidden">
                            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                <SplineScene/>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100 animate-float">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center">
                                            <div
                                                className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white">
                                                <Sparkles className="w-4 h-4"/>
                                            </div>
                                            <h3 className="ml-2 font-medium">Automation Magic</h3>
                                        </div>
                                        <span
                                            className="text-xs bg-green-100 text-green-800 px-2 rounded-full">Active</span>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                                        <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                                        <div className="h-2 bg-gray-200 rounded-full w-4/6"></div>
                                    </div>

                                    <div className="mt-6 flex">
                                        <div className="flex items-center text-xs text-gray-500">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                                            Running smoothly
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Curved wave separator */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 120L48 100C96 80 192 40 288 26.7C384 13.3 480 26.7 576 33.3C672 40 768 40 864 46.7C960 53.3 1056 66.7 1152 66.7C1248 66.7 1344 53.3 1392 46.7L1440 40V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
