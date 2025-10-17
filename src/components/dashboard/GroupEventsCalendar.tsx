"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { GroupEvent } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface GroupEventsCalendarProps {
  events: GroupEvent[];
}

const tagColors: Record<GroupEvent["tag"], string> = {
  Team: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
  Product: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
  Company: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
};

export function GroupEventsCalendar({ events }: GroupEventsCalendarProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  
  const upcomingEvents = events
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Group Events</CardTitle>
        <CardDescription>An overview of upcoming group events.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Upcoming</h3>
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-start gap-3">
                <div className="flex-1">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })} at {event.time}
                  </p>
                </div>
                <Badge variant="outline" className={cn("border-transparent", tagColors[event.tag])}>{event.tag}</Badge>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No upcoming events.</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
