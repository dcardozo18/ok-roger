import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { PlatformCard } from "@/components/platforms/PlatformCard";
import { SidebarInset } from "@/components/ui/sidebar";

const platforms = [
  {
    name: "Slack",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        viewBox="0 0 128 128"
      >
        <path fill="#36C5F0" d="M38.56,64.67a9.3,9.3,0,0,1,0-18.6H47.8v9.3a9.3,9.3,0,0,1,0,18.6Z" />
        <path fill="#2EB67D" d="M63.33,38.56a9.3,9.3,0,0,1,18.6,0v9.34H72.67a9.3,9.3,0,0,1-18.6,0Z" />
        <path fill="#ECB22E" d="M89.44,63.33a9.3,9.3,0,0,1,0,18.6H80.2v-9.3a9.3,9.3,0,0,1,0-18.6Z" />
        <path fill="#E01E5A" d="M64.67,89.44a9.3,9.3,0,0,1-18.6,0V80.1h9.34a9.3,9.3,0,0,1,18.6,0Z" />
        <path fill="#36C5F0" d="M47.8,63.33a9.3,9.3,0,0,1-18.6,0V47.8h9.3a9.3,9.3,0,0,1,18.6,0Z" />
        <path fill="#2EB67D" d="M89.44,47.8a9.3,9.3,0,0,1-18.6,0H61.5v9.3a9.3,9.3,0,0,1,18.6,0Z" />
        <path fill="#ECB22E" d="M80.2,89.44a9.3,9.3,0,0,1,18.6,0V72.67h-9.3a9.3,9.3,0,0,1-18.6,0Z" />
        <path fill="#E01E5A" d="M38.56,80.2a9.3,9.3,0,0,1,18.6,0h9.34v-9.3a9.3,9.3,0,0,1-18.6,0Z" />
      </svg>
    ),
    status: "Active",
    connectedBy: "John Doe",
  },
  {
    name: "MS Teams",
    logo: (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        viewBox="0 0 128 128"
      >
        <path fill="#464EB8" d="M85,83.1l-14.8-2.3c-2.4-0.4-4.2-2.5-4.2-5V36h19c4.4,0,8,3.6,8,8v31.1C93,80,89.4,83.1,85,83.1z" />
        <path fill="#505AC9" d="M59.9,36h-16c-4.4,0-8,3.6-8,8v31.1c0,4.9,4.4,8.5,8.8,8l15.2-4.9C59,77.5,59.9,36,59.9,36z" />
        <path fill="#fff" d="M48.8,61.9c-2.8,0-5.1-2.3-5.1-5.1s2.3-5.1,5.1-5.1s5.1,2.3,5.1,5.1C53.9,59.6,51.6,61.9,48.8,61.9z" />
        <circle fill="#fff" cx="77" cy="56.8" r="5.1" />
      </svg>
    ),
    status: "Inactive",
  },
  {
    name: "Google",
    logo: (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10"
            viewBox="0 0 48 48"
        >
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.021,35.596,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
        </svg>
    ),
    status: "Inactive",
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
