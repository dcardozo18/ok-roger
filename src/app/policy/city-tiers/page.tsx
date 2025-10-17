
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { CityTiersTable } from "@/components/policy/city-tiers/CityTiersTable";
import { SidebarInset } from "@/components/ui/sidebar";
import { cityTiers, allCities } from "@/lib/data";

export default function CityTiersPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            <CityTiersTable initialCityTiers={cityTiers} allCities={allCities} />
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
