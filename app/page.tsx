import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, GraduationCap, HandHeart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Reviews from "@/components/reviews"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Unity Foundation Pakistan</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Empowering Lives with Education, Care & Skills</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Building a stronger Pakistan through education, empowerment, and compassionate care for all members of our
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/get-involved">Donate Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Unity Foundation Pakistan</h2>
            <p className="text-lg text-gray-600 mb-8">
              We are a dedicated non-profit organization committed to transforming lives through comprehensive programs
              in education, skills development, women empowerment, and care for the most vulnerable members of our
              society.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">500+ Lives Impacted</h3>
                <p className="text-gray-600">Through our various programs and initiatives</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">50+ Courses Offered</h3>
                <p className="text-gray-600">Skills-based training and education programs</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">24/7 Care</h3>
                <p className="text-gray-600">For orphans and elderly in our facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Main Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Youth Education</CardTitle>
                <CardDescription>Comprehensive education and skills training for young people</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• MS Office Training</li>
                  <li>• Freelancing Skills</li>
                  <li>• English Language</li>
                  <li>• Career Guidance</li>
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                  <Link href="/programs#youth-education">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Women Empowerment</CardTitle>
                <CardDescription>Vocational training and business support for women</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Sewing & Tailoring</li>
                  <li>• Beauty Training</li>
                  <li>• Online Skills</li>
                  <li>• Business Startup</li>
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                  <Link href="/programs#women-empowerment">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Orphanage & Elderly Care</CardTitle>
                <CardDescription>Comprehensive care for orphans and elderly</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• 24/7 Care Facilities</li>
                  <li>• Daily Routine Programs</li>
                  <li>• Healthcare Support</li>
                  <li>• Educational Support</li>
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                  <Link href="/programs#care">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <HandHeart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Community Outreach</CardTitle>
                <CardDescription>Health and awareness programs for communities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Medical Camps</li>
                  <li>• Mental Health Workshops</li>
                  <li>• Awareness Sessions</li>
                  <li>• Community Events</li>
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                  <Link href="/programs#outreach">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support can transform lives and build a stronger, more united Pakistan. Every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/get-involved">Donate Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/get-involved#volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Recent Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Youth Training Session"
                width={300}
                height={200}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-800 mb-2">Youth Skills Training</h3>
              <p className="text-gray-600">25 young people completed our latest MS Office and freelancing course</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Women Empowerment Workshop"
                width={300}
                height={200}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-800 mb-2">Women Empowerment</h3>
              <p className="text-gray-600">15 women started their own businesses after our vocational training</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Medical Camp"
                width={300}
                height={200}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-800 mb-2">Medical Camp</h3>
              <p className="text-gray-600">Free healthcare provided to 200+ community members this month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews section */}
      <Reviews />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support can transform lives and build a stronger, more united Pakistan. Every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/get-involved">Donate Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/get-involved#volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
