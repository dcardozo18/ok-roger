
"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { type User } from "@/lib/data";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const newRuleFormSchema = z.object({
  name: z.string().min(1, "Rule name is required"),
  service: z.string().min(1, "Service is required"),
  triggers: z.string().min(1, "Triggers are required"),
  appliesTo: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one user.",
  }),
});

type NewRuleFormValues = z.infer<typeof newRuleFormSchema>;

interface NewRuleFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  users: User[];
}

export function NewRuleForm({ open, onOpenChange, users }: NewRuleFormProps) {
  const { toast } = useToast();
  
  const form = useForm<NewRuleFormValues>({
    resolver: zodResolver(newRuleFormSchema),
    defaultValues: {
      name: "",
      service: "",
      triggers: "",
      appliesTo: [],
    },
  });

  function onSubmit(data: NewRuleFormValues) {
    const selectedUsers = data.appliesTo.map(userId => users.find(u => u.id === userId)?.name).filter(Boolean);
    console.log({
        ...data,
        triggers: data.triggers.split(',').map(t => t.trim()),
        appliesTo: selectedUsers.join(', ') || 'All Users'
    });
    onOpenChange(false);
    toast({
      title: "Rule created",
      description: `A new rule, "${data.name}", has been created.`,
    });
    form.reset();
  }

  const columns: ColumnDef<User>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => {
                table.toggleAllPageRowsSelected(!!value);
                const userIds = value ? users.map(u => u.id) : [];
                form.setValue("appliesTo", userIds);
            }}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => {
                row.toggleSelected(!!value);
                const currentSelection = form.getValues("appliesTo");
                const newSelection = value 
                    ? [...currentSelection, row.original.id] 
                    : currentSelection.filter(id => id !== row.original.id);
                form.setValue("appliesTo", newSelection);
            }}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
    {
      accessorKey: "name",
      header: "User",
      cell: ({ row }) => {
          const user = row.original;
          return (
              <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person portrait" />
                      <AvatarFallback>{user.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div className="font-medium">{user.name}</div>
              </div>
          )
      }
    },
    {
        accessorKey: "email",
        header: "Email",
    },
  ];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: (updater) => {
        const newSelectedRowIds = typeof updater === 'function' ? updater(form.getValues('appliesTo').reduce((acc, id) => ({...acc, [id]: true}), {})) : updater;
        const newUserIds = Object.keys(newSelectedRowIds).filter(id => newSelectedRowIds[id]);
        form.setValue('appliesTo', newUserIds);
    },
    state: {
      rowSelection: form.watch('appliesTo').reduce((acc, id) => {
          const userIndex = users.findIndex(u => u.id === id);
          if (userIndex > -1) {
            acc[userIndex] = true;
          }
          return acc;
      }, {} as {[key: number]: boolean}),
    },
  });

  React.useEffect(() => {
    if (open) {
      form.reset();
    }
  }, [open, form]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Add New Rule</DialogTitle>
              <DialogDescription>
                Fill out the form below to create a new policy rule.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assign Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Business Class Flights" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select a service</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Flights">Flights</SelectItem>
                        <SelectItem value="Hotels">Hotels</SelectItem>
                        <SelectItem value="Cars">Cars</SelectItem>
                        <SelectItem value="All">All</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="triggers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Define triggers</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter comma-separated triggers (e.g., Price > $1000, International)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="appliesTo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apply Rule to Team Members</FormLabel>
                    <ScrollArea className="h-64 rounded-md border">
                        <Table>
                            <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                            )}
                                    </TableHead>
                                    );
                                })}
                                </TableRow>
                            ))}
                            </TableHeader>
                            <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                        )}
                                    </TableCell>
                                    ))}
                                </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No users found.
                                </TableCell>
                                </TableRow>
                            )}
                            </TableBody>
                        </Table>
                    </ScrollArea>
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
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
