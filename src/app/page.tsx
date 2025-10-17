import { StatCard } from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { TeamMembers } from "@/components/dashboard/TeamMembers";
import { ActivityStream } from "@/components/dashboard/ActivityStream";
import { stats, monthlySales, teamMembers, activityStream } from "@/lib/data";
import { Header } from "@/components/dashboard/Header";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { FullCalendar } from "@/components/dashboard/FullCalendar";
import { calendarData } from "@/lib/calendar-data";


export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40">
            <Header />
            <main className="flex-1 p-4 sm:px-6 sm:py-6 md:gap-8">
              <FullCalendar 
                events={calendarData.events} 
                eventTypes={calendarData.eventTypes}
              />
            </main>
        </div>
      </SidebarInset>
    </div>
  );
}
