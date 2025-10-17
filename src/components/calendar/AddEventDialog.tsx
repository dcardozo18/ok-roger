
"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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

type EventTag = GroupEvent["tag"];

const tagStyles: Record<EventTag, string> = {
  Events: "bg-purple-500 hover:bg-purple-600 text-white",
  Personal: "bg-blue-500 hover:bg-blue-600 text-white",
  Meeting: "bg-green-500 hover:bg-green-600 text-white",
  "Festival Function": "bg-teal-500 hover:bg-teal-600 text-white",
};

const NewEventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  date: z.string().min(1, "Date is required"),
  tag: z.enum(["Events", "Personal", "Meeting", "Festival Function"]),
});

type NewEventFormValues = z.infer<typeof NewEventSchema>;

interface AddEventDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onEventAdd: (event: GroupEvent) => void;
}

export function AddEventDialog({ open, onOpenChange, onEventAdd }: AddEventDialogProps) {
  const { toast } = useToast();
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
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
                onClick={() => onOpenChange(false)}
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
