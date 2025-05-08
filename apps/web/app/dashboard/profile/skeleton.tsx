import React from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";

export default function ProfileSkeleton() {
    return (
        <>
            <h1 className="text-3xl font-bold text-pink-700 mb-6">Your Profile</h1>

            <Card className="max-w-2xl mx-auto border-pink-100 bg-white/80 backdrop-blur-sm">
                <CardHeader className="flex flex-col items-center pb-6 border-b border-pink-100">
                    <div className="mb-4">
                        <Skeleton className="h-24 w-24 rounded-full border-2 border-pink-200"/>
                    </div>
                    <Skeleton className="h-8 w-48"/>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <div className="grid gap-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item}
                                 className="grid grid-cols-1 md:grid-cols-3 gap-2 py-2 border-b border-pink-50">
                                <Skeleton className="h-6 w-24"/>
                                <div className="md:col-span-2">
                                    <Skeleton className="h-6 w-full"/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center pt-4">
                        <Skeleton className="h-10 w-32"/>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};