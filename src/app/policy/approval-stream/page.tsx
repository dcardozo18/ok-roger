
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { PlatformCard } from "@/components/platforms/PlatformCard";
import { GoogleSheetsLogo, MsTeamsLogo, OfficeExcelLogo, SlackLogo } from "@/components/platforms/PlatformLogos";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset } from "@/components/ui/sidebar";
import { Rocket } from "lucide-react";

const platforms = [
    {
      name: "Slack",
      logo: <SlackLogo />,
      status: "Inactive" as const,
    },
    {
      name: "Google Sheets",
      logo: <GoogleSheetsLogo />,
      status: "Inactive" as const,
    },
    {
      name: "Microsoft Teams",
      logo: <MsTeamsLogo />,
      status: "Inactive" as const,
    },
    {
        name: "Office 365 Excel",
        logo: <OfficeExcelLogo />,
        status: "Inactive" as const,
    }
  ];

export default function ApprovalStreamPage() {
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
                        <CardTitle>Approval Stream</CardTitle>
                        <CardDescription>
                            Approval Stream allows your department head or executives to receive notifications when travel gets approved. Use this when you'd like line managers to approve travel, but you'd like someone central to have visibility and company wide oversight.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {platforms.map((platform) => (
                                <PlatformCard key={platform.name} {...platform} />
                            ))}
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
