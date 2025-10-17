
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
import { PlusCircle, Trash2 } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
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
import type { City, CityTier } from "@/lib/data";
import { NewCityTierForm } from "./NewCityTierForm";


export const columns: ColumnDef<CityTier>[] = [
  {
    accessorKey: "imageUrl",
    header: "Photo",
    cell: ({ row }) => {
        const city = row.original;
        return (
            <Image
                src={city.imageUrl}
                alt={city.name}
                width={80}
                height={60}
                className="rounded-md object-cover"
                data-ai-hint="city landscape"
            />
        )
    }
  },
  {
    accessorKey: "name",
    header: "City",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="text-right">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete City</span>
            </Button>
        </div>
      );
    },
  },
];

interface CityTiersTableProps {
    initialCityTiers: CityTier[];
    allCities: City[];
}

export function CityTiersTable({ initialCityTiers, allCities }: CityTiersTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [isNewCityTierDialogOpen, setIsNewCityTierDialogOpen] = React.useState(false);
  const [cityTiers, setCityTiers] = React.useState(initialCityTiers);

  const table = useReactTable({
    data: cityTiers,
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

  const handleAddCity = (newCity: City) => {
    const newCityTier: CityTier = {
        ...newCity,
        imageUrl: `https://picsum.photos/seed/${newCity.id}/80/60`,
        imageHint: 'city landscape'
    };
    setCityTiers(prev => [...prev, newCityTier]);
  };

  return (
    <>
      <NewCityTierForm 
        open={isNewCityTierDialogOpen} 
        onOpenChange={setIsNewCityTierDialogOpen}
        allCities={allCities}
        onAddCity={handleAddCity}
      />
      <Card>
        <CardHeader>
          <div className="flex items-center justify-end">
              <Button onClick={() => setIsNewCityTierDialogOpen(true)}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New City Tier
              </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter by city..."
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
                      No city tiers found.
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
