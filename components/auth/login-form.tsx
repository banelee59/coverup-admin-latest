"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useAuth } from "@/components/providers/auth-provider"
import { useForm } from "react-hook-form"
import Link from "next/link"

interface LoginFormData {
  email: string
  password: string
}

const adminAccounts = [
  {
    role: "Super Admin",
    email: "superadmin@coverup.com",
    password: "super123",
    description: "Full system access",
  },
  {
    role: "User Manager",
    email: "usermanager@coverup.com",
    password: "user123",
    description: "User & policy management",
  },
  {
    role: "Parlour Manager",
    email: "parlourmanager@coverup.com",
    password: "parlour123",
    description: "Parlour operations",
  },
  {
    role: "Reports Admin",
    email: "reportsadmin@coverup.com",
    password: "reports123",
    description: "Reports & analytics",
  },
]

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginFormData>()

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true)
    setError("")

    const success = await login(data.email, data.password)

    if (success) {
      router.push("/dashboard")
    } else {
      setError("Invalid email or password")
    }

    setIsSubmitting(false)
  }

  const handleQuickLogin = (email: string, password: string) => {
    setValue("email", email)
    setValue("password", password)
  }

  return (
    <div className="space-y-8">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border-2 border-[#00BFFF] rounded-full focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <Input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border-2 border-[#00BFFF] rounded-full focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white py-3 rounded-full font-medium text-lg transition-colors duration-300"
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Button>

        <p className="text-center text-sm text-gray-600">
          {"Don't have an account? "}
          <Link href="/signup" className="text-[#00BFFF] hover:underline">
            Request access here
          </Link>
        </p>
      </motion.form>

      {/* Demo Accounts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="p-6 bg-gray-50 border-2 border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Demo Admin Accounts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {adminAccounts.map((account) => (
              <Button
                key={account.role}
                variant="outline"
                size="sm"
                onClick={() => handleQuickLogin(account.email, account.password)}
                className="text-left justify-start h-auto p-3 hover:bg-[#00BFFF] hover:text-white transition-colors"
              >
                <div>
                  <div className="font-medium text-sm">{account.role}</div>
                  <div className="text-xs opacity-75">{account.description}</div>
                </div>
              </Button>
            ))}
          </div>
          <p className="text-xs text-gray-500 text-center mt-3">Click any role above to auto-fill login credentials</p>
        </Card>
      </motion.div>
    </div>
  )
}
