import type { Activity } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ActivityStreamProps {
  activities: Activity[];
}

export function ActivityStream({ activities }: ActivityStreamProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Stream</CardTitle>
        <CardDescription>What's been happening in your projects.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={activity.id} className="relative flex items-start gap-4">
              {index < activities.length - 1 && (
                <div className="absolute left-[11px] top-6 h-full w-0.5 bg-border" />
              )}
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent z-10">
                <activity.icon className="h-4 w-4 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                  <span className="font-medium text-primary">{activity.target}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
