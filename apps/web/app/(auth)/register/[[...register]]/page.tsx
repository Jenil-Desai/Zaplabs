"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AnimatedGlassmorphism from "@/components/global/AnimatedGlassmorphism";
import Link from "next/link";
import { RegisterForm } from "@/components/section/Registration/Register/RegisterForm";
import { useAtomValue } from "jotai";
import { isVerifyingAtom } from "@/store/atoms";

export default function Page() {
  const isVerifying = useAtomValue(isVerifyingAtom);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedGlassmorphism />

      <div className="w-full max-w-md space-y-8 reveal active z-10">
        <div className="text-center">
          <Link href="/apps/web/public" className="inline-block">
            <h1 className="text-3xl font-bold text-pink-600">Zaplabs</h1>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">{!isVerifying ? "Create an account" : "Verify your account"}</h2>
          <p className="mt-2 text-sm text-gray-600">{!isVerifying ? "Start automating your workflows in minutes" : "Enter the 6-digit code we sent to your email"}</p>
        </div>

        <Card className="border border-pink-100 shadow-lg animate-fade-in backdrop-blur-sm bg-white/90">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">{!isVerifying ? "Sign Up" : "Enter Code"}</CardTitle>
            <CardDescription className="text-center">{!isVerifying ? "Enter your information to create your account" : "Verification code sent to your email"}</CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            {!isVerifying ? (
              <>
                <Separator className="my-2" />
                <div className="text-center text-sm">
                  <span className="text-gray-600">Already have an account?</span>
                  <Link href="/login" className="font-semibold text-pink-600 hover:text-pink-700 inline-flex items-center">
                    Login
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="text-center text-sm">
                  <div className="text-center text-sm">
                    <Link href="/login" className="font-semibold text-pink-600 hover:text-pink-700 inline-flex items-center">
                      Return to login
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </>
            )}
          </CardFooter>
        </Card>

        <div className="text-center mt-4 text-sm text-gray-600 reveal active">
          <p>Protected by Zaplabs security</p>
        </div>
      </div>
    </div>
  );
}
