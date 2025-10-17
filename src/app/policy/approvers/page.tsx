
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { PlatformCard } from "@/components/platforms/PlatformCard";
import { SidebarInset } from "@/components/ui/sidebar";
import { Upload } from "lucide-react";

const approverSources = [
  {
    name: "Manual Upload",
    logo: <Upload className="h-10 w-10 text-muted-foreground" />,
    status: "Inactive" as const,
  },
  {
    name: "Google Drive",
    logo: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 24 24"
            >
            <path fill="#00832D" d="M13.2 11.55L7.95 21.9L2.7 12.25L7.95 2.6L13.2 11.55Z"/>
            <path fill="#00A94B" d="M13.2 11.55L18.45 2.6L7.95 2.6L13.2 11.55Z"/>
            <path fill="#FFD000" d="M23.7 12.25L18.45 2.6L13.2 11.55L18.45 21.9L23.7 12.25Z"/>
        </svg>
    ),
    status: "Inactive" as const,
  },
  {
    name: "BambooHR",
    logo: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 24 24"
        >
            <path fill="#008D4F" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
            <path fill="#008D4F" d="M15.5 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
            <path fill="#008D4F" d="M12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
        </svg>
    ),
    status: "Inactive" as const,
  },
  {
    name: "Namely",
    logo: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 24 24"
        >
            <path fill="#00A99D" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
            <path fill="#FFFFFF" d="M12 12.28c-1.48 0-2.68-1.2-2.68-2.68s1.2-2.68 2.68-2.68s2.68 1.2 2.68 2.68s-1.2 2.68-2.68 2.68zm0 1.35c1.78 0 3.23.89 4.07 2.22H7.93c.84-1.33 2.29-2.22 4.07-2.22z"/>
        </svg>
    ),
    status: "Inactive" as const,
  },
  {
    name: "Workday",
    logo: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 24 24"
            >
            <path fill="#FFC72C" d="M4 12l8-6.928L20 12l-8 6.928L4 12z"/>
            <path fill="#005B9D" d="M12 2L4 7.072v9.856L12 22l8-5.072V7.072L12 2zm0 2.45L17.2 8.5v7l-5.2 3.15L6.8 15.5v-7L12 4.45z"/>
        </svg>
    ),
    status: "Inactive" as const,
  },
  {
    name: "ADP",
    logo: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 24 24"
        >
            <path fill="#ED1C24" d="M6.35 18.37h2.46v-5.48H6.35v5.48zm5.82 0h2.45v-5.48h-2.45v5.48zm5.82 0h2.46v-5.48h-2.46v5.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
        </svg>
    ),
    status: "Inactive" as const,
  },
];

export default function ApproversPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40">
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
      </SidebarInset>
    </div>
  );
}
