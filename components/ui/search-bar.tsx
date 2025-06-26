"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./button"
import { Input } from "./input"

interface SearchBarProps {
  placeholder: string
  onSearch?: (query: string) => void
}

export function SearchBar({ placeholder, onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query)
    } else {
      // Default search behavior
      alert(`Searching for: "${query}"`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const handleFilters = () => {
    alert("Filters functionality would be implemented here")
  }

  return (
    <motion.div
      className="flex items-center gap-4 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-1 relative">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="w-full px-6 py-3 border-2 border-[#00BFFF] rounded-full focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent text-gray-600"
        />
      </div>
      <Button
        onClick={handleSearch}
        className="bg-[#00BFFF] hover:bg-[#0099CC] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
      >
        SEARCH
      </Button>
      <Button onClick={handleFilters} variant="ghost" className="text-[#00BFFF] hover:text-[#0099CC] font-medium">
        + FILTERS
      </Button>
    </motion.div>
  )
}
