"use client"

import { motion } from "framer-motion"

interface TurtleMascotProps {
  variant: "thumbsup" | "working"
}

export function TurtleMascot({ variant }: TurtleMascotProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-80 h-80 relative">
        {/* Removed image, keeping placeholder for future use */}
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
          <div className="text-6xl">{variant === "thumbsup" ? "👍" : "💻"}</div>
        </div>
      </div>
    </motion.div>
  )
}
