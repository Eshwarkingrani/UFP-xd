import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Heart, HandHeart, Clock, Award, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive programs designed to empower individuals and strengthen communities
          </p>
        </div>
      </section>

      {/* Youth Education & Courses */}
      <section id="youth-education" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Youth Education & Courses</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Empowering young people with practical skills and knowledge that open doors to better opportunities. Our
                comprehensive education programs focus on modern, in-demand skills that prepare youth for the digital
                economy.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Flexible Schedules</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Certified Courses</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Small Class Sizes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Job Placement Support</span>
                </div>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Youth Education Program"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">MS Office Training</CardTitle>
                <Badge variant="secondary">3 Months</Badge>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Word Processing</li>
                  <li>• Excel & Data Analysis</li>
                  <li>• PowerPoint Presentations</li>
                  <li>• Professional Certification</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Freelancing Skills</CardTitle>
                <Badge variant="secondary">4 Months</Badge>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Digital Marketing</li>
                  <li>• Content Writing</li>
                  <li>• Graphic Design Basics</li>
                  <li>• Client Management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">English Language</CardTitle>
                <Badge variant="secondary">6 Months</Badge>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Speaking & Listening</li>
                  <li>• Business English</li>
                  <li>• Writing Skills</li>
                  <li>• IELTS Preparation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Career Guidance</CardTitle>
                <Badge variant="secondary">Ongoing</Badge>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Resume Building</li>
                  <li>• Interview Preparation</li>
                  <li>• Job Search Strategies</li>
                  <li>• Networking Skills</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Women Empowerment */}
      <section id="women-empowerment" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Women Empowerment & Vocational Training</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Women Empowerment Program"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Empowering women through skills-based training and business development support. Our programs are
                designed to help women achieve financial independence and contribute meaningfully to their families and
                communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Skills Training</h4>
                    <p className="text-gray-600">Comprehensive vocational training in high-demand skills</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Business Support</h4>
                    <p className="text-gray-600">Guidance on starting and managing small businesses</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ongoing Mentorship</h4>
                    <p className="text-gray-600">Continued support and guidance for sustainable success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Sewing & Tailoring</CardTitle>
                <Badge variant="secondary">4 Months</Badge>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Basic to Advanced Sewing</li>
                  <li>• Pattern Making</li>
                  <li>• Fashion Design</li>
                  <li>• Business Setup</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Beauty Training</CardTitle>
                <Badge variant="secondary">3 Months</Badge>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hair Styling</li>
                  <li>• Makeup Artistry</li>
                  <li>• Skincare Treatments</li>
                  <li>• Salon Management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Online Skills</CardTitle>
                <Badge variant="secondary">3 Months</Badge>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Social Media Marketing</li>
                  <li>• E-commerce Setup</li>
                  <li>• Online Teaching</li>
                  <li>• Digital Payments</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Business Startup</CardTitle>
                <Badge variant="secondary">2 Months</Badge>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Business Planning</li>
                  <li>• Financial Management</li>
                  <li>• Marketing Strategies</li>
                  <li>• Legal Requirements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Orphanage & Elderly Care */}
      <section id="care" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Heart className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Orphanage & Elderly Care</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Providing comprehensive care, love, and support for orphaned children and elderly individuals. Our
                facilities offer a safe, nurturing environment where residents receive quality care, education, and the
                dignity they deserve.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">For Children</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Safe Housing</li>
                    <li>• Quality Education</li>
                    <li>• Healthcare</li>
                    <li>• Emotional Support</li>
                    <li>• Skill Development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">For Elderly</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 24/7 Medical Care</li>
                    <li>• Nutritious Meals</li>
                    <li>• Social Activities</li>
                    <li>• Physical Therapy</li>
                    <li>• Companionship</li>
                  </ul>
                </div>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Care Facility"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Daily Routine Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Morning exercises and meditation</li>
                  <li>• Educational activities for children</li>
                  <li>• Recreational programs</li>
                  <li>• Arts and crafts sessions</li>
                  <li>• Evening community time</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Healthcare Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Regular health checkups</li>
                  <li>• Medication management</li>
                  <li>• Emergency medical care</li>
                  <li>• Mental health support</li>
                  <li>• Specialized treatments</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Educational Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• School enrollment assistance</li>
                  <li>• Homework and tutoring</li>
                  <li>• Skill development programs</li>
                  <li>• Career guidance</li>
                  <li>• Higher education support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <section id="outreach" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <HandHeart className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Community Outreach</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Community Outreach"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Extending our impact beyond our facilities through community-based programs. We organize regular
                outreach activities to address health, education, and social needs in underserved communities.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Join Our Next Outreach</Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Medical Camps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Free health checkups</li>
                  <li>• Basic treatments</li>
                  <li>• Health education</li>
                  <li>• Vaccination drives</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Mental Health Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Stress management</li>
                  <li>• Counseling sessions</li>
                  <li>• Support groups</li>
                  <li>• Awareness programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Awareness Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Health & hygiene</li>
                  <li>• Women's rights</li>
                  <li>• Child protection</li>
                  <li>• Environmental issues</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Community Events</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Educational seminars</li>
                  <li>• Skill demonstrations</li>
                  <li>• Cultural programs</li>
                  <li>• Fundraising events</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in transforming lives through our comprehensive programs. Your support can create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/get-involved">Support Our Programs</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
