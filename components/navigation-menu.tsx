"use client"

import type React from "react"

import Link from "next/link"
import {
  BarChart3,
  BookOpen,
  ClipboardList,
  Database,
  FolderOpen,
  Grid,
  HelpCircle,
  List,
  Menu,
  PieChart,
  Settings,
  Shield,
  Star,
  Upload,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavItemProps {
  id: string
  title: string
  icon?: React.ReactNode
  href?: string
  isActive?: boolean
  onClick?: () => void
}

const NavItem = ({ id, title, icon, href, isActive = false, onClick }: NavItemProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn("w-full justify-start font-medium", isActive && "bg-accent text-accent-foreground")}
      onClick={onClick}
    >
      <span className="flex items-center gap-2">
        {icon}
        {title}
      </span>
    </Button>
  )
}

// Define the menu structure
const menuItems = [
  {
    id: "resource-hub",
    title: "Resource Hub",
    icon: <BookOpen className="h-4 w-4" />,
    subItems: [
      { id: "widget-category", title: "Widget Category", icon: <Grid className="h-4 w-4" /> },
      { id: "widget-cards", title: "Widget Cards", icon: <Grid className="h-4 w-4" /> },
    ],
  },
  {
    id: "application-portfolio",
    title: "Application Portfolio",
    icon: <FolderOpen className="h-4 w-4" />,
    subItems: [
      { id: "import-ait", title: "Import AIT", icon: <Upload className="h-4 w-4" /> },
      { id: "resource-hierarchies", title: "Resource Hierarchies", icon: <List className="h-4 w-4" /> },
      {
        id: "data-management",
        title: "Data Management",
        icon: <Database className="h-4 w-4" />,
        subItems: [
          { id: "edit-organisations", title: "Edit Organisations", icon: <Users className="h-4 w-4" /> },
          { id: "app-functions", title: "App Functions", icon: <Settings className="h-4 w-4" /> },
          { id: "lob", title: "LOB", icon: <List className="h-4 w-4" /> },
          { id: "portfolio", title: "Portfolio", icon: <FolderOpen className="h-4 w-4" /> },
        ],
      },
    ],
  },
  {
    id: "capacity-exception-tracker",
    title: "Capacity Exception Tracker",
    icon: <ClipboardList className="h-4 w-4" />,
  },
  {
    id: "resource-list",
    title: "Resource List",
    icon: <List className="h-4 w-4" />,
  },
  {
    id: "scorecard",
    title: "Scorecard",
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    id: "rgi",
    title: "RGI",
    icon: <Star className="h-4 w-4" />,
    subItems: [
      {
        id: "configuration",
        title: "Configuration",
        icon: <Settings className="h-4 w-4" />,
        subItems: [
          { id: "type", title: "Type" },
          { id: "subtype", title: "SubType" },
          { id: "status", title: "Status" },
          { id: "stage", title: "Stage" },
          { id: "dispositions", title: "Dispositions" },
          { id: "intake-status", title: "Intake Status" },
          { id: "intake-sub-status", title: "Intake Sub Status" },
          { id: "note-type", title: "Note Type" },
          { id: "deliverable-status", title: "Deliverable Status" },
          { id: "relationship-type", title: "Relationship Type" },
          { id: "category", title: "Category" },
          { id: "slt", title: "SLT" },
        ],
      },
      {
        id: "reporting",
        title: "Reporting",
        icon: <PieChart className="h-4 w-4" />,
        subItems: [
          { id: "rgi-report", title: "RGI" },
          { id: "rgi-bi", title: "RGI Business Intelligence (BI)" },
          { id: "rise", title: "RISE" },
          { id: "rise-app", title: "RISE App" },
          { id: "rise-bi", title: "RISE BI" },
        ],
      },
    ],
  },
  {
    id: "submission-tools",
    title: "Submission Tools",
    icon: <Upload className="h-4 w-4" />,
  },
  {
    id: "reporting-analytics-hub",
    title: "Reporting & Analytics Hub",
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    id: "data-import",
    title: "Data Import",
    icon: <Database className="h-4 w-4" />,
  },
  {
    id: "aas",
    title: "AAS",
    icon: <Shield className="h-4 w-4" />,
  },
  {
    id: "admin",
    title: "Admin",
    icon: <Settings className="h-4 w-4" />,
    subItems: [
      { id: "app-notification", title: "App Notification" },
      { id: "health-checks", title: "Health Checks" },
      { id: "offline-page", title: "Offline Page" },
    ],
  },
  {
    id: "help",
    title: "Help",
    icon: <HelpCircle className="h-4 w-4" />,
  },
]

export default function NavigationMenu({
  activeItem,
  onItemClick,
}: {
  activeItem: string | null
  onItemClick: (itemId: string) => void
}) {
  const renderNavContent = () => (
    <ScrollArea className="h-[calc(100vh-4rem)] pb-10">
      <div className="space-y-2 px-2 py-4">
        {menuItems.map((item) => (
          <NavItem
            key={item.id}
            id={item.id}
            title={item.title}
            icon={item.icon}
            isActive={activeItem === item.id}
            onClick={() => onItemClick(item.id)}
          />
        ))}
      </div>
    </ScrollArea>
  )

  return (
    <>
      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center h-16 px-4 border-b bg-background">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0">
            <div className="h-16 flex items-center px-6 border-b">
              <Link href="/" className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-pastel-blue" />
                <span className="font-semibold text-lg">Banking Portal</span>
              </Link>
            </div>
            {renderNavContent()}
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-pastel-blue" />
          <span className="font-semibold text-lg">Banking Portal</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex h-screen w-64 flex-col border-r bg-background">
        <div className="h-16 flex items-center px-6 border-b">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-pastel-blue" />
            <span className="font-semibold text-lg">Banking Portal</span>
          </Link>
        </div>
        {renderNavContent()}
      </div>
    </>
  )
}

