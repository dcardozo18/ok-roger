
import { GroupEventsCalendar } from "@/components/dashboard/GroupEventsCalendar";
import { EventList } from "@/components/dashboard/EventList";
import { Header } from "@/components/dashboard/Header";
import { groupEvents } from "@/lib/data";

export default function GroupEventsPage() {
  return (
    <div className="flex flex-col bg-muted/40 flex-1 h-screen">
      <Header />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:px-6 sm:py-0">
        <div className="md:col-span-2">
            <GroupEventsCalendar events={groupEvents} />
        </div>
        <div>
            <EventList events={groupEvents} />
        </div>
      </main>
    </div>
  );
}
