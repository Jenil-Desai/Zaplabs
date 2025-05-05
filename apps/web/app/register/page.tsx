"use client";
import React, {useState} from "react";
import {ArrowRight, Mail, Lock, Eye, EyeOff, User} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import {Checkbox} from "@/components/ui/checkbox";
import AnimatedGlassmorphism from "@/components/global/AnimatedGlassmorphism";
import Link from "next/link";
import {toast} from "sonner";

const Page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!acceptTerms) {
            toast.error("You must accept the terms and conditions to register.");
            return;
        }

        setIsLoading(true);

        // Simulate registration process
        setTimeout(() => {
            setIsLoading(false);
            toast.success("Account created successfully. Please check your email for verification.");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
            <AnimatedGlassmorphism/>

            <div className="w-full max-w-md space-y-8 reveal active z-10">
                <div className="text-center">
                    <Link href="/apps/web/public" className="inline-block">
                        <h1 className="text-3xl font-bold text-pink-600">Zaplabs</h1>
                    </Link>
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">Create an account</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Start automating your workflows in minutes
                    </p>
                </div>

                <Card className="border border-pink-100 shadow-lg animate-fade-in backdrop-blur-sm bg-white/90">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
                        <CardDescription className="text-center">
                            Enter your information to create your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="pl-10"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        className="pl-10"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="pl-10"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                        tabIndex={-1}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4"/>
                                        ) : (
                                            <Eye className="h-4 w-4"/>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="terms"
                                    checked={acceptTerms}
                                    onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    I accept the{" "}
                                    <Link href="/terms" className="text-pink-600 hover:text-pink-700 underline">
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="/privacy" className="text-pink-600 hover:text-pink-700 underline">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>
                            <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={isLoading}>
                                {isLoading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div
                                            className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                        <span>Creating Account...</span>
                                    </div>
                                ) : (
                                    <span className={"text-white"}>Create Account</span>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Separator className="my-2"/>
                        <div className="text-center text-sm">
                            <span className="text-gray-600">Already have an account?</span>
                            <Link href="/login"
                                  className="font-semibold text-pink-600 hover:text-pink-700 inline-flex items-center">
                                Login
                                <ArrowRight className="ml-1 h-4 w-4"/>
                            </Link>
                        </div>
                    </CardFooter>
                </Card>

                <div className="text-center mt-4 text-sm text-gray-600 reveal active">
                    <p>Protected by Zaplabs security</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
