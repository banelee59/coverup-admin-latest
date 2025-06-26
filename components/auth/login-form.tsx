"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/components/providers/auth-provider"
import { useForm } from "react-hook-form"
import Link from "next/link"

interface LoginFormData {
  email: string
  password: string
}

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
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

  return (
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

      <div className="flex justify-between text-sm">
        <Link href="/forgot-password" className="text-[#00BFFF] hover:underline">
          Forgot Password
        </Link>
        <Link href="/two-factor" className="text-[#00BFFF] hover:underline">
          Two-Factor Authentication
        </Link>
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white py-3 rounded-full font-medium text-lg transition-colors duration-300"
      >
        {isSubmitting ? "Signing In..." : "Next"}
      </Button>

      <p className="text-center text-sm text-gray-600">
        {"Don't have an account? "}
        <Link href="/signup" className="text-[#00BFFF] hover:underline">
          Sign up here
        </Link>
      </p>
    </motion.form>
  )
}
