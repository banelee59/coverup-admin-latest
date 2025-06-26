"use client"

import { motion } from "framer-motion"
import { LoginForm } from "@/components/auth/login-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function LoginPage() {
  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#00BFFF] mb-2">Log In.</h1>
          <p className="text-xl text-gray-900 font-medium">Welcome Back!</p>
        </div>
        <LoginForm />
      </motion.div>
    </AuthLayout>
  )
}
