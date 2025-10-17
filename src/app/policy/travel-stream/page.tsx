
import { Header } from "@/components/dashboard/Header";
import { PlatformCard } from "@/components/platforms/PlatformCard";
import { GoogleSheetsLogo, MsTeamsLogo, OfficeExcelLogo, SlackLogo } from "@/components/platforms/PlatformLogos";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function TravelStreamPage() {
  return (
    <div className="flex flex-col bg-muted/40 flex-1">
      <Header />
      <main className="flex-1 p-4 sm:px-6 sm:py-0">
        <div className="grid gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Travel Stream</CardTitle>
                    <CardDescription>
                        Travel Stream allows you to receive real time notifications when employees book travel. This visibility also encourages responsible employee behavior and helps reduce travel spend. Visibility is the first step towards creating Accountability.
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
  );
}
