

import { Header } from "@/components/dashboard/Header";
import { PlatformCard } from "@/components/platforms/PlatformCard";
import { AdpLogo, BambooHrLogo, GoogleDriveLogo, NamelyLogo, WorkdayLogo } from "@/components/platforms/PlatformLogos";
import { Upload } from "lucide-react";

const approverSources = [
  {
    name: "Manual Upload",
    logo: <Upload className="h-10 w-10 text-muted-foreground" />,
    status: "Inactive" as const,
  },
  {
    name: "Google Drive",
    logo: <GoogleDriveLogo />,
    status: "Inactive" as const,
  },
  {
    name: "BambooHR",
    logo: <BambooHrLogo />,
    status: "Inactive" as const,
  },
  {
    name: "Namely",
    logo: <NamelyLogo />,
    status: "Inactive" as const,
  },
  {
    name: "Workday",
    logo: <WorkdayLogo />,
    status: "Inactive" as const,
  },
  {
    name: "ADP",
    logo: <AdpLogo />,
    status: "Inactive" as const,
  },
];

export default function ApproversPage() {
  return (
    <div className="flex flex-col bg-muted/40 flex-1">
      <Header />
      <main className="flex-1 p-4 sm:px-6 sm:py-0">
        <div className="mb-4">
            <h1 className="text-2xl font-semibold">Approvers</h1>
            <p className="text-muted-foreground">Connect a data source to sync your organization's approvers.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {approverSources.map((platform) => (
            <PlatformCard key={platform.name} {...platform} />
          ))}
        </div>
      </main>
    </div>
  );
}
