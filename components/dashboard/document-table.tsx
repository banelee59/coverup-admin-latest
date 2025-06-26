"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const mockDocuments = [
  { name: "Business Registration Certificate:", validUntil: "N/A", status: "active" },
  { name: "Operating License:", validUntil: "August 2024", status: "inactive" },
  { name: "Insurance Certificate:", validUntil: "March 2024", status: "active" },
  { name: "Health and Safety Certificate", validUntil: "October 2024", status: "active" },
  { name: "Environmental Compliance Certificate", validUntil: "February 2024", status: "active" },
  { name: "BEE Certificate", validUntil: "February 2024", status: "inactive" },
]

export function DocumentTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-100 px-6 py-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="font-bold text-gray-700">DOCUMENTS</div>
            <div className="font-bold text-gray-700">VALID UNTIL</div>
            <div className="font-bold text-gray-700">STATUS</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {mockDocuments.map((document, index) => (
            <motion.div
              key={document.name}
              className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="font-medium text-gray-900">{document.name}</div>
                <div className="text-gray-600">{document.validUntil}</div>
                <div>
                  <div
                    className={`w-4 h-4 rounded-full ${document.status === "active" ? "bg-green-500" : "bg-red-500"}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
