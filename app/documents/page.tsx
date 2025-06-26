"use client"

import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DocumentTable } from "@/components/dashboard/document-table"
import { SearchBar } from "@/components/ui/search-bar"
import { ProtectedRoute } from "@/components/auth/protected-route"

export default function DocumentsPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="relative">
          {/* Decorative blobs */}
          <div className="cyan-blob cyan-blob-1" />
          <div className="cyan-blob cyan-blob-2" />

          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl font-bold text-[#00BFFF] text-center mb-8">DOCUMENT MANAGEMENT</h1>

              <div className="mb-8">
                <SearchBar placeholder="SEARCH USERS" />
              </div>

              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-8 text-sm font-medium">
                  <button className="text-gray-700 hover:text-[#00BFFF] transition-colors">BUSINESS NAME</button>
                  <button className="text-gray-700 hover:text-[#00BFFF] transition-colors">LOGO</button>
                  <button className="text-gray-700 hover:text-[#00BFFF] transition-colors">NOTIFICATIONS</button>
                  <button className="text-gray-700 hover:text-[#00BFFF] transition-colors">SUPPORT</button>
                  <button className="text-gray-700 hover:text-[#00BFFF] transition-colors">FINANCIAL OVERVIEW</button>
                </div>
              </div>

              <DocumentTable />
            </motion.div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
