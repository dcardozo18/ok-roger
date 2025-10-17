

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
  Home,
  LogOut,
  PlusCircle,
  User,
  Building,
  ChevronsUpDown
} from "lucide-react"
import Image from "next/image"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { Separator } from "./ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

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
  const [isOpen, setIsOpen] = React.useState(isSubItemActive);

  return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} asChild>
        <SidebarMenuItem>
            {hasSubItems ? (
                 <>
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
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            {item.subItems!.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.label}>
                                    <Link href={subItem.href!}>
                                        <SidebarMenuSubButton isActive={pathname === subItem.href}>
                                            <span>{subItem.label}</span>
                                        </SidebarMenuSubButton>
                                    </Link>
                                </SidebarMenuSubItem>
                            ))}
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </>
            ) : (
                item.href ? 
                <Link href={item.href}>
                    <SidebarMenuButton isActive={isActive}>
                        <div className="flex items-center gap-2">
                            <item.icon size={18} />
                            <span>{item.label}</span>
                        </div>
                    </SidebarMenuButton>
                </Link> 
                : 
                <div className="cursor-not-allowed">
                     <SidebarMenuButton isActive={isActive}>
                        <div className="flex items-center gap-2">
                            <item.icon size={18} />
                            <span>{item.label}</span>
                        </div>
                    </SidebarMenuButton>
                </div>
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
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-full justify-start h-auto px-2 py-1.5 hover:bg-transparent">
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
                                        <p className="font-semibold text-white text-left">Lucas Ethan</p>
                                        <p className="text-xs text-white/80">ID: 150001</p>
                                    </div>
                                </div>
                                <ChevronsUpDown size={16} className="text-white/80" />
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64" side="right" align="end" sideOffset={5}>
                        <DropdownMenuLabel>Accounts</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <Link href="/account/profile">
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Account Profile</span>
                                </DropdownMenuItem>
                            </Link>
                             <DropdownMenuItem>
                                <Building className="mr-2 h-4 w-4" />
                                <span>Company Profile</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                         <DropdownMenuLabel>Switch to</DropdownMenuLabel>
                        <DropdownMenuGroup>
                           <DropdownMenuItem>
                                <span>Flatirons Development</span>
                            </DropdownMenuItem>
                             <DropdownMenuItem>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                <span>New Team</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Logout</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
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
