"use client";
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Home} from "lucide-react";
import AnimatedGlassmorphism from "@/components/global/AnimatedGlassmorphism";
import Link from "next/link";

const NotFound = () => {

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <AnimatedGlassmorphism/>

            <div className="relative z-10 text-center px-4 md:px-0">
                <div className="space-y-8">
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className="space-y-2"
                    >
                        <h1 className="text-8xl md:text-9xl font-bold gradient-text">404</h1>
                        <motion.div
                            initial={{width: "0%"}}
                            animate={{width: "100%"}}
                            transition={{delay: 0.4, duration: 0.8}}
                            className="h-1 bg-gradient-to-r from-pink-300 to-pink-500 mx-auto rounded-full"
                        />
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.6, duration: 0.8}}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
                            Oops! Page not found
                        </h2>
                        <p className="text-gray-600 max-w-md mx-auto">
                            The page you&apos;re looking for doesn&apos;t exist or has been moved. Don&apos;t worry,
                            let&apos;s get you back on track with ease.
                            on track.
                        </p>

                        <motion.div
                            initial={{scale: 0.8, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            transition={{delay: 1, type: "spring", stiffness: 100}}
                            whileHover={{scale: 1.05}}
                            className="pt-4"
                        >
                            <Button
                                asChild
                                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 rounded-lg shadow-lg"
                            >
                                <Link href="/" className="flex items-center gap-2">
                                    <Home size={18}/>
                                    Return to Home
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            className="relative h-40 md:h-64 mt-8"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1.2, duration: 0.8}}
                        >
                            <motion.div
                                className="absolute inset-0 flex justify-center"
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "easeInOut"
                                }}
                            >
                                <svg width="200" height="200" viewBox="0 0 200 200" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 15C90 15 60 25 40 60C20 95 20 135 40 160C60 185 90 185 100 185C110 185 140 185 160 160C180 135 180 95 160 60C140 25 110 15 100 15Z"
                                        fill="#FFDEE2"/>
                                    <circle cx="65" cy="80" r="8" fill="#333"/>
                                    <circle cx="135" cy="80" r="8" fill="#333"/>
                                    <path d="M70 120C70 120 85 130 100 130C115 130 130 120 130 120" stroke="#333"
                                          strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
