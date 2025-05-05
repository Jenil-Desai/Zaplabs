import React from "react";
import {Button} from "@/components/ui/button";
import {Sparkles} from "lucide-react";

const CallToAction = () => {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div
                    className="max-w-5xl mx-auto bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl overflow-hidden shadow-lg reveal">
                    <div className="relative px-6 py-12 md:p-12">
                        {/* Decorative elements */}
                        <div
                            className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-pink-200/50 rounded-full blur-2xl"></div>
                        <div
                            className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-pink-200/30 rounded-full blur-2xl"></div>

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="mb-8 md:mb-0 md:pr-8">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Ready to Automate Your Business?
                                </h2>
                                <p className="text-lg text-gray-700 max-w-lg">
                                    Start your free 14-day trial today. No credit card required.
                                    Set up your first workflow in minutes.
                                </p>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <Button className="text-md px-8 py-6 bg-pink-500 hover:bg-pink-600 text-white">
                                    Start Free Trial
                                </Button>
                                <Button variant="outline" className="text-md px-8 py-6">
                                    <Sparkles className="mr-2 h-4 w-4"/>
                                    Schedule Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 max-w-3xl mx-auto text-center reveal">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8">
                        Flexible Plans for Every Business
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {["Starter", "Business", "Enterprise"].map((plan, index) => (
                            <div
                                key={index}
                                className={`rounded-xl p-6 border shadow-sm transition-all duration-300 card-hover ${
                                    index === 1 ? "border-pink-300 bg-pink-50/50" : "border-gray-200 bg-white"
                                }`}
                            >
                                <div className="font-bold text-lg mb-2">{plan}</div>
                                <div className="mb-4">
                  <span className="text-3xl font-bold">
                    ${index === 0 ? "19" : index === 1 ? "49" : "99"}
                  </span>
                                    <span className="text-gray-500">/month</span>
                                </div>
                                <hr className="my-4 border-t border-gray-100"/>
                                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                                    {[
                                        `${index === 0 ? "100" : index === 1 ? "1,000" : "10,000"} operations/mo`,
                                        `${index === 0 ? "5" : index === 1 ? "20" : "Unlimited"} workflows`,
                                        "Core integrations",
                                        index > 0 ? "Advanced conditions" : null,
                                        index > 0 ? "API access" : null,
                                        index === 2 ? "Custom integrations" : null,
                                        index === 2 ? "Dedicated support" : null,
                                    ]
                                        .filter(Boolean)
                                        .map((feature, i) => (
                                            <li key={i} className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-pink-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                </ul>
                                <Button
                                    className={`w-full ${
                                        index === 1
                                            ? "bg-pink-500 hover:bg-pink-600 text-white"
                                            : "bg-gray-800 hover:bg-gray-900 text-white"
                                    }`}
                                >
                                    Choose Plan
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
