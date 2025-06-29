"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, Building2, FileText, Activity } from "lucide-react"

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
    icon: Activity,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    title: "Registered Funeral Parlours",
    value: mockStats.totalParlours,
    growth: mockStats.parloursGrowth,
    period: "since last week",
    icon: Building2,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    title: "New Searches",
    value: mockStats.newSearches,
    growth: mockStats.newSearchesGrowth,
    period: "since last week",
    icon: FileText,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    title: "New Registered Parlours",
    value: mockStats.newParlours,
    growth: mockStats.newParloursGrowth,
    period: "since last week",
    icon: Users,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card
            className={`p-6 rounded-2xl border-2 ${stat.borderColor} ${stat.bgColor} hover:shadow-lg transition-all duration-300 hover:scale-105`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bgColor} border ${stat.borderColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="flex items-center space-x-1">
                {stat.growth > 0 ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
                <span className={`text-sm font-medium ${stat.growth > 0 ? "text-green-600" : "text-red-600"}`}>
                  {stat.growth > 0 ? "+" : ""}
                  {stat.growth}%
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value.toLocaleString()}</p>
              <p className="text-xs text-gray-500">{stat.period}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
