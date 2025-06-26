"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function UserDetailView() {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)

  const handleEditUser = () => {
    setIsEditing(true)
    // Add edit functionality here
    alert("Edit user functionality would be implemented here")
  }

  const handleDeleteUser = () => {
    if (confirm("Are you sure you want to delete this user?")) {
      // Add delete functionality here
      alert("User would be deleted here")
      router.push("/users")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">AMAHLE KHUBEKA</h2>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">ID NUMBER: 85042588840384</p>
          <p className="text-sm text-gray-600">EMAIL: AMAHLE123@GMAIL.COM</p>
          <div className="mt-2 space-x-2">
            <Button onClick={handleEditUser} className="bg-[#00BFFF] hover:bg-[#0099CC] text-white rounded-full px-6">
              EDIT USER
            </Button>
            <Button onClick={handleDeleteUser} variant="destructive" className="rounded-full px-6">
              DELETE USER
            </Button>
          </div>
        </div>
      </div>

      {/* User Details Card */}
      <Card className="bg-white rounded-2xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Registration Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">REGISTRATION DATE</h3>
            <p className="text-gray-600">Joined in September 2023</p>
          </div>

          {/* Policy Details */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-6">POLICY DETAILS</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">POLICY COMPANY</span>
                <span className="text-[#00BFFF] font-medium">OLD MUTUAL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">MONTHLY PREMIUM:</span>
                <span className="text-[#00BFFF] font-medium">R350/pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">AVAILABLE CLAIM:</span>
                <span className="text-[#00BFFF] font-medium">R30 000 per claim</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">PREVIOUS CLAIMS</span>
                <span className="text-[#00BFFF] font-medium">N/A</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">COVER SPEC:</span>
                <span className="text-[#00BFFF] font-medium">FAMILY</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">MEMBERS COVERED:</span>
                <span className="text-[#00BFFF] font-medium">MAIN MEMBER, SPOUSE & CHILDREN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">EXTRA OPTIONS:</span>
                <div className="text-right">
                  <div className="text-[#00BFFF] font-medium">TOMBSTONE</div>
                  <div className="text-[#00BFFF] font-medium">FLOWERS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
