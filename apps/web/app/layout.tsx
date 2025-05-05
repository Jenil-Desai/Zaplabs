import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import ConditionalLayout from "@/components/global/ConditionalLayout";
import {Toaster} from "@/components/ui/sonner";


export const metadata: Metadata = {
    title: "Zaplabs",
    description: "Zaplabs",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body>
        <ConditionalLayout>
            <Toaster expand={true} richColors={true}/>
            {children}
        </ConditionalLayout>
        </body>
        </html>
    );
}
