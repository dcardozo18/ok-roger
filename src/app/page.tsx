import { Header } from "@/components/dashboard/Header";
import { StatCard } from "@/components/dashboard/StatCard";
import { ClientList } from "@/components/dashboard/ClientList";
import { ActiveProjects } from "@/components/dashboard/ActiveProjects";
import { TeamMembers } from "@/components/dashboard/TeamMembers";
import { TaskDistributionChart } from "@/components/dashboard/TaskDistributionChart";
import { TaskList } from "@/components/dashboard/TaskList";
import { ActivityStream } from "@/components/dashboard/ActivityStream";
import { stats, clients, activeProjects, teamMembers, tasks, activityStream, taskDistribution } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
              <div className="xl:col-span-2">
                <ClientList clients={clients} />
              </div>
              <div>
                <ActiveProjects projects={activeProjects} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <TaskList tasks={tasks} />
              <ActivityStream activities={activityStream} />
            </div>
          </div>
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-1">
            <div className="grid grid-cols-1 gap-4">
              <TeamMembers members={teamMembers} />
              <TaskDistributionChart data={taskDistribution} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}