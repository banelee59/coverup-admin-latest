"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="cyan-blob cyan-blob-1" />
      <div className="cyan-blob cyan-blob-2" />
      <div className="cyan-blob cyan-blob-3" />

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          className="pt-8 pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <Link href="/">
              <h1 className="text-4xl font-bold text-center cursor-pointer">
                <span className="text-gray-900">Cover</span>
                <span className="text-[#00BFFF]">Up</span>
                <span className="text-gray-900">.</span>
              </h1>
            </Link>
          </div>
        </motion.header>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center max-w-6xl mx-auto">
            {/* Form */}
            <div className="flex justify-center">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
