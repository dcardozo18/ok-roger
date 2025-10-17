import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarInset } from "@/components/ui/sidebar";
import { DollarSign, CreditCard } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40 flex-1">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your saved payment methods.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg border">
                        <div className="flex items-center gap-4">
                            <CreditCard className="h-6 w-6 text-muted-foreground" />
                            <div>
                                <p className="font-medium">Visa ending in 1234</p>
                                <p className="text-sm text-muted-foreground">Expires 08/2026</p>
                            </div>
                        </div>
                        <Button variant="outline" size="sm">Edit</Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg border">
                        <div className="flex items-center gap-4">
                            <DollarSign className="h-6 w-6 text-muted-foreground" />
                            <div>
                                <p className="font-medium">PayPal</p>
                                <p className="text-sm text-muted-foreground">billing@example.com</p>
                            </div>
                        </div>
                        <Button variant="outline" size="sm">Edit</Button>
                    </div>
                     <Button>Add Payment Method</Button>
                </CardContent>
              </Card>

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
                    <Button>Upgrade Plan</Button>
                    <Separator />
                    <h4 className="text-md font-medium">Billing History</h4>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <p className="text-sm">June 1, 2024</p>
                            <p className="text-sm">$99.00</p>
                            <Button variant="link" size="sm">Invoice</Button>
                        </div>
                         <div className="flex justify-between items-center">
                            <p className="text-sm">May 1, 2024</p>
                            <p className="text-sm">$99.00</p>
                            <Button variant="link" size="sm">Invoice</Button>
                        </div>
                         <div className="flex justify-between items-center">
                            <p className="text-sm">April 1, 2024</p>
                            <p className="text-sm">$99.00</p>
                            <Button variant="link" size="sm">Invoice</Button>
                        </div>
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
