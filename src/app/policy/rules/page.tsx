
import { Header } from "@/components/dashboard/Header";
import { RulesTable } from "@/components/policy/rules/RulesTable";
import { policyRules } from "@/lib/data";

export default function RulesPage() {
  return (
    <div className="flex flex-col bg-muted/40 flex-1">
      <Header />
      <main className="flex-1 p-4 sm:px-6 sm:py-0">
        <RulesTable rules={policyRules} />
      </main>
    </div>
  );
}
