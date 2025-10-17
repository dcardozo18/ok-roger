
"use client";

import * as React from "react";
import { Pie, PieChart, Sector } from "recharts";
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
  calls: {
    label: "Calls",
    color: "hsl(var(--chart-1))",
  },
  emails: {
    label: "Emails",
    color: "hsl(var(--chart-2))",
  },
  meetings: {
    label: "Meetings",
    color: "hsl(var(--chart-3))",
  },
  deals: {
    label: "Deals Closed",
    color: "hsl(var(--chart-4))",
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
