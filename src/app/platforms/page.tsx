
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { PlatformCard } from "@/components/platforms/PlatformCard";
import { GoogleLogo, MsTeamsLogo, SlackLogo } from "@/components/platforms/PlatformLogos";
import { SidebarInset } from "@/components/ui/sidebar";

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
    name: "Google",
    logo: <GoogleLogo />,
    status: "Inactive" as const,
  },
];

export default function PlatformsPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {platforms.map((platform) => (
                <PlatformCard key={platform.name} {...platform} />
              ))}
            </div>
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
