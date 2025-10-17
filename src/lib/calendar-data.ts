export type EventType = {
  id: string
  label: string
  color: string
}

export type CalendarEvent = {
  id: string
  title: string
  date: string
  type: string
}

export const calendarData = {
  eventTypes: [
    { id: "events", label: "Events", color: "bg-purple-500" },
    { id: "personal", label: "Personal", color: "bg-blue-500" },
    { id: "meeting", label: "Meeting", color: "bg-green-500" },
    { id: "festival", label: "Festival Function", color: "bg-teal-500" },
  ],
  events: [
    { id: "e1", title: "Meeting", date: "2025-10-01", type: "meeting" },
    { id: "e2", title: "Update Weekly", date: "2025-10-07", type: "personal" },
    { id: "e3", title: "School Reunion", date: "2025-10-10", type: "personal" },
    { id: "e4", title: "Family Dinner", date: "2025-10-14", type: "events" },
    { id: "e5", title: "Holiday Tour", date: "2025-10-14", type: "events" },
    { id: "e6", title: "Marriage Function", date: "2025-10-17", type: "festival" },
  ],
}
