"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/ui/search-bar"
import { Mail, Bell, Phone, Settings } from "lucide-react"

const analyticsData = [
  { title: "NEW LEADS", value: "+38K", change: "3.07%", period: "Since last month", positive: true },
  { title: "LEAD CONVERSATION RATE", value: "-12K", change: "6.63%", period: "Since last month", positive: false },
  { title: "TOTAL LEADS GENERATED", value: "+38K", change: "6.63%", period: "Since last month", positive: true },
  { title: "CONTACTED", value: "-38K", change: "6.63%", period: "Since last month", positive: false },
]

const chartData = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 180 },
  { month: "Mar", value: 80 },
  { month: "Apr", value: 250 },
  { month: "May", value: 350 },
  { month: "Jun", value: 250 },
  { month: "Jul", value: 400 },
  { month: "Aug", value: 120 },
  { month: "Sep", value: 80 },
  { month: "Oct", value: 180 },
  { month: "Nov", value: 120 },
  { month: "Dec", value: 100 },
]

export function ParlourAnalytics() {
  const handleDownload = () => {
    alert("Downloading analytics report...")
    // In a real app, this would trigger a file download
  }

  const handleMail = () => {
    alert("Opening email client...")
  }

  const handleNotifications = () => {
    alert("Opening notifications...")
  }

  const handlePhone = () => {
    alert("Opening phone/call functionality...")
  }

  const handleSettings = () => {
    alert("Opening settings...")
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            <p>COMPANY</p>
            <p>LOGO</p>
          </div>
          <h1 className="text-4xl font-bold text-[#00BFFF]">BAROKA FUNERALS DASHBOARD</h1>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-2xl">
          <SearchBar placeholder="SEARCH PARLOURS" />
        </div>
        <div className="flex items-center space-x-4">
          <Button onClick={handleDownload} variant="ghost" className="text-[#00BFFF] hover:text-[#0099CC]">
            DOWNLOAD
          </Button>
          <div className="flex space-x-2">
            <Button onClick={handleMail} variant="ghost" size="sm">
              <Mail className="w-4 h-4" />
            </Button>
            <Button onClick={handleNotifications} variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button onClick={handlePhone} variant="ghost" size="sm">
              <Phone className="w-4 h-4" />
            </Button>
            <Button onClick={handleSettings} variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Stats Cards */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-6">
          {analyticsData.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 rounded-2xl border-2 border-gray-200 cursor-pointer hover:border-[#00BFFF] transition-colors">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 uppercase">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${stat.positive ? "text-green-600" : "text-red-600"}`}>
                      {stat.positive ? "↑" : "↓"} {stat.change}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{stat.period}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-6 rounded-2xl border-2 border-gray-200 h-full">
            <div className="h-full flex flex-col">
              <div className="flex-1 relative">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  {chartData.map((item, index) => (
                    <rect
                      key={item.month}
                      x={index * 30 + 20}
                      y={300 - (item.value / 500) * 250}
                      width={20}
                      height={(item.value / 500) * 250}
                      fill="#FFA500"
                      className="hover:fill-[#00BFFF] transition-colors duration-200 cursor-pointer"
                      onClick={() => alert(`${item.month}: ${item.value} leads`)}
                    />
                  ))}
                </svg>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-4">
                {chartData.map((item) => (
                  <span key={item.month}>{item.month}</span>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
