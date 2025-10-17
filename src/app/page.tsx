import { StatCard } from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { TeamMembers } from "@/components/dashboard/TeamMembers";
import { GroupEventsCalendar } from "@/components/dashboard/GroupEventsCalendar";
import { ActivityStream } from "@/components/dashboard/ActivityStream";
import { stats, monthlySales, teamMembers, groupEvents, activityStream } from "@/lib/data";
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
              <div className="grid grid-cols-1 auto-rows-max gap-4 md:gap-8 lg:grid-cols-4">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:col-span-4 xl:grid-cols-4">
                  {stats.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                  ))}
                </div>
                <div className="lg:col-span-4">
                  <SalesChart data={monthlySales} />
                </div>
                <div className="grid grid-cols-1 gap-4 lg:col-span-4 xl:grid-cols-5">
                  <div className="xl:col-span-3">
                    <GroupEventsCalendar events={groupEvents} />
                  </div>
                  <div className="xl:col-span-2 flex flex-col gap-4">
                    <TeamMembers members={teamMembers} />
                  </div>
                </div>
                 <div className="lg:col-span-4">
                    <ActivityStream activities={activityStream} />
                 </div>
              </div>
            </main>
        </div>
      </SidebarInset>
    </div>
  );
}
