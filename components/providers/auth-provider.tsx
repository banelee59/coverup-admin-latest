"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  email: string
  name: string
  role: "Super Admin" | "User Manager" | "Parlour Manager" | "Reports Admin"
  permissions: string[]
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const mockAdmins = [
  {
    email: "superadmin@coverup.com",
    password: "super123",
    name: "Azola Tshobonga",
    role: "Super Admin" as const,
    permissions: ["users", "parlours", "reports", "settings", "all"],
  },
  {
    email: "usermanager@coverup.com",
    password: "user123",
    name: "Thabo Mthembu",
    role: "User Manager" as const,
    permissions: ["users", "reports"],
  },
  {
    email: "parlourmanager@coverup.com",
    password: "parlour123",
    name: "Nomsa Dlamini",
    role: "Parlour Manager" as const,
    permissions: ["parlours", "reports"],
  },
  {
    email: "reportsadmin@coverup.com",
    password: "reports123",
    name: "Sipho Ndlovu",
    role: "Reports Admin" as const,
    permissions: ["reports", "settings"],
  },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth state
    const storedUser = localStorage.getItem("coverup-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const admin = mockAdmins.find((admin) => admin.email === email && admin.password === password)

    if (admin) {
      const userData = {
        email: admin.email,
        name: admin.name,
        role: admin.role,
        permissions: admin.permissions,
      }
      setUser(userData)
      localStorage.setItem("coverup-user", JSON.stringify(userData))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("coverup-user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
