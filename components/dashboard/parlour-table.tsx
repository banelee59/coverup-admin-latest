"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

interface Parlour {
  id: string
  name: string
  joinDate: string
  status: "pending" | "under-review" | "accepted" | "active" | "inactive" | "suspended" | "rejected"
}

const initialParlours: Parlour[] = [
  { id: "baroka-funerals", name: "BAROKA FUNERALS", joinDate: "September 2023", status: "active" },
  { id: "doves", name: "DOVES", joinDate: "August 2024", status: "inactive" },
  { id: "icebolethu-group", name: "ICEBOLETHU GROUP", joinDate: "March 2024", status: "pending" },
  { id: "jd-funerals", name: "JD FUNERALS", joinDate: "October 2023", status: "under-review" },
  { id: "mtg-funerals", name: "MTG FUNERALS", joinDate: "February 2024", status: "accepted" },
]

const statusOptions = [
  { value: "pending", label: "Pending", color: "bg-yellow-500" },
  { value: "under-review", label: "Under Review", color: "bg-blue-500" },
  { value: "accepted", label: "Accepted", color: "bg-green-500" },
  { value: "active", label: "Active", color: "bg-green-600" },
  { value: "inactive", label: "Inactive", color: "bg-gray-500" },
  { value: "suspended", label: "Suspended", color: "bg-orange-500" },
  { value: "rejected", label: "Rejected", color: "bg-red-500" },
] as const

export function ParlourTable() {
  const [parlours, setParlours] = useState<Parlour[]>(initialParlours)

  const updateParlourStatus = (parlourId: string, newStatus: Parlour["status"]) => {
    setParlours((prevParlours) =>
      prevParlours.map((parlour) => (parlour.id === parlourId ? { ...parlour, status: newStatus } : parlour)),
    )
  }

  const getStatusColor = (status: string) => {
    const statusOption = statusOptions.find((option) => option.value === status)
    return statusOption?.color || "bg-gray-500"
  }

  const getStatusLabel = (status: string) => {
    const statusOption = statusOptions.find((option) => option.value === status)
    return statusOption?.label || status
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-100 px-6 py-4">
          <div className="grid grid-cols-5 gap-4">
            <div className="font-bold text-gray-700">PARLOUR NAME</div>
            <div className="font-bold text-gray-700">REGISTRATION DATE</div>
            <div className="font-bold text-gray-700">STATUS</div>
            <div className="font-bold text-gray-700">EDIT</div>
            <div className="font-bold text-gray-700">UPDATE STATUS</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {parlours.map((parlour, index) => (
            <motion.div
              key={parlour.name}
              className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-5 gap-4 items-center">
                <div className="font-medium text-gray-900">{parlour.name}</div>
                <div className="text-gray-600">Joined in {parlour.joinDate}</div>
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full ${getStatusColor(parlour.status)}`} />
                  <span className="text-sm font-medium text-gray-700">{getStatusLabel(parlour.status)}</span>
                </div>
                <div>
                  <Link href={`/parlours/${parlour.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-gray-600 hover:text-[#00BFFF] hover:border-[#00BFFF] bg-transparent"
                    >
                      Edit
                    </Button>
                  </Link>
                </div>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-gray-600 hover:text-[#00BFFF] hover:border-[#00BFFF] bg-transparent"
                      >
                        Change Status
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      {statusOptions.map((option) => (
                        <DropdownMenuItem
                          key={option.value}
                          onClick={() => updateParlourStatus(parlour.id, option.value)}
                          className="cursor-pointer"
                        >
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${option.color}`} />
                            <span>{option.label}</span>
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
