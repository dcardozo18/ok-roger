
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { RulesTable } from "@/components/policy/rules/RulesTable";
import { SidebarInset } from "@/components/ui/sidebar";
import { policyRules } from "@/lib/data";

export default function RulesPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            <RulesTable rules={policyRules} />
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
