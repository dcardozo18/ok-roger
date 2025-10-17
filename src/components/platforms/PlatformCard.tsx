
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PlatformCardProps {
  name: string;
  logo: React.ReactNode;
  status: "Active" | "Inactive";
  connectedBy?: string;
}

export function PlatformCard({ name, logo, status, connectedBy }: PlatformCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">{name}</CardTitle>
        {logo}
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mt-4">
            <div>
                <Badge
                    className={
                    status === "Active"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 border-transparent"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300 border-transparent"
                    }
                >
                    {status}
                </Badge>
                {status === "Active" && connectedBy && (
                    <p className="text-xs text-muted-foreground mt-2">
                        Connected by {connectedBy}
                    </p>
                )}
            </div>
            <Button variant="outline" size="sm">
              {status === "Active" ? "Manage" : "Connect"}
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
