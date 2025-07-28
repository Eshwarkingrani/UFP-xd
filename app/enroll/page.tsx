"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Clock, Award, Calendar, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function EnrollPage() {
  const [selectedCourse, setSelectedCourse] = useState("")
  const [selectedSchedule, setSelectedSchedule] = useState("")

  const courses = [
    {
      id: "ms-office",
      category: "Youth Education",
      title: "MS Office Training",
      duration: "3 Months",
      fee: "Free",
      description: "Comprehensive training in Word, Excel, PowerPoint, and professional certification",
      features: ["Word Processing", "Excel & Data Analysis", "PowerPoint Presentations", "Professional Certification"],
      schedule: ["Morning (9 AM - 12 PM)", "Evening (6 PM - 9 PM)", "Weekend (Sat-Sun 10 AM - 2 PM)"],
      image: "/placeholder.svg?height=200&width=300&text=MS+Office",
      instructor: "Elvis - Head of Youth Education",
      seats: "15 seats available",
      startDate: "March 1, 2024",
    },
    {
      id: "freelancing",
      category: "Youth Education",
      title: "Freelancing Skills",
      duration: "4 Months",
      fee: "Free",
      description: "Learn digital marketing, content writing, and client management for online work",
      features: ["Digital Marketing", "Content Writing", "Graphic Design Basics", "Client Management"],
      schedule: ["Morning (10 AM - 1 PM)", "Evening (7 PM - 10 PM)"],
      image: "/placeholder.svg?height=200&width=300&text=Freelancing",
      instructor: "Elvis - Head of Youth Education",
      seats: "12 seats available",
      startDate: "March 15, 2024",
    },
    {
      id: "english",
      category: "Youth Education",
      title: "English Language",
      duration: "6 Months",
      fee: "Free",
      description: "Improve speaking, listening, writing skills and IELTS preparation",
      features: ["Speaking & Listening", "Business English", "Writing Skills", "IELTS Preparation"],
      schedule: ["Morning (8 AM - 10 AM)", "Evening (5 PM - 7 PM)", "Weekend (Sun 2 PM - 5 PM)"],
      image: "/placeholder.svg?height=200&width=300&text=English",
      instructor: "Elvis - Head of Youth Education",
      seats: "20 seats available",
      startDate: "February 20, 2024",
    },
    {
      id: "sewing",
      category: "Women Empowerment",
      title: "Sewing & Tailoring",
      duration: "4 Months",
      fee: "Free",
      description: "Learn professional sewing, pattern making, and fashion design",
      features: ["Basic to Advanced Sewing", "Pattern Making", "Fashion Design", "Business Setup"],
      schedule: ["Morning (9 AM - 12 PM)", "Afternoon (2 PM - 5 PM)"],
      image: "/placeholder.svg?height=200&width=300&text=Sewing",
      instructor: "Safi - Women Empowerment Leader",
      seats: "10 seats available",
      startDate: "March 5, 2024",
    },
    {
      id: "beauty",
      category: "Women Empowerment",
      title: "Beauty Training",
      duration: "3 Months",
      fee: "Free",
      description: "Professional beauty training including hair styling and makeup artistry",
      features: ["Hair Styling", "Makeup Artistry", "Skincare Treatments", "Salon Management"],
      schedule: ["Morning (10 AM - 1 PM)", "Evening (6 PM - 9 PM)"],
      image: "/placeholder.svg?height=200&width=300&text=Beauty",
      instructor: "Safi - Women Empowerment Leader",
      seats: "8 seats available",
      startDate: "February 25, 2024",
    },
    {
      id: "online-skills",
      category: "Women Empowerment",
      title: "Online Skills",
      duration: "3 Months",
      fee: "Free",
      description: "Learn social media marketing, e-commerce, and online teaching",
      features: ["Social Media Marketing", "E-commerce Setup", "Online Teaching", "Digital Payments"],
      schedule: ["Morning (11 AM - 2 PM)", "Evening (7 PM - 10 PM)"],
      image: "/placeholder.svg?height=200&width=300&text=Online+Skills",
      instructor: "Safi - Women Empowerment Leader",
      seats: "15 seats available",
      startDate: "March 10, 2024",
    },
  ]

  const selectedCourseData = courses.find((course) => course.id === selectedCourse)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enroll in Our Courses</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transform your future with our free, professional training programs. All courses include certification and
            job placement support.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Selection */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                  Choose Your Course
                </CardTitle>
                <CardDescription>Select the course that best fits your goals and schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {courses.map((course) => (
                    <Card
                      key={course.id}
                      className={`cursor-pointer transition-all ${
                        selectedCourse === course.id ? "ring-2 ring-green-500 bg-green-50" : "hover:shadow-md"
                      }`}
                      onClick={() => setSelectedCourse(course.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={120}
                            height={80}
                            className="rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <Badge variant="secondary" className="mb-2">
                                  {course.category}
                                </Badge>
                                <h3 className="font-semibold text-lg">{course.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                              </div>
                              <RadioGroup value={selectedCourse} onValueChange={setSelectedCourse}>
                                <RadioGroupItem value={course.id} />
                              </RadioGroup>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {course.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <Award className="h-4 w-4" />
                                {course.fee}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {course.seats}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {course.features.slice(0, 3).map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                              {course.features.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{course.features.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enrollment Form */}
            {selectedCourse && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Enrollment Application</CardTitle>
                  <CardDescription>Complete your enrollment for {selectedCourseData?.title}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <Label className="text-base font-semibold">Personal Information</Label>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <Label htmlFor="first-name">First Name *</Label>
                        <Input id="first-name" placeholder="Enter your first name" required />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Last Name *</Label>
                        <Input id="last-name" placeholder="Enter your last name" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" placeholder="Enter your phone number" required />
                      </div>
                      <div>
                        <Label htmlFor="age">Age *</Label>
                        <Input id="age" type="number" placeholder="Enter your age" required />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="address">Complete Address *</Label>
                      <Textarea id="address" placeholder="Enter your complete address" rows={2} required />
                    </div>
                  </div>

                  {/* Schedule Selection */}
                  <div>
                    <Label className="text-base font-semibold">Preferred Schedule</Label>
                    <RadioGroup value={selectedSchedule} onValueChange={setSelectedSchedule} className="mt-2">
                      {selectedCourseData?.schedule.map((schedule, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <RadioGroupItem value={schedule} id={`schedule-${index}`} />
                          <Label htmlFor={`schedule-${index}`}>{schedule}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Education Background */}
                  <div>
                    <Label className="text-base font-semibold">Education Background</Label>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <Label htmlFor="education">Highest Education *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="primary">Primary School</SelectItem>
                            <SelectItem value="middle">Middle School</SelectItem>
                            <SelectItem value="matric">Matriculation</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                            <SelectItem value="master">Master's Degree</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="experience">Relevant Experience</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No Experience</SelectItem>
                            <SelectItem value="basic">Basic Knowledge</SelectItem>
                            <SelectItem value="intermediate">Some Experience</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Motivation */}
                  <div>
                    <Label htmlFor="motivation">Why do you want to join this course? *</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Tell us about your goals and how this course will help you..."
                      rows={3}
                      required
                    />
                  </div>

                  {/* Emergency Contact */}
                  <div>
                    <Label className="text-base font-semibold">Emergency Contact</Label>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <Label htmlFor="emergency-name">Contact Name *</Label>
                        <Input id="emergency-name" placeholder="Emergency contact name" required />
                      </div>
                      <div>
                        <Label htmlFor="emergency-phone">Contact Phone *</Label>
                        <Input id="emergency-phone" placeholder="Emergency contact phone" required />
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the course terms and conditions, and commit to attending at least 80% of classes
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="updates" />
                      <Label htmlFor="updates" className="text-sm">
                        I agree to receive updates about the course and other Unity Foundation programs
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                    Submit Enrollment Application
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Course Details Sidebar */}
          <div className="space-y-6">
            {selectedCourse && selectedCourseData && (
              <>
                {/* Course Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Course Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-green-600">{selectedCourseData.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{selectedCourseData.description}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span>Duration: {selectedCourseData.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-green-600" />
                        <span>Fee: {selectedCourseData.fee}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-green-600" />
                        <span>Starts: {selectedCourseData.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-green-600" />
                        <span>{selectedCourseData.seats}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">What You'll Learn:</h4>
                      <ul className="text-sm space-y-1">
                        {selectedCourseData.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Instructor Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <Image
                        src={`/placeholder.svg?height=60&width=60&text=${selectedCourseData.instructor.split(" ")[0]}`}
                        alt={selectedCourseData.instructor}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{selectedCourseData.instructor}</h4>
                        <p className="text-sm text-gray-600">Expert trainer with 5+ years experience</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span>+92 21 1234 5678</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-green-600" />
                  <span>courses@unityfoundationpk.org</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span>Visit our office for guidance</span>
                </div>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Success Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600">
                  <p className="mb-2">
                    "The MS Office course helped me get a job at a local company. The training was excellent!" - Ahmed
                    K.
                  </p>
                  <p>
                    "I started my own tailoring business after the sewing course. Now I support my family." - Fatima S.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
