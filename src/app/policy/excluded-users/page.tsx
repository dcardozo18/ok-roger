
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { ExcludedUsersTable } from "@/components/policy/excluded-users/ExcludedUsersTable";
import { SidebarInset } from "@/components/ui/sidebar";
import { users } from "@/lib/data";

// For demonstration, we'll treat the first 2 users as excluded.
const excludedUsers = users.slice(0, 2);

export default function ExcludedUsersPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            <ExcludedUsersTable excludedUsers={excludedUsers} allUsers={users} />
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
