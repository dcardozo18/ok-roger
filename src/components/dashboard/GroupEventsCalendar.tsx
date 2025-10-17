"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { GroupEvent } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { eachDayOfInterval, isSameDay } from "date-fns"

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

  const eventDates = events.map(event => new Date(event.date));

  const EventDay = (day: Date) => {
    const eventsOnDay = events.filter(event => isSameDay(new Date(event.date), day));
    if (eventsOnDay.length === 0) {
      return (
        <div className="relative flex h-full w-full items-center justify-center">
          {day.getDate()}
        </div>
      );
    }
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="sm" className="w-full h-full p-0 font-normal">
            <div className="relative flex h-full w-full items-center justify-center">
              {day.getDate()}
              <div className="absolute bottom-1 flex gap-0.5">
                {eventsOnDay.map(event => (
                  <div key={event.id} className={cn("h-1 w-1 rounded-full", tagColors[event.tag].split(' ')[0])} />
                ))}
              </div>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4 space-y-2">
          <h4 className="font-semibold">{day.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
          <div className="space-y-2">
            {eventsOnDay.map(event => (
               <div key={event.id} className="flex items-start gap-3">
                <div className="flex-1">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>
                <Badge variant="outline" className={cn("border-transparent", tagColors[event.tag])}>{event.tag}</Badge>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    );
  };


  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Group Events</CardTitle>
        <CardDescription>An overview of upcoming group events.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex justify-center items-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          modifiers={{ hasEvent: eventDates }}
          modifiersClassNames={{
            hasEvent: "has-event",
          }}
          components={{
            Day: ({ date }) => EventDay(date),
          }}
          className="w-full p-0 [&_td]:p-0"
        />
      </CardContent>
    </Card>
  )
}
