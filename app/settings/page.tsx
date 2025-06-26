"use client"

import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ProtectedRoute } from "@/components/auth/protected-route"

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-20"
        >
          <h1 className="text-4xl font-bold text-[#00BFFF] mb-4">SETTINGS</h1>
          <p className="text-gray-600">Settings functionality coming soon...</p>
        </motion.div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
