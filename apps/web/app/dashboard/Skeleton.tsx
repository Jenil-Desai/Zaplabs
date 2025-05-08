import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";

export default function PageSkeleton() {
    return (
        <div className="dashboard-page">
            {/* Page Title Skeleton */}
            <header className="page-header mb-6">
                <Skeleton className="h-9 w-52"/>
            </header>

            {/* Dashboard Statistics Skeleton */}
            <section className="dashboard-stats-section mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array(3).fill(null).map((_, index) => (
                        <Card key={index} className="border border-pink-100 shadow-md backdrop-blur-sm bg-white/80">
                            <CardHeader>
                                <Skeleton className="h-5 w-24 mb-2"/>
                                <Skeleton className="h-9 w-20 mb-2"/>
                                <Skeleton className="h-4 w-32"/>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Recommended Automations Skeleton */}
            <section className="automation-recommendations-section mb-8">
                <Skeleton className="h-6 w-52 mb-4"/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {Array(4).fill(null).map((_, index) => (
                        <Card key={index} className="border border-pink-100 shadow-md backdrop-blur-sm bg-white/80">
                            <CardContent>
                                <Skeleton className="h-5 w-36 mb-2"/>
                                <Skeleton className="h-7 w-48 mb-2"/>
                                <Skeleton className="h-4 w-64"/>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}