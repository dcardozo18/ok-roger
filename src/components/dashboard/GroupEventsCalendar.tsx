
"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import type { GroupEvent } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

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
  
  const eventsByDate = React.useMemo(() => {
    return events.reduce((acc, event) => {
      const eventDate = new Date(event.date);
      const dateKey = eventDate.toISOString().split('T')[0];
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(event);
      return acc;
    }, {} as Record<string, GroupEvent[]>);
  }, [events]);

  const DayWithEvents = ({ date, displayMonth }: { date: Date; displayMonth: Date }) => {
    const dateKey = date.toISOString().split('T')[0];
    const eventsOnDay = eventsByDate[dateKey] || [];
    
    if (eventsOnDay.length === 0) {
      return (
        <div className="relative flex h-full w-full items-center justify-center">
          {date.getDate()}
        </div>
      );
    }
    
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="sm" className="w-full h-full p-0 font-normal relative">
              {date.getDate()}
              <div className="absolute bottom-1 flex gap-0.5">
                {eventsOnDay.map(event => (
                  <div key={event.id} className={cn("h-1 w-1 rounded-full", tagColors[event.tag].split(' ')[0])} />
                ))}
              </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4 space-y-2">
          <h4 className="font-semibold">{date.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
          <div className="space-y-4">
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
    <Card className="h-full">
      <CardContent className="flex items-center justify-center h-full">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="p-0"
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4 w-full",
            table: "w-full border-collapse space-y-1",
            row: "flex w-full mt-2",
            cell: "flex-1 h-20 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          }}
          components={{
            Day: DayWithEvents,
          }}
        />
      </CardContent>
    </Card>
  )
}
