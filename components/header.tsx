"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Heart } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Programs", href: "/programs" },
    { name: "Enroll Now", href: "/enroll" },
    { name: "Gallery", href: "/gallery" },
    { name: "News & Events", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-800">Unity Foundation</div>
              <div className="text-xs text-gray-600">Pakistan</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Donate Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button asChild className="bg-green-600 hover:bg-green-700 hidden sm:inline-flex">
              <Link href="/donate">Donate Now</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="bg-green-600 hover:bg-green-700 mt-4">
                    <Link href="/donate" onClick={() => setIsOpen(false)}>
                      Donate Now
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
