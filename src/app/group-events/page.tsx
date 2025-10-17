
"use client";

import * as React from "react";
import { CalendarView } from "@/components/calendar/CalendarView";
import { Header } from "@/components/dashboard/Header";
import { groupEvents, type GroupEvent } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { AddEventDialog } from "@/components/calendar/AddEventDialog";


export default function GroupEventsPage() {
  const [events, setEvents] = React.useState<GroupEvent[]>(groupEvents);
  const [isAddEventDialogOpen, setIsAddEventDialogOpen] = React.useState(false);

  const handleEventAdd = (event: GroupEvent) => {
    setEvents((prev) => [...prev, event]);
  };

  return (
    <>
    <AddEventDialog
        open={isAddEventDialogOpen}
        onOpenChange={setIsAddEventDialogOpen}
        onEventAdd={handleEventAdd}
      />
    <div className="flex flex-col bg-muted/40 flex-1">
      <Header />
      <main className="flex-1 p-4 sm:px-6 sm:py-0">
        <Card className="h-[calc(100vh-8rem)] flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Group Events</CardTitle>
                    <CardDescription>Manage and view your team's group events.</CardDescription>
                </div>
                <Button onClick={() => setIsAddEventDialogOpen(true)}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Event
                </Button>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
                <CalendarView initialEvents={events} />
            </CardContent>
        </Card>
      </main>
    </div>
    </>
  );
}

