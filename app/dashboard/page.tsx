"use client"

import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { useAuth } from "@/components/providers/auth-provider"

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="relative">
          {/* Decorative blobs */}
          <div className="cyan-blob cyan-blob-1" />
          <div className="cyan-blob cyan-blob-2" />

          <div className="relative z-10">
            {/* Welcome Section */}
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-2">WELCOME BACK, {user?.name?.toUpperCase()}!</h1>
              <p className="text-xl text-[#00BFFF] font-medium">{user?.role?.toUpperCase()} DASHBOARD</p>
              <p className="text-gray-600 mt-2">{"LET'S GET TO WORK"}</p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <DashboardStats />
            </motion.div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
