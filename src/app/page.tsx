
import { StatCard } from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { ActivityStream } from "@/components/dashboard/ActivityStream";
import { stats, monthlySales, activityStream } from "@/lib/data";
import { Header } from "@/components/dashboard/Header";

export default function DashboardPage() {
  return (
    <div className="flex flex-col bg-muted/40 flex-1">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <SalesChart data={monthlySales} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </div>
          </div>
          <div className="grid auto-rows-max items-start gap-4 md:gap-8">
            <ActivityStream activities={activityStream} />
          </div>
        </main>
    </div>
  );
}
