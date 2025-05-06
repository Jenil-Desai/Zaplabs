"use client";
import React from "react";
import { ArrowRight, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import AnimatedGlassmorphism from "@/components/global/AnimatedGlassmorphism";
import Link from "next/link";
import { LoginForm } from "@/components/section/Login/LoginForm";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedGlassmorphism />

      <div className="w-full max-w-md space-y-8 reveal active z-10">
        <div className="text-center">
          <Link href="/apps/web/public" className="inline-block">
            <h1 className="text-3xl font-bold text-pink-600">Zaplabs</h1>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">Log in to your account to continue your workflow automation journey</p>
        </div>

        <Card className="border border-pink-100 shadow-lg animate-fade-in backdrop-blur-sm bg-white/90">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Separator className="my-2" />
            <div className="text-center text-sm">
              <span className="text-gray-600">Don&apos;t have an account? </span>
              <Link href="/register" className="font-semibold text-pink-600 hover:text-pink-700 inline-flex items-center">
                Register now
                <ArrowRight className="ml-1 h-4 w-4" />
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
