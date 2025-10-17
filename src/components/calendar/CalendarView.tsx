
"use client";

import * as React from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import type { GroupEvent } from "@/lib/data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

type EventTag = GroupEvent["tag"];

const tagStyles: Record<EventTag, string> = {
  Events: "bg-purple-500 hover:bg-purple-600 text-white",
  Personal: "bg-blue-500 hover:bg-blue-600 text-white",
  Meeting: "bg-green-500 hover:bg-green-600 text-white",
  "Festival Function": "bg-teal-500 hover:bg-teal-600 text-white",
};

interface CalendarViewProps {
  initialEvents: GroupEvent[];
}

const NewEventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  date: z.string().min(1, "Date is required"),
  tag: z.enum(["Events", "Personal", "Meeting", "Festival Function"]),
});

type NewEventFormValues = z.infer<typeof NewEventSchema>;

function AddEventDialog({
  onEventAdd,
  children,
}: {
  onEventAdd: (event: GroupEvent) => void;
  children: React.ReactNode;
}) {
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);
  const form = useForm<NewEventFormValues>({
    resolver: zodResolver(NewEventSchema),
    defaultValues: { title: "", date: "", tag: "Events" },
  });

  const onSubmit = (data: NewEventFormValues) => {
    const newEvent: GroupEvent = {
      id: crypto.randomUUID(),
      ...data,
      date: new Date(data.date).toISOString(),
    };
    onEventAdd(newEvent);
    toast({
      title: "Event Added",
      description: `${data.title} has been added to the calendar.`,
    });
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
              <DialogDescription>
                Fill in the details for your new event.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tag"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tag</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a tag" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.keys(tagStyles).map((tag) => (
                          <SelectItem key={tag} value={tag}>
                            {tag}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Add Event</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export function CalendarView({ initialEvents }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = React.useState(new Date("2025-10-01"));
  const [events, setEvents] = React.useState<GroupEvent[]>(initialEvents);
  const [filters, setFilters] = React.useState<Record<EventTag, boolean>>({
    Events: true,
    Personal: true,
    Meeting: true,
    "Festival Function": true,
  });

  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const firstDay = startOfWeek(firstDayOfMonth);
  const lastDay = endOfWeek(lastDayOfMonth);
  const days = eachDayOfInterval({ start: firstDay, end: lastDay });

  const handleEventAdd = (event: GroupEvent) => {
    setEvents((prev) => [...prev, event]);
  };

  const toggleFilter = (tag: EventTag) => {
    setFilters((prev) => ({ ...prev, [tag]: !prev[tag] }));
  };

  const filteredEvents = React.useMemo(
    () => events.filter((event) => filters[event.tag]),
    [events, filters]
  );

  return (
    <div className="flex flex-col h-full p-4 sm:p-6 lg:p-8">
      <header className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          {(Object.keys(tagStyles) as EventTag[]).map((tag) => (
            <Button
              key={tag}
              variant={filters[tag] ? "default" : "outline"}
              className={cn(
                "capitalize",
                filters[tag] && tagStyles[tag],
                filters[tag] &&
                  "text-white",
                !filters[tag] &&
                  "bg-transparent border-gray-300 text-gray-700"
              )}
              onClick={() => toggleFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={() => setCurrentDate(new Date())}>
            Today
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-xl font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </div>
        <div className="flex items-center gap-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Calendar</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Default</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <AddEventDialog onEventAdd={handleEventAdd}>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </AddEventDialog>
          <div className="flex items-center gap-1 rounded-md bg-muted p-1">
            <Button variant="ghost" size="sm" className="bg-background">
              Month
            </Button>
            <Button variant="ghost" size="sm">
              Week
            </Button>
            <Button variant="ghost" size="sm">
              Day
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 calendar-grid border-t border-l">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="border-r border-b p-2 text-center font-medium text-muted-foreground"
          >
            {day}
          </div>
        ))}

        {days.map((day) => {
          const dayEvents = filteredEvents.filter((event) =>
            isSameDay(new Date(event.date), day)
          );
          return (
            <div
              key={day.toString()}
              className={cn(
                "relative border-r border-b p-2",
                !isSameMonth(day, currentDate) && "bg-muted/50"
              )}
            >
              <time
                dateTime={format(day, "yyyy-MM-dd")}
                className={cn(
                  "absolute top-2 right-2 text-sm",
                  isSameDay(day, new Date()) &&
                    "flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground"
                )}
              >
                {format(day, "d")}
              </time>
              <div className="space-y-1 mt-8">
                {dayEvents.map((event) => (
                  <button
                    key={event.id}
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-full justify-start text-left truncate h-auto py-1 px-2 text-xs",
                      tagStyles[event.tag]
                    )}
                  >
                    {event.title}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
