"use client";
import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {format} from "date-fns";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {UserRound} from "lucide-react";
import {useQuery} from "@tanstack/react-query";
import {getUserProfile} from "@/queryFn/getUserProfile";
import {useUser} from "@clerk/nextjs";
import ProfileSkeleton from "@/app/dashboard/profile/skeleton";
import {toast} from "sonner";

export default function Page() {
    const {user: currentUser} = useUser();

    const {isError, isPending, data: user} = useQuery({
        queryKey: ["userProfile"],
        queryFn: getUserProfile
    });

    if (isPending) return <ProfileSkeleton/>;

    if (isError) {
        toast.error("Error loading profile");
        return <ProfileSkeleton/>;
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-pink-700 mb-6">Your Profile</h1>

            <Card className="max-w-2xl mx-auto border-pink-100 bg-white/80 backdrop-blur-sm">
                <CardHeader className="flex flex-col items-center pb-6 border-b border-pink-100">
                    <div className="mb-4 relative group">
                        <Avatar className="h-24 w-24 border-2">
                            {currentUser?.imageUrl ? (
                                <AvatarImage src={currentUser.imageUrl}
                                             alt={`${user.name.slice(0, user.name.indexOf(" "))} ${user.name.slice(user.name.indexOf(" ") + 1)}`}/>
                            ) : (
                                <AvatarFallback className="text-2xl bg-pink-100 text-pink-700">
                                    {user.name.charAt(0)}{user.name.slice(user.name.indexOf(" ") + 1).charAt(0)}
                                </AvatarFallback>
                            )}
                        </Avatar>
                        <Button
                            variant="secondary"
                            size="sm"
                            className="absolute bottom-0 right-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-pink-500 hover:bg-pink-600 text-white"
                        >
                            <UserRound className="h-4 w-4"/>
                        </Button>
                    </div>
                    <CardTitle className="text-2xl text-center text-pink-700">
                        {user.name.slice(0, user.name.indexOf(" "))} {user.name.slice(user.name.indexOf(" ") + 1)}
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <div className="grid gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-2 border-b border-pink-50">
                            <span className="font-medium text-pink-700">First Name</span>
                            <span className="md:col-span-2">{user.name.slice(0, user.name.indexOf(" "))}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-2 border-b border-pink-50">
                            <span className="font-medium text-pink-700">Last Name</span>
                            <span className="md:col-span-2">{user.name.slice(user.name.indexOf(" ") + 1)}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-2 border-b border-pink-50">
                            <span className="font-medium text-pink-700">Email</span>
                            <span className="md:col-span-2">{user.email}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-2">
                            <span className="font-medium text-pink-700">Member Since</span>
                            <span className="md:col-span-2">
                      {format(user.createdAt, "MMMM dd, yyyy")}
                    </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};