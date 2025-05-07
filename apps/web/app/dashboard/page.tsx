import {DashboardStats} from "@/components/section/Dashboard/Home/Statatics/DashboardStats";

export default function Page() {
    return (
        <>
            <h1 className="text-3xl font-bold text-pink-700 mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <DashboardStats/>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold text-pink-700 mb-4">Recommended Automations</h2>
            </div>
        </>
    );
}