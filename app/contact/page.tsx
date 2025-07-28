import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageSquare, Facebook, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us. We're here to answer your questions and help you get involved.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                        <SelectItem value="donation">Donation Information</SelectItem>
                        <SelectItem value="partnership">Partnership/Sponsorship</SelectItem>
                        <SelectItem value="programs">Program Information</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." rows={5} required />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're always happy to hear from supporters, volunteers, and community members. Reach out to us through
                  any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Our Address</h3>
                        <p className="text-gray-600">
                          Unity Foundation Pakistan
                          <br />
                          123 Main Street, Block A<br />
                          Gulshan-e-Iqbal, Karachi
                          <br />
                          Sindh, Pakistan 75300
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Phone Numbers</h3>
                        <p className="text-gray-600">
                          Main Office: +92 21 1234 5678
                          <br />
                          WhatsApp: +92 300 1234567
                          <br />
                          Emergency: +92 21 8765 4321
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Email Addresses</h3>
                        <p className="text-gray-600">
                          General: info@unityfoundationpk.org
                          <br />
                          Donations: donate@unityfoundationpk.org
                          <br />
                          Volunteers: volunteer@unityfoundationpk.org
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                          <br />
                          <span className="text-sm text-green-600">Emergency services available 24/7</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Find Us</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Visit Our Office</h3>
              <p className="text-gray-600 mb-6">
                Our office is located in the heart of Karachi, easily accessible by public transport. We welcome
                visitors during office hours and encourage you to schedule an appointment for a guided tour of our
                facilities.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">5 minutes walk from Gulshan-e-Iqbal Metro Station</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Call ahead to schedule a facility tour</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Visitor hours: Monday-Friday 10 AM - 5 PM</span>
                </div>
              </div>

              <Button className="mt-6 bg-green-600 hover:bg-green-700">Schedule a Visit</Button>
            </div>

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>Interactive Map</p>
                <p className="text-sm">Google Maps integration would be placed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & WhatsApp */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Connect With Us</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm mb-4">Quick questions and updates</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Facebook className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Facebook</h3>
                <p className="text-gray-600 text-sm mb-4">Daily updates and community</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Follow Us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Instagram</h3>
                <p className="text-gray-600 text-sm mb-4">Visual stories and behind-the-scenes</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Follow Us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">LinkedIn</h3>
                <p className="text-gray-600 text-sm mb-4">Professional updates and partnerships</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Connect
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Quick Answers</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Common questions and quick answers. For more detailed information, please contact us directly.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">How can I volunteer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Fill out our volunteer form on the "Get Involved" page or contact us directly. We'll match your skills
                  with our current needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">How do I make a donation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  You can donate online, via bank transfer, or through mobile payment. Visit our "Get Involved" page for
                  all donation options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Can I visit your facilities?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Yes! We welcome visitors during office hours. Please call ahead to schedule a tour of our facilities
                  and programs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">How do I enroll in programs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Contact us directly or visit our office. We'll assess your needs and help you enroll in the most
                  suitable program.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-t-4 border-red-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-4">Emergency Contact</h2>
          <p className="text-red-700 mb-6">For urgent matters related to our care facilities or emergency situations</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700">
              <Phone className="h-4 w-4 mr-2" />
              Call Emergency Line: +92 21 8765 4321
            </Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
              <MessageSquare className="h-4 w-4 mr-2" />
              WhatsApp: +92 300 1234567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
