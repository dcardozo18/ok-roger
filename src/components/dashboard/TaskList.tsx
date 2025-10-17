import type { Task, TaskStatus } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TaskListProps {
  tasks: Task[];
}

const statusVariant: Record<TaskStatus, "default" | "secondary" | "destructive"> = {
  "Completed": "default",
  "In Progress": "secondary",
  "Canceled": "destructive",
};

const statusStyles: Record<TaskStatus, string> = {
  "Completed": "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
  "In Progress": "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
  "Canceled": "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
};


export function TaskList({ tasks }: TaskListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
        <CardDescription>A list of your current tasks.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-3">
              <Checkbox id={`task-${task.id}`} checked={task.status === "Completed"} />
              <label htmlFor={`task-${task.id}`} className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {task.title}
              </label>
              <Badge variant={statusVariant[task.status]} className={cn("border-transparent", statusStyles[task.status])}>
                {task.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
