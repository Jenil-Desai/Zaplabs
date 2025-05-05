import React, {useEffect} from "react";
import {ArrowRight} from "lucide-react";
import {features} from "@/components/section/Landing/Features/FeaturesList";

const Features = () => {
    useEffect(() => {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            {threshold: 0.2}
        );

        const revealElements = document.querySelectorAll(".reveal");
        revealElements.forEach((el) => observer.observe(el));

        return () => {
            revealElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
                        Powerful Features for Every Workflow
                    </h2>
                    <p className="text-xl text-gray-600 reveal">
                        Zaplabs streamlines your business processes with powerful automation capabilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 border border-pink-100 shadow-sm hover:shadow-md transition-all duration-300 card-hover reveal"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <div
                                className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4 text-pink-600">
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition-colors reveal"
                    >
                        Explore all features
                        <ArrowRight className="ml-2 h-4 w-4"/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Features;
