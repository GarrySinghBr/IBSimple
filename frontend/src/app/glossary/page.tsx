"use client"

import { AppSidebar } from "@/components/AppSidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function GlossaryPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset style={{ backgroundColor: '#141619' }}>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-gray-400 text-lg">Glossary page coming soon...</p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

