"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Articles", href: "/articles" },
  { name: "Reviews", href: "/reviews" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex">
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
    </nav>
  )
}
