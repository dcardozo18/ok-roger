import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarInset } from "@/components/ui/sidebar";
import Link from "next/link";

export default function BillingPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40 flex-1">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Subscriptions</CardTitle>
                  <CardDescription>Manage your subscription plan and billing history.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="p-4 bg-background rounded-lg border">
                        <p className="font-medium">Pro Plan</p>
                        <p className="text-sm text-muted-foreground">$99/month</p>
                        <p className="text-xs text-muted-foreground mt-2">Next bill on July 1, 2024</p>
                    </div>
                    <div className="flex gap-2">
                        <Button>Upgrade Plan</Button>
                        <Link href="/billing/payments">
                            <Button variant="outline">View Billing History</Button>
                        </Link>
                    </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
