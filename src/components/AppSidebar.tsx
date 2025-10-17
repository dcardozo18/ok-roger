"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  MessageSquare,
  Calendar,
  Mail,
  ShoppingCart,
  Folder,
  Users,
  CalendarPlus,
  Briefcase,
  Book,
  FileText,
  User,
  Package,
  SlidersHorizontal,
  Diamond,
  BadgePercent,
  File,
  ChevronDown,
  Dot
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    group: "DASHBOARDS",
    items: [
      { label: "Dashboards", icon: LayoutDashboard, subItems: ["Sub Item 1", "Sub Item 2"] },
      { label: "Landing Page", icon: Package },
    ],
  },
  {
    group: "APPS",
    items: [
      { label: "Chat", icon: MessageSquare },
      { label: "Calendar", icon: Calendar },
      { label: "Email", icon: Mail },
      { label: "eCommerce", icon: ShoppingCart },
      { label: "File Manager", icon: Folder },
      { label: "Projects", icon: Briefcase },
      { label: "CRM", icon: Users },
      { label: "Events", icon: CalendarPlus },
      { label: "Hospital Management", icon: Briefcase },
      { label: "School", icon: Book },
      { label: "Invoice", icon: FileText },
    ],
  },
  {
    group: "PAGES",
    items: [
      { label: "Authentication", icon: User },
      { label: "Pages", icon: File },
      { label: "Widgets", icon: SlidersHorizontal },
    ],
  },
  {
    group: "COMPONENTS",
    items: [
      { label: "UI Elements", icon: Package },
      { label: "Advanced UI", icon: Diamond },
      { label: "Icons", icon: BadgePercent },
    ],
  },
  {
    group: "FORMS & TABLES",
    items: [
      { label: "Forms", icon: FileText },
    ],
  },
]

function MenuItem({ item }: { item: any }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="justify-between">
            <div className="flex items-center gap-2">
              <item.icon size={18} />
              <span>{item.label}</span>
            </div>
            {hasSubItems && (
              <ChevronDown
                size={16}
                className={cn("transition-transform", isOpen && "rotate-180")}
              />
            )}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        {hasSubItems && (
          <CollapsibleContent>
            <div className="flex flex-col gap-1 pl-8 py-1">
              {item.subItems.map((subItem: string) => (
                <a key={subItem} href="#" className="flex items-center gap-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground">
                  <Dot size={16} />
                  <span>{subItem}</span>
                </a>
              ))}
            </div>
          </CollapsibleContent>
        )}
      </SidebarMenuItem>
    </Collapsible>
  )
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white font-bold text-lg">
                D
            </div>
            <span className="text-xl font-bold text-white">Domiex</span>
        </div>
      </SidebarHeader>

      <SidebarSeparator />
      
      <SidebarContent className="p-2">
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
          
        {menuItems.map((group) => (
          <SidebarGroup key={group.group}>
            <SidebarGroupLabel>{group.group}</SidebarGroupLabel>
            <SidebarMenu>
              {group.items.map((item) => (
                <MenuItem key={item.label} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
