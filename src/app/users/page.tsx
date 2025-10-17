import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { SidebarInset } from "@/components/ui/sidebar";
import { UsersTable } from "@/components/users/UsersTable";
import { users } from "@/lib/data";

export default function UsersPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            <UsersTable users={users} />
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
