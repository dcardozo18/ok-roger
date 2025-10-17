
import { Header } from "@/components/dashboard/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function MapPage() {
  return (
    <div className="flex flex-col bg-muted/40 flex-1">
      <Header />
      <main className="flex-1 p-4 sm:px-6 sm:py-0">
        <Card>
          <CardHeader>
            <CardTitle>Map</CardTitle>
            <CardDescription>
              This is a placeholder for the map page content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-96 bg-muted rounded-md">
                <p className="text-muted-foreground">Map content goes here</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
