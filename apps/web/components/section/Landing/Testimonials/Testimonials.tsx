"use client";
import {useState, useEffect} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {QuoteIcon} from "lucide-react";
import {testimonials} from "@/components/section/Landing/Testimonials/reviews";

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-24 bg-pink-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
                        Loved by Teams of All Sizes
                    </h2>
                    <p className="text-xl text-gray-600 reveal">
                        See why thousands of businesses trust Zaplabs to power their automation needs.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto reveal">
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 text-pink-200">
                            <QuoteIcon className="w-20 h-20"/>
                        </div>

                        <Card className="border border-pink-100 shadow-lg overflow-hidden z-10 relative bg-white">
                            <CardContent className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2">
                                        <div className="h-full flex flex-col justify-center">
                                            <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
                                                &quot;{testimonials[activeIndex].quote}&quot;
                                            </p>
                                            <div>
                                                <div className="font-semibold">{testimonials[activeIndex].author}</div>
                                                <div className="text-gray-500 text-sm">
                                                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden md:flex items-center justify-center">
                                        <div
                                            className="w-32 h-32 rounded-full bg-pink-100 flex items-center justify-center text-2xl font-bold text-pink-600">
                                            {testimonials[activeIndex].avatar}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex justify-center mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                                    index === activeIndex ? "bg-pink-500" : "bg-pink-200"
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {["Spotify", "Microsoft", "Airbnb", "Google"].map((company, index) => (
                        <div key={index} className="flex items-center justify-center reveal">
                            <div className="text-2xl font-bold text-gray-300">{company}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
