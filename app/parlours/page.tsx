"use client"

import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ParlourTable } from "@/components/dashboard/parlour-table"
import { SearchBar } from "@/components/ui/search-bar"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { Button } from "@/components/ui/button"

export default function ParloursPage() {
  const handleAddParlour = () => {
    alert("Add new parlour functionality would be implemented here")
    // In a real app, this would navigate to a form or open a modal
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="relative">
          {/* Decorative blobs */}
          <div className="cyan-blob cyan-blob-1" />
          <div className="cyan-blob cyan-blob-2" />

          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl font-bold text-[#00BFFF] text-center mb-8">MANAGE PARLOURS</h1>

              <div className="mb-8 flex items-center justify-center gap-4">
                <div className="flex-1 max-w-2xl">
                  <SearchBar placeholder="SEARCH PARLOURS" />
                </div>
                <Button
                  onClick={handleAddParlour}
                  className="bg-[#00BFFF] hover:bg-[#0099CC] text-white rounded-full px-6"
                >
                  +ADD
                </Button>
              </div>

              <ParlourTable />
            </motion.div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
