
import { GroupEventsCalendar } from "@/components/dashboard/GroupEventsCalendar";
import { Header } from "@/components/dashboard/Header";
import { groupEvents } from "@/lib/data";

export default function GroupEventsPage() {
  return (
    <div className="flex flex-col bg-muted/40 flex-1">
      <Header />
      <main className="flex-1 p-4 sm:px-6 sm:py-0">
        <GroupEventsCalendar events={groupEvents} />
      </main>
    </div>
  );
}
