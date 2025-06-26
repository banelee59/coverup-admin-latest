"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const mockParlours = [
  { id: "baroka-funerals", name: "BAROKA FUNERALS", joinDate: "September 2023", status: "active" },
  { id: "doves", name: "DOVES", joinDate: "August 2024", status: "inactive" },
  { id: "icebolethu-group", name: "ICEBOLETHU GROUP", joinDate: "March 2024", status: "active" },
  { id: "jd-funerals", name: "JD FUNERALS", joinDate: "October 2023", status: "active" },
  { id: "mtg-funerals", name: "MTG FUNERALS", joinDate: "February 2024", status: "active" },
]

export function ParlourTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-100 px-6 py-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="font-bold text-gray-700">ALL USERS</div>
            <div className="font-bold text-gray-700">REGISTRATION DATE</div>
            <div className="font-bold text-gray-700">STATUS</div>
            <div className="font-bold text-gray-700">Update</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {mockParlours.map((parlour, index) => (
            <motion.div
              key={parlour.name}
              className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-4 gap-4 items-center">
                <div className="font-medium text-gray-900">{parlour.name}</div>
                <div className="text-gray-600">Joined in {parlour.joinDate}</div>
                <div>
                  <div
                    className={`w-4 h-4 rounded-full ${parlour.status === "active" ? "bg-green-500" : "bg-red-500"}`}
                  />
                </div>
                <div>
                  <Link href={`/parlours/${parlour.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-gray-600 hover:text-[#00BFFF] hover:border-[#00BFFF]"
                    >
                      Edit
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
