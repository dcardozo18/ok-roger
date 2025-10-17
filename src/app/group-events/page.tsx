
"use client";

import { CalendarView } from "@/components/calendar/CalendarView";
import { groupEvents } from "@/lib/data";

export default function GroupEventsPage() {
  return (
    <div className="flex flex-col flex-1 h-screen bg-background">
      <CalendarView initialEvents={groupEvents} />
    </div>
  );
}
