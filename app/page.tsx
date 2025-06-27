"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
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
            <h1 className="text-4xl font-bold text-center">
              <span className="text-gray-900">Cover</span>
              <span className="text-[#00BFFF]">Up</span>
              <span className="text-gray-900">.</span>
            </h1>
          </div>
        </motion.header>

        {/* Hero Section */}
        <motion.div
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/20 to-transparent z-10" />
              <Image
                src="/images/hero-family.png"
                alt="Happy family"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover grayscale"
                priority
              />
            </div>

            {/* Content */}
            <div className="text-center">
              <motion.h2
                className="text-5xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
              
              </motion.h2>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-[#00BFFF] hover:bg-[#0099CC] text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Log In
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
