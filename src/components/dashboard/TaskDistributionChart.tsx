
"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import type { TaskDistribution } from "@/lib/data";

interface TaskDistributionChartProps {
  data: TaskDistribution[];
}

const chartConfig = {
  tasks: {
    label: "Tasks",
  },
  Hotels: {
    label: "Hotels",
    color: "hsl(var(--chart-1))",
  },
  Flights: {
    label: "Flights",
    color: "hsl(var(--chart-2))",
  },
  "Car rental": {
    label: "Car rental",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function TaskDistributionChart({ data }: TaskDistributionChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Activity</CardTitle>
        <CardDescription>Distribution of sales activities.</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="tasks"
              nameKey="department"
              innerRadius={60}
              strokeWidth={5}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="department" />}
              className="-mt-4 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
