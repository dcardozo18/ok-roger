
import { Header } from "@/components/dashboard/Header";
import { GlobalApproversTable } from "@/components/policy/approvers/GlobalApproversTable";
import { approvers } from "@/lib/data";

export default function GlobalApproversPage() {
  return (
    <div className="flex flex-col bg-muted/40 flex-1">
      <Header />
      <main className="flex-1 p-4 sm:px-6 sm:py-0">
        <GlobalApproversTable approvers={approvers} />
      </main>
    </div>
  );
}
