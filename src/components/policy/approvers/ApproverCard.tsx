
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Hourglass } from "lucide-react";

interface ApproverCardProps {
  name: string;
  avatarUrl: string;
  avatarFallback: string;
  role: string;
  pendingApprovals: number;
  avgApprovalTime: string;
}

export function ApproverCard({
  name,
  avatarUrl,
  avatarFallback,
  role,
  pendingApprovals,
  avgApprovalTime,
}: ApproverCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarUrl} alt={name} data-ai-hint="person portrait" />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
            <Hourglass className="h-5 w-5 text-muted-foreground" />
            <div>
                <p className="font-semibold">{pendingApprovals}</p>
                <p className="text-xs text-muted-foreground">Pending</p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div>
                <p className="font-semibold">{avgApprovalTime}</p>
                <p className="text-xs text-muted-foreground">Avg Time</p>
            </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
