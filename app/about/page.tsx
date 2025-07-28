import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Target, Users, Heart, GraduationCap, HandHeart } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Elvis",
      role: "Head of Youth Education & Skill Development",
      image: "/placeholder.svg?height=200&width=200&text=Elvis",
      description:
        "Leading our youth education programs and overseeing skill development initiatives across all training centers",
    },
    {
      name: "Obrien",
      role: "Operations & Logistics Head",
      image: "/placeholder.svg?height=200&width=200&text=Obrien",
      description: "Managing daily operations and coordinating logistics for all foundation programs and activities",
    },
    {
      name: "Eshwar",
      role: "Finance, Donations & Sponsorship Manager",
      image: "/placeholder.svg?height=200&width=200&text=Eshwar",
      description: "Overseeing financial management, donor relations, and corporate sponsorship partnerships",
    },
    {
      name: "Arslan",
      role: "Orphanage & Elderly Care Coordinator",
      image: "/placeholder.svg?height=200&width=200&text=Arslan",
      description:
        "Coordinating comprehensive care services for orphaned children and elderly residents in our facilities",
    },
    {
      name: "Yogesh",
      role: "Women Empowerment & Vocational Training Leader",
      image: "/placeholder.svg?height=200&width=200&text=Yogesh",
      description: "Leading women empowerment initiatives and managing all vocational training programs for women",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Unity Foundation Pakistan</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Dedicated to creating lasting change through education, empowerment, and compassionate care
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-green-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-600">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To create a Pakistan where every individual, regardless of their background, has access to quality
                  education, skills development, and compassionate care. We envision a society where unity, empowerment,
                  and hope drive sustainable development and social progress.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower lives through comprehensive education programs, vocational training, women empowerment
                  initiatives, and dedicated care for orphans and elderly. We strive to build stronger communities by
                  providing opportunities, fostering skills, and creating sustainable pathways to prosperity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach - 4 Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Approach</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our work is built on four fundamental pillars that guide everything we do
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Education First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe education is the foundation of empowerment. Our programs focus on practical skills and
                  knowledge that create real opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Community Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We work closely with local communities to understand their needs and develop programs that create
                  lasting, sustainable impact.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Compassionate Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every individual deserves dignity and care. We provide comprehensive support for the most vulnerable
                  members of our society.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Sustainable Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We focus on creating long-term solutions that empower individuals and communities to become
                  self-sufficient and thrive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Dedicated professionals working together to create positive change in Pakistan
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                  />
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">Unity</h3>
              <p>Bringing people together across all backgrounds to work towards common goals</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p>Operating with transparency, honesty, and accountability in all our actions</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
              <p>Providing tools, skills, and opportunities for individuals to transform their lives</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
