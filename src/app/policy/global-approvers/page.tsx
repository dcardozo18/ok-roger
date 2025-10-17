
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { GlobalApproversTable } from "@/components/policy/approvers/GlobalApproversTable";
import { SidebarInset } from "@/components/ui/sidebar";
import { approvers } from "@/lib/data";

export default function GlobalApproversPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
             <div className="mb-4">
                <h1 className="text-2xl font-semibold">Global Approvers</h1>
                <p className="text-muted-foreground">Manage your organization's global approvers.</p>
            </div>
            <GlobalApproversTable approvers={approvers} />
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
