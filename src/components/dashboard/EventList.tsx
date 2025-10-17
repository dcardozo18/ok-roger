
"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { GroupEvent } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface EventListProps {
  events: GroupEvent[];
}

const tagColors: Record<GroupEvent["tag"], string> = {
  Team: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
  Product: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
  Company: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
};

export function EventList({ events }: EventListProps) {
  const [filter, setFilter] = React.useState<GroupEvent["tag"] | "All">("All");

  const upcomingEvents = React.useMemo(() => {
    return events
      .filter(event => new Date(event.date) >= new Date())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [events]);
  
  const filteredEvents = React.useMemo(() => {
    if (filter === "All") return upcomingEvents;
    return upcomingEvents.filter(event => event.tag === filter);
  }, [filter, upcomingEvents]);


  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>A list of upcoming events.</CardDescription>
        <div className="flex gap-2 pt-2">
            <Button size="sm" variant={filter === 'All' ? 'default' : 'outline'} onClick={() => setFilter('All')}>All</Button>
            <Button size="sm" variant={filter === 'Team' ? 'default' : 'outline'} onClick={() => setFilter('Team')}>Team</Button>
            <Button size="sm" variant={filter === 'Product' ? 'default' : 'outline'} onClick={() => setFilter('Product')}>Product</Button>
            <Button size="sm" variant={filter === 'Company' ? 'default' : 'outline'} onClick={() => setFilter('Company')}>Company</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredEvents.map(event => (
             <div key={event.id} className="flex items-start gap-4">
              <div className="flex-shrink-0 text-center">
                <p className="font-bold text-lg">{new Date(event.date).toLocaleDateString(undefined, { day: 'numeric' })}</p>
                <p className="text-sm text-muted-foreground">{new Date(event.date).toLocaleDateString(undefined, { month: 'short' })}</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-muted-foreground">{event.time}</p>
              </div>
              <Badge variant="outline" className={cn("border-transparent self-center", tagColors[event.tag])}>{event.tag}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
