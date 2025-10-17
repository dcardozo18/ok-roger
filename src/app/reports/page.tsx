

import { Header } from "@/components/dashboard/Header";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { TaskDistributionChart } from "@/components/dashboard/TaskDistributionChart";
import { monthlySales, reportStats, taskDistribution } from "@/lib/data";

export default function ReportsPage() {
  return (
    <div className="flex flex-col bg-muted/40 flex-1">
      <Header />
      <main className="flex-1 p-4 sm:px-6 sm:py-0 grid gap-4 md:gap-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {reportStats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
            ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="lg:col-span-4">
                <SalesChart data={monthlySales} />
            </div>
            <div className="lg:col-span-3">
                <TaskDistributionChart data={taskDistribution} />
            </div>
        </div>
      </main>
    </div>
  );
}
