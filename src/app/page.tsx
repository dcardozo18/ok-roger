import { StatCard } from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { ActivityStream } from "@/components/dashboard/ActivityStream";
import { stats, monthlySales, activityStream } from "@/lib/data";
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
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
              <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:col-span-3 xl:grid-cols-4">
                  {stats.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-4 lg:col-span-3">
                    <SalesChart data={monthlySales} />
                </div>
                <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
                  <ActivityStream activities={activityStream} />
                </div>
              </div>
            </main>
        </div>
      </SidebarInset>
    </div>
  );
}
