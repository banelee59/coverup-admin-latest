"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import Link from "next/link"

interface SignUpFormData {
  name: string
  surname: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormData>()
  const password = watch("password")

  const onSubmit = async (data: SignUpFormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demo purposes, redirect to login
    router.push("/login")

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
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            className="w-full px-4 py-3 border-2 border-[#00BFFF] rounded-full focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Input
            {...register("surname", { required: "Surname is required" })}
            placeholder="Surname"
            className="w-full px-4 py-3 border-2 border-[#00BFFF] rounded-full focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent"
          />
          {errors.surname && <p className="text-red-500 text-sm mt-1">{errors.surname.message}</p>}
        </div>
      </div>

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

      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
          <span className="text-sm mr-2">🇿🇦</span>
          <span className="text-gray-600">+27</span>
        </div>
        <Input
          {...register("phone", { required: "Phone number is required" })}
          type="tel"
          placeholder=""
          className="w-full pl-20 pr-4 py-3 border-2 border-[#00BFFF] rounded-full focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <Input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border-2 border-[#00BFFF] rounded-full focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <div>
        <Input
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-3 border-2 border-[#00BFFF] rounded-full focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white py-3 rounded-full font-medium text-lg transition-colors duration-300"
      >
        {isSubmitting ? "Creating Account..." : "Next"}
      </Button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-[#00BFFF] hover:underline">
          Log in here
        </Link>
      </p>
    </motion.form>
  )
}
