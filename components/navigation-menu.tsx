"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  BookOpen,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Database,
  FileText,
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
  title: string
  icon?: React.ReactNode
  href?: string
  children?: React.ReactNode
  isActive?: boolean
  isOpen?: boolean
  onToggle?: () => void
}

const NavItem = ({ title, icon, href, children, isActive = false, isOpen = false, onToggle }: NavItemProps) => {
  const hasChildren = Boolean(children)

  if (hasChildren) {
    return (
      <div className="space-y-1">
        <Button
          variant="ghost"
          size="sm"
          className={cn("w-full justify-between font-medium", isActive && "bg-accent text-accent-foreground")}
          onClick={onToggle}
        >
          <span className="flex items-center gap-2">
            {icon}
            {title}
          </span>
          {isOpen ? (
            <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
          ) : (
            <ChevronRight className="h-4 w-4 shrink-0 opacity-50" />
          )}
        </Button>
        {isOpen && <div className="pl-6 pt-1">{children}</div>}
      </div>
    )
  }

  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      className={cn("w-full justify-start font-medium", isActive && "bg-accent text-accent-foreground")}
    >
      <Link href={href || "#"}>
        <span className="flex items-center gap-2">
          {icon}
          {title}
        </span>
      </Link>
    </Button>
  )
}

export default function NavigationMenu() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "resource-hub": false,
    "application-portfolio": false,
    "data-management": false,
    rgi: false,
    configuration: false,
    reporting: false,
    admin: false,
  })

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const renderNavContent = () => (
    <ScrollArea className="h-[calc(100vh-4rem)] pb-10">
      <div className="space-y-2 px-2 py-4">
        <NavItem
          title="Resource Hub"
          icon={<BookOpen className="h-4 w-4" />}
          isOpen={openItems["resource-hub"]}
          onToggle={() => toggleItem("resource-hub")}
        >
          <NavItem title="Widget Category" icon={<Grid className="h-4 w-4" />} />
          <NavItem title="Widget Cards" icon={<Grid className="h-4 w-4" />} />
        </NavItem>

        <NavItem
          title="Application Portfolio"
          icon={<FolderOpen className="h-4 w-4" />}
          isOpen={openItems["application-portfolio"]}
          onToggle={() => toggleItem("application-portfolio")}
        >
          <NavItem title="Import AIT" icon={<Upload className="h-4 w-4" />} />
          <NavItem title="Resource Hierarchies" icon={<List className="h-4 w-4" />} />
          <NavItem
            title="Data Management"
            icon={<Database className="h-4 w-4" />}
            isOpen={openItems["data-management"]}
            onToggle={() => toggleItem("data-management")}
          >
            <NavItem title="Edit Organisations" icon={<Users className="h-4 w-4" />} />
            <NavItem title="App Functions" icon={<Settings className="h-4 w-4" />} />
            <NavItem title="LOB" icon={<FileText className="h-4 w-4" />} />
            <NavItem title="Portfolio" icon={<FolderOpen className="h-4 w-4" />} />
          </NavItem>
        </NavItem>

        <NavItem title="Capacity Exception Tracker" icon={<ClipboardList className="h-4 w-4" />} />
        <NavItem title="Resource List" icon={<List className="h-4 w-4" />} />
        <NavItem title="Scorecard" icon={<BarChart3 className="h-4 w-4" />} />

        <NavItem
          title="RGI"
          icon={<Star className="h-4 w-4" />}
          isOpen={openItems["rgi"]}
          onToggle={() => toggleItem("rgi")}
        >
          <NavItem
            title="Configuration"
            icon={<Settings className="h-4 w-4" />}
            isOpen={openItems["configuration"]}
            onToggle={() => toggleItem("configuration")}
          >
            <NavItem title="Type" />
            <NavItem title="SubType" />
            <NavItem title="Status" />
            <NavItem title="Stage" />
            <NavItem title="Dispositions" />
            <NavItem title="Intake Status" />
            <NavItem title="Intake Sub Status" />
            <NavItem title="Note Type" />
            <NavItem title="Deliverable Status" />
            <NavItem title="Relationship Type" />
            <NavItem title="Category" />
            <NavItem title="SLT" />
          </NavItem>
          <NavItem
            title="Reporting"
            icon={<PieChart className="h-4 w-4" />}
            isOpen={openItems["reporting"]}
            onToggle={() => toggleItem("reporting")}
          >
            <NavItem title="RGI" />
            <NavItem title="RGI Business Intelligence (BI)" />
            <NavItem title="RISE" />
            <NavItem title="RISE App" />
            <NavItem title="RISE BI" />
          </NavItem>
        </NavItem>

        <NavItem title="Submission Tools" icon={<Upload className="h-4 w-4" />} />
        <NavItem title="Reporting & Analytics Hub" icon={<BarChart3 className="h-4 w-4" />} />
        <NavItem title="Data Import" icon={<Database className="h-4 w-4" />} />
        <NavItem title="AAS" icon={<Shield className="h-4 w-4" />} />

        <NavItem
          title="Admin"
          icon={<Settings className="h-4 w-4" />}
          isOpen={openItems["admin"]}
          onToggle={() => toggleItem("admin")}
        >
          <NavItem title="App Notification" />
          <NavItem title="Health Checks" />
          <NavItem title="Offline Page" />
        </NavItem>

        <NavItem title="Help" icon={<HelpCircle className="h-4 w-4" />} />
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

