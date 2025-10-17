import { StatCard } from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { TeamMembers } from "@/components/dashboard/TeamMembers";
import { ActivityStream } from "@/components/dashboard/ActivityStream";
import { stats, monthlySales, teamMembers, activityStream, groupEvents } from "@/lib/data";
import { Header } from "@/components/dashboard/Header";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { GroupEventsCalendar } from "@/components/dashboard/GroupEventsCalendar";
import { TaskDistributionChart } from "@/components/dashboard/TaskDistributionChart";
import { taskDistribution } from "@/lib/data";


export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40">
            <Header />
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
              <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:col-span-3 xl:grid-cols-4">
                  {stats.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-4 lg:col-span-3 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="col-span-1 xl:col-span-2">
                        <SalesChart data={monthlySales} />
                    </div>
                </div>
              </div>
              <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-1">
                <GroupEventsCalendar events={groupEvents} />
                <TaskDistributionChart data={taskDistribution} />
              </div>
              <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <ActivityStream activities={activityStream} />
              </div>
            </main>
        </div>
      </SidebarInset>
    </div>
  );
}
