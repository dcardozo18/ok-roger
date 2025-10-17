
"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MoreHorizontal, PlusCircle, Trash2, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Approver, User } from "@/lib/data";
import { NewUserForm } from "@/components/users/NewUserForm";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { users } from "@/lib/data";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";


export const columns: ColumnDef<Approver>[] = [
  {
    accessorKey: "name",
    header: "Name",
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
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="text-right">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete Approver</span>
            </Button>
        </div>
      );
    },
  },
];

interface GlobalApproversTableProps {
    approvers: Approver[];
}


const NewApproverFormSchema = z.object({
    users: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one user.",
      }),
  });
  
type NewApproverFormValues = z.infer<typeof NewApproverFormSchema>;
  
interface NewApproverFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    users: User[];
  }

function NewApproverForm({ open, onOpenChange, users }: NewApproverFormProps) {
    const { toast } = useToast();
    
    const form = useForm<NewApproverFormValues>({
      resolver: zodResolver(NewApproverFormSchema),
      defaultValues: {
        users: [],
      },
    });

    const userColumns: ColumnDef<User>[] = [
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
                    form.setValue("users", userIds);
                }}
                aria-label="Select all"
              />
            ),
            cell: ({ row }) => (
              <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => {
                    row.toggleSelected(!!value);
                    const currentSelection = form.getValues("users");
                    const newSelection = value 
                        ? [...currentSelection, row.original.id] 
                        : currentSelection.filter(id => id !== row.original.id);
                    form.setValue("users", newSelection);
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
      columns: userColumns,
      getCoreRowModel: getCoreRowModel(),
      onRowSelectionChange: (updater) => {
          const newSelectedRowIds = typeof updater === 'function' ? updater(form.getValues('users').reduce((acc, id) => ({...acc, [id]: true}), {})) : updater;
          const newUserIds = Object.keys(newSelectedRowIds).filter(id => newSelectedRowIds[id]);
          form.setValue('users', newUserIds);
      },
      state: {
        rowSelection: form.watch('users').reduce((acc, id) => {
            const userIndex = users.findIndex(u => u.id === id);
            if (userIndex > -1) {
              acc[userIndex] = true;
            }
            return acc;
        }, {} as {[key: number]: boolean}),
      },
    });
  
    function onSubmit(data: NewApproverFormValues) {
      console.log(data);
      onOpenChange(false);
      toast({
        title: "Approvers added",
        description: `${data.users.length} users have been added as global approvers.`,
      });
      form.reset();
    }
  
    React.useEffect(() => {
      if (open) {
        form.reset();
      }
    }, [open, form]);
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle>Add Global Approvers</DialogTitle>
                <DialogDescription>
                    Select users from the list to add as global approvers.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <FormField
                  control={form.control}
                  name="users"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Members</FormLabel>
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
                                      colSpan={userColumns.length}
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

export function GlobalApproversTable({ approvers }: GlobalApproversTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [isNewApproverDialogOpen, setIsNewApproverDialogOpen] = React.useState(false);


  const table = useReactTable({
    data: approvers,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <NewApproverForm 
        open={isNewApproverDialogOpen} 
        onOpenChange={setIsNewApproverDialogOpen}
        users={users}
      />
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
              <div>
                <CardTitle>Global Approvers</CardTitle>
                <CardDescription>Manage your organization's global approvers.</CardDescription>
              </div>
              <Button onClick={() => setIsNewApproverDialogOpen(true)}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Approver
              </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter by name..."
              value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} className={header.id === 'actions' ? 'text-right' : ''}>
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
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
