"use client"

import { useRouter, usePathname } from "next/navigation"
import { Sidebar, SidebarContent, SidebarHeader, SidebarTrigger, SidebarSeparator, SidebarFooter } from "@/components/ui/sidebar"
import { Search, ScanLine, Bot, Info, BookOpen, FileText, Mail, Github, FileCheck, Shield } from "lucide-react"

export function AppSidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const mainNavItems = [
    { title: "Search", icon: Search, path: "/" },
    { title: "Scan", icon: ScanLine, path: "/scan" },
    { title: "Agent", icon: Bot, path: "/agent" },
  ]

  const secondaryNavItems = [
    { title: "About", icon: Info, path: "/about" },
    { title: "Glossary", icon: BookOpen, path: "/glossary" },
    { title: "Sources", icon: FileText, path: "/sources" },
  ]

  const footerItems = [
    { title: "Contact", icon: Mail, path: "/contact" },
    { title: "Github", icon: Github, path: "https://github.com/GarrySinghBr/IBSimple", external: true },
  ]

  return (
    <Sidebar collapsible="icon" className="group-data-[collapsible=icon]:w-16">
      <SidebarHeader className="px-3 pt-3 pb-0">
        <div className="flex items-center gap-3 h-12 px-3 rounded-lg w-full text-sidebar-foreground group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:gap-0 mb-1">
          <SidebarTrigger className="shrink-0 h-5 w-5" />
          <div className="flex items-center gap-2 whitespace-nowrap group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:overflow-hidden transition-all">
            <span className="text-lg font-semibold">IBSimple</span>
            <span className="text-xs font-bold px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
              ALPHA
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3 pt-2 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-center">
        <nav className="flex flex-col gap-1 w-full">
          {mainNavItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.path
            
            return (
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                className={`
                  flex items-center gap-3 h-10 px-3 rounded-lg text-base
                  transition-colors relative w-full
                  ${isActive 
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  }
                  group-data-[collapsible=icon]:w-10
                  group-data-[collapsible=icon]:justify-center
                  group-data-[collapsible=icon]:px-0
                  group-data-[collapsible=icon]:gap-0
                `}
                title={item.title}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="whitespace-nowrap group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:overflow-hidden transition-all">
                  {item.title}
                </span>
              </button>
            )
          })}
        </nav>

        <SidebarSeparator className="my-4" />

        <nav className="flex flex-col gap-1 w-full">
          {secondaryNavItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.path
            
            return (
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                className={`
                  flex items-center gap-3 h-10 px-3 rounded-lg text-base
                  transition-colors relative w-full
                  ${isActive 
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  }
                  group-data-[collapsible=icon]:w-10
                  group-data-[collapsible=icon]:justify-center
                  group-data-[collapsible=icon]:px-0
                  group-data-[collapsible=icon]:gap-0
                `}
                title={item.title}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="whitespace-nowrap group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:overflow-hidden transition-all">
                  {item.title}
                </span>
              </button>
            )
          })}
        </nav>
      </SidebarContent>
      
      <SidebarFooter className="px-3 pb-3">
        <nav className="flex flex-col gap-1 w-full">
          {footerItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.path
            
            const handleClick = () => {
              if (item.external) {
                window.open(item.path, '_blank', 'noopener,noreferrer')
              } else {
                router.push(item.path)
              }
            }
            
            return (
              <button
                key={item.path}
                onClick={handleClick}
                className={`
                  flex items-center gap-3 h-10 px-3 rounded-lg text-base
                  transition-colors relative w-full
                  ${isActive 
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium' 
                    : 'text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent'
                  }
                  group-data-[collapsible=icon]:w-10
                  group-data-[collapsible=icon]:justify-center
                  group-data-[collapsible=icon]:px-0
                  group-data-[collapsible=icon]:gap-0
                `}
                title={item.title}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="whitespace-nowrap group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:overflow-hidden transition-all">
                  {item.title}
                </span>
              </button>
            )
          })}
        </nav>
      </SidebarFooter>
    </Sidebar>
  )
}
