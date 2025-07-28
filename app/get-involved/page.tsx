import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, Users, CreditCard, QrCode, Building, HelpCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us in creating positive change. Every contribution, big or small, makes a difference.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Ways to Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Donate</CardTitle>
                <CardDescription>
                  Your financial support helps us expand our programs and reach more people in need
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Volunteer</CardTitle>
                <CardDescription>
                  Share your time and skills to directly impact the lives of those we serve
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="#volunteer">Become a Volunteer</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Sponsor</CardTitle>
                <CardDescription>Partner with us through corporate sponsorship or program funding</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <a href="#sponsor">Learn About Sponsorship</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Make a Donation</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Your Impact</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">PKR 50</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Provides school supplies for 5 children</h4>
                    <p className="text-gray-600">Books, notebooks, and learning materials</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">PKR 100</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Sponsors a woman's vocational training</h4>
                    <p className="text-gray-600">Complete sewing or beauty course</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">PKR 200</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Covers monthly care for an elderly person</h4>
                    <p className="text-gray-600">Food, medicine, and care services</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Donation Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-green-600" />
                    Online Payment
                  </h4>
                  <p className="text-gray-600 mb-4">Secure online donations through our payment gateway</p>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/donate">Donate Online</Link>
                  </Button>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    Bank Transfer
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg text-sm">
                    <p>
                      <strong>Bank:</strong> Allied Bank Limited
                    </p>
                    <p>
                      <strong>Account Title:</strong> Unity Foundation Pakistan
                    </p>
                    <p>
                      <strong>Account Number:</strong> 1234567890
                    </p>
                    <p>
                      <strong>IBAN:</strong> PK12ABCD1234567890
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <QrCode className="h-5 w-5 text-green-600" />
                    Mobile Payment
                  </h4>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="QR Code for Donations"
                      width={100}
                      height={100}
                      className="border rounded"
                    />
                    <div className="text-sm text-gray-600">
                      <p>Scan QR code for:</p>
                      <p>• JazzCash</p>
                      <p>• EasyPaisa</p>
                      <p>• Bank Alfalah</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Become a Volunteer</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Why Volunteer With Us?</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Make a Real Impact</h4>
                    <p className="text-gray-600">Directly contribute to changing lives in your community</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Develop New Skills</h4>
                    <p className="text-gray-600">Gain valuable experience in nonprofit work and community service</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Flexible Commitment</h4>
                    <p className="text-gray-600">Choose volunteer opportunities that fit your schedule</p>
                  </div>
                </div>
              </div>

              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Volunteers at work"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Volunteer Application Form</CardTitle>
                <CardDescription>Fill out this form to join our volunteer team</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <Label htmlFor="interest">Area of Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">Youth Education</SelectItem>
                        <SelectItem value="women">Women Empowerment</SelectItem>
                        <SelectItem value="care">Orphanage & Elderly Care</SelectItem>
                        <SelectItem value="outreach">Community Outreach</SelectItem>
                        <SelectItem value="admin">Administrative Support</SelectItem>
                        <SelectItem value="fundraising">Fundraising</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Weekdays</SelectItem>
                        <SelectItem value="weekends">Weekends</SelectItem>
                        <SelectItem value="evenings">Evenings</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="experience">Previous Experience (Optional)</Label>
                    <Textarea id="experience" placeholder="Tell us about any relevant experience or skills" rows={3} />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section id="sponsor" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Sponsorship Opportunities</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Program Sponsorship</CardTitle>
                <CardDescription>Sponsor entire programs or specific courses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• Youth Education Programs</li>
                  <li>• Women Empowerment Courses</li>
                  <li>• Community Outreach Events</li>
                  <li>• Skills Training Workshops</li>
                </ul>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Benefits:</strong> Brand visibility, impact reports, recognition
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Facility Sponsorship</CardTitle>
                <CardDescription>Support our infrastructure and facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• Classroom Equipment</li>
                  <li>• Computer Labs</li>
                  <li>• Care Facility Upgrades</li>
                  <li>• Medical Equipment</li>
                </ul>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Benefits:</strong> Naming rights, plaques, media coverage
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Event Sponsorship</CardTitle>
                <CardDescription>Partner with us for special events and campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• Annual Fundraising Gala</li>
                  <li>• Medical Camps</li>
                  <li>• Awareness Campaigns</li>
                  <li>• Graduation Ceremonies</li>
                </ul>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Benefits:</strong> Event branding, networking, CSR recognition
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Interested in becoming a sponsor? Let's discuss how we can work together.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Contact Us for Sponsorship
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <HelpCircle className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How can I be sure my donation is being used effectively?</AccordionTrigger>
                <AccordionContent>
                  We provide regular impact reports to all donors, showing exactly how funds are used. We maintain
                  complete transparency with financial statements and program outcomes. You can also visit our
                  facilities to see the impact firsthand.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What are the requirements to become a volunteer?</AccordionTrigger>
                <AccordionContent>
                  We welcome volunteers from all backgrounds. Basic requirements include being 18+ years old, having a
                  genuine desire to help, and committing to at least 4 hours per month. Some specialized roles may
                  require specific skills or experience, which we'll discuss during the application process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I sponsor a specific child or elderly person?</AccordionTrigger>
                <AccordionContent>
                  Yes! We offer individual sponsorship programs where you can directly support a child's education or an
                  elderly person's care. Sponsors receive regular updates, photos, and can even arrange visits (with
                  proper coordination). Monthly sponsorship starts from PKR 50 for children and PKR 100 for elderly
                  care.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I know if my skills are needed as a volunteer?</AccordionTrigger>
                <AccordionContent>
                  We need volunteers with diverse skills! Whether you're a teacher, healthcare professional, IT expert,
                  or simply someone who cares, there's a place for you. Fill out our volunteer form, and we'll match
                  your skills with our current needs. We also provide training for specific roles.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Are donations tax-deductible?</AccordionTrigger>
                <AccordionContent>
                  Yes, Unity Foundation Pakistan is a registered non-profit organization. All donations are
                  tax-deductible under Pakistani tax law. We provide official receipts for all donations, which you can
                  use for tax purposes. For international donors, please consult your local tax advisor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>How can my company get involved in corporate social responsibility?</AccordionTrigger>
                <AccordionContent>
                  We offer various CSR partnership opportunities including program sponsorship, employee volunteer
                  programs, skill-based volunteering, and joint community initiatives. We can customize partnerships to
                  align with your company's values and CSR goals. Contact us to discuss specific opportunities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every action, no matter how small, contributes to building a better Pakistan. Join us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
