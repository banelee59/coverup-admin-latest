"use client"

import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ParlourDetailView } from "@/components/dashboard/parlour-detail-view"
import { ProtectedRoute } from "@/components/auth/protected-route"

export default function ParlourDetailPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="relative">
          {/* Decorative blobs */}
          <div className="cyan-blob cyan-blob-1" />
          <div className="cyan-blob cyan-blob-2" />

          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl font-bold text-[#00BFFF] text-center mb-8">MANAGE PARLOUR</h1>
              <ParlourDetailView />
            </motion.div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
