
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { TaskDistributionChart } from "@/components/dashboard/TaskDistributionChart";
import { TeamMembers } from "@/components/dashboard/TeamMembers";
import { SidebarInset } from "@/components/ui/sidebar";
import { monthlySales, stats, taskDistribution, teamMembers } from "@/lib/data";

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40 flex-1">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0 grid gap-4 md:gap-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="lg:col-span-4">
                    <SalesChart data={monthlySales} />
                </div>
                <div className="lg:col-span-3 grid grid-cols-1 gap-4">
                    <TaskDistributionChart data={taskDistribution} />
                </div>
            </div>
             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                 <div className="lg:col-span-2">
                    <TeamMembers members={teamMembers} />
                 </div>
             </div>
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
