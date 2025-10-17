import { StatCard } from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { ActiveProjects } from "@/components/dashboard/ActiveProjects";
import { TeamMembers } from "@/components/dashboard/TeamMembers";
import { TaskDistributionChart } from "@/components/dashboard/TaskDistributionChart";
import { TaskList } from "@/components/dashboard/TaskList";
import { ActivityStream } from "@/components/dashboard/ActivityStream";
import { stats, monthlySales, activeProjects, teamMembers, tasks, activityStream, taskDistribution } from "@/lib/data";
import { Header } from "@/components/dashboard/Header";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarInset } from "@/components/ui/sidebar";


export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40">
            <Header />
            <main className="flex-1 p-4 sm:px-6 sm:py-6 md:gap-8">
              <div className="grid grid-cols-1 auto-rows-max gap-4 md:gap-8 lg:grid-cols-3">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:col-span-3 xl:grid-cols-4">
                  {stats.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-4 lg:col-span-3 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="xl:col-span-2">
                    <SalesChart data={monthlySales} />
                  </div>
                  <div>
                    <ActiveProjects projects={activeProjects} />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:col-span-3 lg:grid-cols-2">
                  <TaskList tasks={tasks} />
                  <div className="flex flex-col gap-4">
                    <TeamMembers members={teamMembers} />
                    <TaskDistributionChart data={taskDistribution} />
                  </div>
                </div>
                 <div className="lg:col-span-3">
                    <ActivityStream activities={activityStream} />
                 </div>
              </div>
            </main>
        </div>
      </SidebarInset>
    </div>
  );
}
