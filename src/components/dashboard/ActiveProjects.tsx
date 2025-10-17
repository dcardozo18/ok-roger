import type { Project } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ActiveProjectsProps {
  projects: Project[];
}

export function ActiveProjects({ projects }: ActiveProjectsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Projects</CardTitle>
        <CardDescription>Your team's current project progress.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium">{project.name}</p>
              <p className="text-sm text-muted-foreground">{project.progress}%</p>
            </div>
            <Progress value={project.progress} aria-label={`${project.name} at ${project.progress}%`} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
