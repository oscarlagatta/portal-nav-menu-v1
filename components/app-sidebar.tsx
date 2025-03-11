"use client"

import type * as React from "react"
import {
  BarChart3,
  BookOpen,
  ClipboardList,
  Database,
  FileText,
  FolderOpen,
  Grid,
  HelpCircle,
  List,
  PieChart,
  Settings,
  Shield,
  Star,
  Upload,
  Users,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  teams: [
    {
      name: "Bank Of America",
      logo: Shield,
      plan: "BPS Portal",
    },
  ],
  navMain: [
    {
      title: "Resource Hub",
      icon: BookOpen,
      items: [
        { title: "Widget Category", icon: Grid },
        { title: "Widget Cards", icon: Grid },
      ],
    },
    {
      title: "Application Portfolio",
      icon: FolderOpen,
      items: [
        { title: "Import AIT", icon: Upload },
        { title: "Resource Hierarchies", icon: List },
        {
          title: "Data Management",
          icon: Database,
          items: [
            { title: "Edit Organisations", icon: Users },
            { title: "App Functions", icon: Settings },
            { title: "LOB", icon: FileText },
            { title: "Portfolio", icon: FolderOpen },
          ],
        },
      ],
    },
    { title: "Capacity Exception Tracker", icon: ClipboardList },
    { title: "Resource List", icon: List },
    { title: "Scorecard", icon: BarChart3 },
    {
      title: "RGI",
      icon: Star,
      items: [
        {
          title: "Configuration",
          icon: Settings,
          items: [
            { title: "Type" },
            { title: "SubType" },
            { title: "Status" },
            { title: "Stage" },
            { title: "Dispositions" },
            { title: "Intake Status" },
            { title: "Intake Sub Status" },
            { title: "Note Type" },
            { title: "Deliverable Status" },
            { title: "Relationship Type" },
            { title: "Category" },
            { title: "SLT" },
          ],
        },
        {
          title: "Reporting",
          icon: PieChart,
          items: [
            { title: "RGI" },
            { title: "RGI Business Intelligence (BI)" },
            { title: "RISE" },
            { title: "RISE App" },
            { title: "RISE BI" },
          ],
        },
      ],
    },
    { title: "Submission Tools", icon: Upload },
    { title: "Reporting & Analytics Hub", icon: BarChart3 },
    { title: "Data Import", icon: Database },
    { title: "AAS", icon: Shield },
    {
      title: "Admin",
      icon: Settings,
      items: [{ title: "App Notification" }, { title: "Health Checks" }, { title: "Offline Page" }],
    },
    { title: "Help", icon: HelpCircle },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

