"use client"

import { AppSidebar } from "@/components/AppSidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Mail, Github } from "lucide-react"

export default function ContactPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset style={{ backgroundColor: '#141619' }}>
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <div className="w-full max-w-2xl">
            {/* Title and Description */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
              <p className="text-gray-400 text-lg">
                Have questions, feedback, or need help? We'd love to hear from you.
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Email Card */}
              <a
                href="mailto:ibsimpleai@gmail.com"
                className="flex flex-col items-center p-8 rounded-2xl transition-all group"
                style={{ backgroundColor: '#1a1b1e', borderWidth: '1px', borderColor: '#2a2b2e' }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400 text-center text-sm mb-3">
                  Send us a message and we'll respond as soon as possible
                </p>
                <span className="text-blue-400 text-sm group-hover:underline">
                  ibsimpleai@gmail.com
                </span>
              </a>

              {/* GitHub Issues Card */}
              <a
                href="https://github.com/GarrySinghBr/IBSimple/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 rounded-2xl transition-all group"
                style={{ backgroundColor: '#1a1b1e', borderWidth: '1px', borderColor: '#2a2b2e' }}
              >
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <Github className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">GitHub Issues</h3>
                <p className="text-gray-400 text-center text-sm mb-3">
                  Report bugs or request features on our GitHub repository
                </p>
                <span className="text-purple-400 text-sm group-hover:underline">
                  Open an issue
                </span>
              </a>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

