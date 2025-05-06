"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { registerSchema, RegisterSchema } from "@/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { toast } from "sonner";
import { logger } from "@repo/logger";
import { useSignUp } from "@clerk/nextjs";
import { VerificationForm } from "../Verify/VerifyForm";
import { useAtom } from "jotai";
import { isVerifyingAtom } from "@/store/atoms";
import { SetActiveParams } from "@clerk/types";

export function RegisterForm() {
  const [isVerifying, setIsVerifying] = useAtom(isVerifyingAtom);
  const [showPassword, setShowPassword] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      acceptTerms: false,
    },
  });

  async function onSubmit(data: RegisterSchema) {
    if (!isLoaded) {
      toast.error("Clerk is not loaded yet. Please try again.");
      return;
    }

    try {
      console.log(data);
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      setIsVerifying(true);
    } catch (error) {
      logger.error("[CLIENT]: Error creating account: ", error);
      toast.error("An error occurred while creating your account.");
    }
  }

  if (isVerifying) {
    if (!isLoaded) {
      toast.error("Clerk is not loaded yet. Please try again.");
      return;
    }

    return <VerificationForm isLoaded={isLoaded} signUp={signUp} setActive={setActive} />;
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="John Doe" className="pl-10" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input type="email" placeholder="name@example.com" className="pl-10" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="pl-10" {...field} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-400 hover:text-gray-600" tabIndex={-1}>
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            name="acceptTerms"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox {...field} value={field.value ? "true" : undefined} />
                </FormControl>
                <FormLabel className="text-sm font-medium leading-none">
                  I accept the{" "}
                  <Link href="/terms" className="text-pink-600 hover:text-pink-700 underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-pink-600 hover:text-pink-700 underline">
                    Privacy Policy
                  </Link>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div id="clerk-captcha"></div>
        <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              <span>Creating Account...</span>
            </div>
          ) : (
            <span className="text-white">Create Account</span>
          )}
        </Button>
      </form>
    </Form>
  );
}
