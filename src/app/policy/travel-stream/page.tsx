import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset } from "@/components/ui/sidebar";
import { Rocket } from "lucide-react";

export default function TravelStreamPage() {
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
                        <CardTitle>Travel Stream</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
                            <Rocket className="h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Real-time Travel Notifications</h3>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                Travel Stream allows you to receive real time notifications when employees book travel. This visibility also encourages responsible employee behavior and helps reduce travel spend. Visibility is the first step towards creating Accountability.
                            </p>
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
