
import { Header } from "@/components/dashboard/Header";
import { CityTiersTable } from "@/components/policy/city-tiers/CityTiersTable";
import { cityTiers, allCities } from "@/lib/data";

export default function CityTiersPage() {
  return (
    <div className="flex flex-col bg-muted/40 flex-1">
      <Header />
      <main className="flex-1 p-4 sm:px-6 sm:py-0">
        <CityTiersTable initialCityTiers={cityTiers} allCities={allCities} />
      </main>
    </div>
  );
}
