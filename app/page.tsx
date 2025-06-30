"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="cyan-blob cyan-blob-1" />
      <div className="cyan-blob cyan-blob-2" />
      <div className="cyan-blob cyan-blob-3" />

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          className="pt-12 pb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center">
              <span className="text-gray-900">Cover</span>
              <span className="text-[#00BFFF]">Up</span>
              <span className="text-gray-900">.</span>
            </h1>
            <p className="text-center text-gray-600 mt-4 text-lg">Professional Funeral Parlour Management System</p>
          </div>
        </motion.header>

        {/* Main Content */}
        <motion.div
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Welcome Section */}
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Admin Portal
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Streamline your funeral parlour operations with our comprehensive management platform. Access user
                management, parlour oversight, and detailed reporting tools.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link href="/login">
                  <Button
                    size="lg"
                    className="bg-[#00BFFF] hover:bg-[#0099CC] text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Access Portal
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
                  >
                    Request Access
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Features Grid */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                {
                  title: "User Management",
                  description: "Comprehensive user oversight and policy management",
                  icon: "👥",
                },
                {
                  title: "Parlour Operations",
                  description: "Complete funeral parlour management and compliance",
                  icon: "🏢",
                },
                {
                  title: "Reports & Analytics",
                  description: "Detailed insights and performance metrics",
                  icon: "📊",
                },
                {
                  title: "System Administration",
                  description: "Platform configuration and security management",
                  icon: "⚙️",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-gray-200 hover:border-[#00BFFF]">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Security Notice */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {/* <Card className="max-w-2xl mx-auto p-6 bg-blue-50 border-[#00BFFF]">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Access Required</h3>
                <p className="text-gray-600 text-sm">
                  This portal requires authorized access credentials. All activities are monitored and logged for
                  security purposes.
                </p>
              </Card> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
