
"use client";

import { CalendarView } from "@/components/calendar/CalendarView";
import { Header } from "@/components/dashboard/Header";
import { groupEvents } from "@/lib/data";

export default function GroupEventsPage() {
  return (
    <div className="flex flex-col bg-muted/40 flex-1">
      <Header />
      <main className="flex-1 flex flex-col">
        <CalendarView initialEvents={groupEvents} />
      </main>
    </div>
  );
}
