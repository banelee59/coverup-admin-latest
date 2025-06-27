"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const mockStats = {
  totalSearches: 0,
  searchesGrowth: 0,
  totalParlours: 0,
  parloursGrowth: 0,
  newSearches: 0,
  newSearchesGrowth: 0,
  newParlours: 0,
  newParloursGrowth: 0,
}

const stats = [
  {
    title: "Total Searches",
    value: mockStats.totalSearches,
    growth: mockStats.searchesGrowth,
    period: "since last week",
  },
  {
    title: "Total registered Funeral parlours",
    value: mockStats.totalParlours,
    growth: mockStats.parloursGrowth,
    period: "since last week",
  },
  {
    title: "New Searches",
    value: mockStats.newSearches,
    growth: mockStats.newSearchesGrowth,
    period: "since last week",
  },
  {
    title: "New Registered Palours",
    value: mockStats.newParlours,
    growth: mockStats.newParloursGrowth,
    period: "since last week",
  },
]

export function DashboardStats() {
  return (
    <div className="space-y-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="p-6 border-2 border-[#00BFFF] rounded-2xl bg-white shadow-lg">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-4xl font-bold text-green-600">{stat.value.toLocaleString()}</p>
              <div className="bg-gray-200 rounded-lg p-3">
                <p className="text-sm text-green-600 font-medium">
                  +{stat.growth}% {stat.period}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
