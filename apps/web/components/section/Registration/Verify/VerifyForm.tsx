import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { logger } from "@repo/logger";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VerificationSchema, verificationSchema } from "@/schema/verficationSchema";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Form } from "@/components/ui/form";
import { SetActive, SignUpResource } from "@clerk/types";

interface VerificationFormProps {
  isLoaded: boolean;
  signUp: SignUpResource;
  setActive: SetActive;
}

export function VerificationForm({ isLoaded, signUp, setActive }: VerificationFormProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      code: "",
    },
  });

  async function onSubmit(data: VerificationSchema) {
    if (!isLoaded || !signUp || !setActive) {
      toast.error("Clerk is not loaded yet. Please try again.");
      return;
    }

    console.log("Verifying OTP:", data);
    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: data.code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.push("/");
        return;
      } else {
        toast.error("Error", {
          description: "Invalid verification code",
          dismissible: true,
        });
      }
    } catch (error) {
      logger.error("Error verifying user email", error);
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      toast.error("Error", {
        description: errorMessage,
        dismissible: true,
      });
    }
  }

  const handleSuccess = () => {
    setShowSuccess(false);
    router.push("/dashboard");
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex justify-center py-4">
            <FormField
              disabled={form.formState.isLoading}
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP className="flex items-center justify-center" maxLength={6} {...field} onChange={(newValue) => field.onChange(newValue)} disabled={form.formState.isSubmitting}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                <span className="text-white">Verifying...</span>
              </div>
            ) : (
              <span className="text-white">Verify</span>
            )}
          </Button>
        </form>
      </Form>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md border border-pink-100 bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Verification Successful</DialogTitle>
            <DialogDescription className="text-center">Your account has been successfully verified.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-4">
            <div className="rounded-full bg-pink-100 p-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm text-gray-600 max-w-xs text-center">You can now access all features of FlowSync. Click below to continue to your dashboard.</p>
          </div>
          <div className="flex justify-center">
            <Button onClick={handleSuccess} className="bg-pink-600 hover:bg-pink-700 px-6">
              Continue to Dashboard
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
