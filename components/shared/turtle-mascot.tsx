"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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
        {variant === "thumbsup" ? (
          <Image
            src="/images/turtle-mascot.png"
            alt="Friendly turtle mascot giving thumbs up"
            fill
            className="object-contain"
          />
        ) : (
          // For working variant, we'll use a placeholder since we don't have the working turtle image
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
            <div className="text-6xl">🐢💻</div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
