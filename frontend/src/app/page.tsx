"use client"

import { AppSidebar } from "@/components/AppSidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { SearchInput } from "@/components/SearchInput"

export default function HomePage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset style={{ backgroundColor: '#141619' }}>
        <div className="flex flex-col min-h-screen">
          <SearchInput />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
