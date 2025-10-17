
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "@/components/ui/sidebar"
import {
  Users,
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
  { label: "Platforms", icon: Layers, href: "/platforms" },
  { 
    label: "Policy", 
    icon: Shield,
    subItems: [
        { label: "Rules", href: "/policy/rules" },
        { label: "Approvers", href: "/policy/approvers" },
        { label: "Global Approvers", href: "/policy/global-approvers" },
        { label: "Excluded Users", href: "/policy/excluded-users" },
        { label: "City Tiers", href: "/policy/city-tiers" },
        { label: "Travel Stream", href: "/policy/travel-stream" },
        { label: "Approval Stream", href: "/policy/approval-stream" },
    ]
  },
  { label: "Reports", icon: BarChart2, href: "/reports" },
  { label: "Group Events", icon: CalendarDays },
  { label: "Map", icon: Map, href: "/map" },
  { 
    label: "Billing", 
    icon: CreditCard, 
    href: "/billing",
    subItems: [
        { label: "Payments", href: "/billing/payments" },
        { label: "Subscriptions", href: "/billing" },
    ] 
  },
];

const helpAndSettingsItems = [
    { label: "Help", icon: HelpCircle, href: "/help" },
    { label: "Settings", icon: Settings, href: "/settings" },
]

function MenuItem({ item, isActive }: { item: {label: string, icon: React.ElementType, href?: string, subItems?: any[]}, isActive: boolean }) {
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const pathname = usePathname();
  
  const isSubItemActive = hasSubItems && item.subItems!.some(sub => pathname.startsWith(sub.href!));

  if (hasSubItems) {
    return (
      <Collapsible defaultOpen={true}>
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton isActive={isActive || isSubItemActive} className="justify-between">
              <div className="flex items-center gap-2">
                <item.icon size={18} />
                <span>{item.label}</span>
              </div>
              <ChevronDown
                size={16}
                className={cn("transition-transform", "[data-state=open]:-rotate-180")}
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
        </SidebarMenuItem>
        <CollapsibleContent>
            <SidebarMenuSub>
                {item.subItems!.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.label}>
                        <Link href={subItem.href!}>
                            <SidebarMenuSubButton isActive={pathname === subItem.href}>
                                <Dot size={18} />
                                <span>{subItem.label}</span>
                            </SidebarMenuSubButton>
                        </Link>
                    </SidebarMenuSubItem>
                ))}
            </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    )
  }

  const menuItemContent = (
    <SidebarMenuButton isActive={isActive || isSubItemActive}>
      <div className="flex items-center gap-2">
        <item.icon size={18} />
        <span>{item.label}</span>
      </div>
    </SidebarMenuButton>
  );

  return (
    <SidebarMenuItem>
        {item.href ? <Link href={item.href}>{menuItemContent}</Link> : <div className="cursor-not-allowed">{menuItemContent}</div>}
    </SidebarMenuItem>
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
                <SidebarMenu className="gap-2">
                {menuItems.map((item) => (
                    <MenuItem key={item.label} item={item} isActive={pathname === item.href} />
                ))}
                </SidebarMenu>
            </SidebarGroup>
          </div>
          
          <SidebarGroup>
            <SidebarMenu className="gap-2">
                {helpAndSettingsItems.map((item) => (
                    <MenuItem key={item.label} item={item} isActive={pathname === item.href} />
                ))}
            </SidebarMenu>
          </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
