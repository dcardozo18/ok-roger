import Image from "next/image";
import type { Member } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMembersProps {
  members: Member[];
}

export function TeamMembers({ members }: TeamMembersProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>The people driving your projects forward.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {members.map((member) => (
          <div key={member.id} className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src={member.avatarUrl} alt={member.name} data-ai-hint="person portrait" />
              <AvatarFallback>{member.avatarFallback}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
