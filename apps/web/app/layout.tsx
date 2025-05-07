import ConditionalLayout from "@/components/global/ConditionalLayout";
import Providers from "@/components/layouts/Providers";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zaplabs",
  description: "Zaplabs",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ConditionalLayout>
            <Toaster expand={true} richColors={true} />
            {children}
          </ConditionalLayout>
        </Providers>
      </body>
    </html>
  );
}
