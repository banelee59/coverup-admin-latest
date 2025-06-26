"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const mockUsers = [
  { id: "amahle-khubeka", name: "AMAHLE KHUBEKA", joinDate: "September 2023", status: "active" },
  { id: "anele-sibisi", name: "ANELE SIBISI", joinDate: "August 2024", status: "inactive" },
  { id: "aphelele-siyatha", name: "APHELELE SIYATHA", joinDate: "March 2024", status: "active" },
  { id: "banele-masondo", name: "BANELE MASONDO", joinDate: "October 2023", status: "active" },
  { id: "buhlebenkosi-donsi", name: "BUHLEBENKOSI DONSI", joinDate: "February 2024", status: "active" },
]

export function UserTable() {
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
            <div className="font-bold text-gray-700">ALL USERS</div>
            <div className="font-bold text-gray-700">REGISTRATION DATE</div>
            <div className="font-bold text-gray-700">STATUS</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {mockUsers.map((user, index) => (
            <motion.div
              key={user.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/users/${user.id}`}>
                <div className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="font-medium text-gray-900">{user.name}</div>
                    <div className="text-gray-600">Joined in {user.joinDate}</div>
                    <div>
                      <div
                        className={`w-4 h-4 rounded-full ${user.status === "active" ? "bg-green-500" : "bg-red-500"}`}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
