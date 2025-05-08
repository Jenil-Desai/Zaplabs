import {Skeleton} from "@/components/ui/skeleton";

export default function ZapCreationSkeleton() {
    return (
        <div className="flex flex-col justify-center space-y-4 h-full w-full">
            {/* Header Skeleton */}
            <div className="flex justify-between items-center">
                <Skeleton className="h-10 w-1/4"/>
                <Skeleton className="h-10 w-24"/>
            </div>

            {/* Flow Editor Skeleton */}
            <div
                className="h-full w-full border border-pink-200/30 rounded-lg shadow-sm backdrop-blur-sm bg-white/50 p-4">
                <div className="h-full w-full relative">
                    {/* Placeholder nodes */}
                    <Skeleton className="absolute top-10 left-10 h-12 w-36 rounded-md"/>
                    <Skeleton className="absolute top-40 left-10 h-12 w-36 rounded-md"/>
                    <Skeleton className="absolute top-70 left-10 h-12 w-36 rounded-md"/>

                    {/* Connecting lines */}
                    <Skeleton className="absolute top-[70px] left-[70px] h-1 w-40 bg-pink-300"/>
                    <Skeleton className="absolute top-[190px] left-[70px] h-1 w-40 bg-pink-300"/>
                </div>
            </div>
        </div>
    );
}