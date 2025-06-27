"use client"

import { motion } from "framer-motion"
import { useAuth } from "@/components/providers/auth-provider"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

const navItems = [
  { name: "USERS", href: "/users" },
  { name: "PARLOURS", href: "/parlours" },
  { name: "REPORTS", href: "/reports" },
  { name: "SETTINGS", href: "/settings" },
]

export function Navigation() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <motion.nav
      className="bg-white shadow-sm border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/dashboard">
            <h1 className="text-2xl font-bold cursor-pointer">
              <span className="text-gray-900">Cover</span>
              <span className="text-[#00BFFF]">Up</span>
              <span className="text-gray-900">.</span>
            </h1>
          </Link>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href ? "text-[#00BFFF]" : "text-gray-700 hover:text-[#00BFFF]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.role}</p>
            </div>
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="text-gray-600 hover:text-gray-900 bg-transparent"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
