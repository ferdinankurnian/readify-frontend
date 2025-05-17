"use client";

import * as React from "react";
import {
  BellIcon,
  BooksIcon,
  ClockCounterClockwiseIcon,
  HeartStraightIcon,
  HouseIcon,
} from "@phosphor-icons/react";
import { NavUser } from "@/components/nav-user";
import { Label } from "@/components/ui/label";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import {SidebarLinks} from "@/constants/sidebar-links"

// This is sample data


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = React.useState(SidebarLinks.navMain[0]);
  const { setOpen } = useSidebar(); // Removed isCollapsed as it does not exist in SidebarContextProps

  return (
    // Kita pake satu Sidebar aja
    <Sidebar
      className="h-screen w-[calc(var(--sidebar-width-icon)+1px)]! border-r" // Atur width
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="icon"
              variant="icon"
              asChild
              className="md:p-0"
            >
              <div className="flex aspect-square items-center justify-center">
                <Image src="/favicon.ico" alt="Logo" width={42} height={42} />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="justify-center">
        <SidebarGroup>
          {/* className px-1.5 md:px-0 kayaknya bisa dihilangin kalau defaultnya udah ikon */}
          <SidebarGroupContent>
            <SidebarMenu>
              {SidebarLinks.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    size="icon"
                    variant="icon"
                    tooltip={{
                      children: item.title,
                    }}
                    tooltipForceOn={true}
                    onClick={() => {
                      setActiveItem(item);
                      setOpen(true);
                    }}
                    isActive={activeItem?.title === item.title}
                    className="px-2.5 md:px-2 text-lg"
                  >
                    <item.icon
                      size={28}
                      weight={
                        activeItem?.title === item.title
                          ? item.cantFill
                            ? "bold"
                            : "fill"
                          : "regular"
                      }
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={SidebarLinks.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
