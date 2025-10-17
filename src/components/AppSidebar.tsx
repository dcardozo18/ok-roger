"use client"

import * as React from "react"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
} from "@/components/ui/sidebar"
import {
  Users,
  BookUser,
  Layers,
  Shield,
  BarChart2,
  CalendarDays,
  Map,
  CreditCard,
  HelpCircle,
  Settings,
  ChevronDown,
  Dot,
  Home
} from "lucide-react"
import Image from "next/image"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

const menuItems = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "Users", icon: Users, href: "/users" },
  { label: "Directory", icon: BookUser },
  { label: "Platforms", icon: Layers, href: "/platforms" },
  { label: "Policy", icon: Shield },
  { label: "Reports", icon: BarChart2 },
  { label: "Group Events", icon: CalendarDays },
  { label: "Map", icon: Map, href: "/map" },
  { label: "Billing", icon: CreditCard },
];

const helpAndSettingsItems = [
    { label: "Help", icon: HelpCircle },
    { label: "Settings", icon: Settings },
]

function MenuItem({ item, isActive }: { item: {label: string, icon: React.ElementType, href?: string, subItems?: any[]}, isActive: boolean }) {
  const hasSubItems = item.subItems && item.subItems.length > 0;
  
  const menuItemContent = (
    <SidebarMenuButton isActive={isActive} className="justify-between">
      <div className="flex items-center gap-2">
        <item.icon size={18} />
        <span>{item.label}</span>
      </div>
      {hasSubItems && (
        <ChevronDown
          size={16}
          className={cn("transition-transform")}
        />
      )}
    </SidebarMenuButton>
  );

  return (
    <Collapsible>
      <SidebarMenuItem>
         {item.href ? <Link href={item.href}>{menuItemContent}</Link> : <CollapsibleTrigger className="w-full">{menuItemContent}</CollapsibleTrigger>}
         {hasSubItems && (
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.subItems.map((subItem, index) => (
                  <SidebarMenuSubItem key={index}>
                    <Link href={subItem.href} className="flex items-center gap-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground">
                      <Dot size={18} />
                      <span>{subItem.label}</span>
                    </Link>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
         )}
      </SidebarMenuItem>
    </Collapsible>
  )
}

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="floating">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white font-bold text-lg">
                O
            </div>
            <span className="text-xl font-bold text-white">OK Roger</span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="p-2 flex flex-col justify-between">
          <div>
            <div className="p-2">
                <Collapsible>
                    <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="https://picsum.photos/seed/lucas/40/40"
                                    width={40}
                                    height={40}
                                    alt="Lucas Ethan"
                                    className="rounded-md"
                                    data-ai-hint="person portrait"
                                />
                                <div>
                                    <p className="font-semibold text-white">Lucas Ethan</p>
                                    <p className="text-xs text-white/80">ID: 150001</p>
                                </div>
                            </div>
                            <ChevronDown size={16} className="text-white/80" />
                        </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <div className="flex flex-col gap-1 pl-4 pt-2">
                            <a href="#" className="text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground">Profile</a>
                            <a href="#" className="text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground">Settings</a>
                            <a href="#" className="text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground">Logout</a>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>
            
            <SidebarGroup>
                <SidebarMenu>
                {menuItems.map((item) => (
                    <MenuItem key={item.label} item={item} isActive={pathname === item.href} />
                ))}
                </SidebarMenu>
            </SidebarGroup>
          </div>
          
          <SidebarGroup>
            <SidebarMenu>
                {helpAndSettingsItems.map((item) => (
                    <MenuItem key={item.label} item={item} isActive={pathname === item.href} />
                ))}
            </SidebarMenu>
          </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
