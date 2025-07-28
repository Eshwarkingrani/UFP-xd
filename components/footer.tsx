import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white">Unity Foundation</div>
                <div className="text-xs text-gray-300">Pakistan</div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Empowering Lives with Education, Care & Skills. Building a stronger Pakistan through comprehensive
              programs in education, empowerment, and compassionate care.
            </p>
            <div className="flex space-x-3">
              <Button
                size="icon"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-green-600 hover:border-green-600 bg-transparent"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-green-600 hover:border-green-600 bg-transparent"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-green-600 hover:border-green-600 bg-transparent"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-green-600 hover:border-green-600 bg-transparent"
              >
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-green-400 transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-green-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-green-400 transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-gray-300 hover:text-green-400 transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs#youth-education" className="text-gray-300 hover:text-green-400 transition-colors">
                  Youth Education
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#women-empowerment"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Women Empowerment
                </Link>
              </li>
              <li>
                <Link href="/programs#care" className="text-gray-300 hover:text-green-400 transition-colors">
                  Orphanage & Elderly Care
                </Link>
              </li>
              <li>
                <Link href="/programs#outreach" className="text-gray-300 hover:text-green-400 transition-colors">
                  Community Outreach
                </Link>
              </li>
              <li>
                <Link href="/get-involved#volunteer" className="text-gray-300 hover:text-green-400 transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/get-involved#sponsor" className="text-gray-300 hover:text-green-400 transition-colors">
                  Sponsorship
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Main Street, Block A<br />
                  Gulshan-e-Iqbal, Karachi
                  <br />
                  Sindh, Pakistan 75300
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">+92 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">info@unityfoundationpk.org</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">+92 300 1234567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for updates on our programs and impact stories
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
              />
              <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Unity Foundation Pakistan. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/privacy" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/transparency" className="hover:text-green-400 transition-colors">
                Transparency
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
