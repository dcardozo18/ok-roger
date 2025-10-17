
"use client";

import { Header } from "@/components/dashboard/Header";
import { PlatformCard } from "@/components/platforms/PlatformCard";
import { GoogleSheetsLogo, MsTeamsLogo, SlackLogo } from "@/components/platforms/PlatformLogos";

const platforms = [
  {
    name: "Slack",
    logo: <SlackLogo />,
    status: "Active" as const,
    connectedBy: "John Doe",
  },
  {
    name: "MS Teams",
    logo: <MsTeamsLogo />,
    status: "Inactive" as const,
  },
  {
    name: "Google Sheets",
    logo: <GoogleSheetsLogo />,
    status: "Inactive" as const,
  },
];

export default function PlatformsPage() {
  return (
    <div className="flex flex-col bg-muted/40 flex-1">
      <Header />
      <main className="flex-1 p-4 sm:px-6 sm:py-0">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <PlatformCard key={platform.name} {...platform} />
          ))}
        </div>
      </main>
    </div>
  );
}
