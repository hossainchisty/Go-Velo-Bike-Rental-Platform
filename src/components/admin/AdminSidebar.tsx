import { LayoutDashboard, Bike, Users, Calendar, CreditCard, Settings, MessageSquare, BarChart3 } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Bikes Management", url: "/admin/bikes", icon: Bike },
  { title: "Users", url: "/admin/users", icon: Users },
  { title: "Rentals", url: "/admin/rentals", icon: Calendar },
  { title: "Payments", url: "/admin/payments", icon: CreditCard },
  { title: "Messages", url: "/admin/messages", icon: MessageSquare },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <div className="p-4 border-b">
        <h2 className={`font-bold text-lg text-primary group-data-[collapsible=icon]:hidden`}>
          Go-Velo Admin
        </h2>
      </div>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/admin"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "hover:bg-muted/50"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
