
"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <SidebarProvider>{children}</SidebarProvider>;
}
