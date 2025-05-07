"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginSchema, loginSchema } from "@/schema/loginSchema";
import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { logger } from "@repo/logger";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: any) {
    if (!isLoaded) {
      toast.error("Error", {
        description: "Clerk is not loaded",
        dismissible: true,
      });
      return;
    }

    console.log("Form data", data);

    try {
      const signInAttempt = await signIn.create({
        identifier: data.email,
        password: data.password,
      });
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/dashboard");
      } else {
        toast.error("Error", {
          description: "Something went wrong",
          dismissible: true,
        });
      }
    } catch (error) {
      logger.error("Error signing up artist", error);
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      toast.error("Error", {
        description: errorMessage,
        dismissible: true,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input {...field} placeholder="name@example.com" className="pl-10" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center justify-between">
                    <Label>Password</Label>
                    <Link href="/forgot-password" className="text-sm font-medium text-pink-600 hover:text-pink-700">
                      Forgot password?
                    </Link>
                  </div>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input {...field} type={showPassword ? "text" : "password"} placeholder="••••••••" className="pl-10" />
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
        <div id="clerk-captcha"></div>
        <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              <span className="text-white">Logging in...</span>
            </div>
          ) : (
            <span className={"text-white"}>Login</span>
          )}
        </Button>
      </form>
    </Form>
  );
}
