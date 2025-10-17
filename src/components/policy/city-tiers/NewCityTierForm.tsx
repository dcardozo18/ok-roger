
"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import type { City } from "@/lib/data";

const NewCityTierSchema = z.object({
  cityId: z.string().min(1, "Please select a city."),
});

type NewCityTierFormValues = z.infer<typeof NewCityTierSchema>;

interface NewCityTierFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  allCities: City[];
  onAddCity: (city: City) => void;
}

export function NewCityTierForm({
  open,
  onOpenChange,
  allCities,
  onAddCity,
}: NewCityTierFormProps) {
  const { toast } = useToast();
  const form = useForm<NewCityTierFormValues>({
    resolver: zodResolver(NewCityTierSchema),
    defaultValues: {
      cityId: "",
    },
  });

  function onSubmit(data: NewCityTierFormValues) {
    const city = allCities.find((c) => c.id === data.cityId);
    if (city) {
      onAddCity(city);
      toast({
        title: "City Tier Added",
        description: `${city.name}, ${city.country} has been added to the tier list.`,
      });
      onOpenChange(false);
      form.reset();
    } else {
        toast({
            variant: "destructive",
            title: "Error",
            description: "Selected city not found.",
        })
    }
  }

  React.useEffect(() => {
    if (open) {
      form.reset();
    }
  }, [open, form]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Add New City Tier</DialogTitle>
              <DialogDescription>
                Search and select a city to add to the tier list.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="cityId"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>City</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? allCities.find((city) => city.id === field.value)?.name
                              : "Select city"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                        <Command>
                          <CommandInput placeholder="Search city..." />
                          <CommandList>
                            <CommandEmpty>No city found.</CommandEmpty>
                            <CommandGroup>
                              {allCities.map((city) => (
                                <CommandItem
                                  value={city.name}
                                  key={city.id}
                                  onSelect={() => {
                                    form.setValue("cityId", city.id);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      city.id === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {city.name}, {city.country}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
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
              <Button type="submit">Add City</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
