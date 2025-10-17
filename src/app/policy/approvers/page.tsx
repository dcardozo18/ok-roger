
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { ApproverCard } from "@/components/policy/approvers/ApproverCard";
import { SidebarInset } from "@/components/ui/sidebar";
import { approvers } from "@/lib/data";

export default function ApproversPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {approvers.map((approver) => (
                <ApproverCard key={approver.id} {...approver} />
              ))}
            </div>
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
