"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
]

export function MainNav() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between">
        <button
          className="p-2 text-muted-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Hamburger Icon */}
          {isMobileMenuOpen ? (
            <span className="font-bold">X</span> // Close icon
          ) : (
            <span className="font-bold">☰</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-start gap-4 p-4 bg-background border">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground",
                )}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}