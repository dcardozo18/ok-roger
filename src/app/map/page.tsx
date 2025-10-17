import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { MapComponent } from "@/components/map/MapComponent";
import { SidebarInset } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MapPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40 flex-1">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            <Card>
              <CardHeader>
                <CardTitle>Global Asset Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[calc(100vh-10rem)] w-full">
                  <MapComponent />
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
