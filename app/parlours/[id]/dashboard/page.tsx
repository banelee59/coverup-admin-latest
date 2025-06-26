"use client"

import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ParlourAnalytics } from "@/components/dashboard/parlour-analytics"
import { ProtectedRoute } from "@/components/auth/protected-route"

export default function ParlourDashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="relative">
          {/* Decorative blobs */}
          <div className="cyan-blob cyan-blob-1" />
          <div className="cyan-blob cyan-blob-2" />

          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <ParlourAnalytics />
            </motion.div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
