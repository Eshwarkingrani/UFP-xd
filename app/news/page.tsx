import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, MapPin } from "lucide-react"
import Image from "next/image"

export default function NewsPage() {
  const upcomingEvents = [
    {
      title: "Free Medical Camp - Karachi",
      date: "2024-02-15",
      time: "9:00 AM - 4:00 PM",
      location: "Community Center, Gulshan-e-Iqbal",
      description: "Free health checkups, consultations, and basic treatments for the community",
      image: "/placeholder.svg?height=200&width=300",
      category: "Medical Camp",
    },
    {
      title: "Women Empowerment Workshop",
      date: "2024-02-20",
      time: "10:00 AM - 2:00 PM",
      location: "Unity Foundation Center",
      description: "Business skills and entrepreneurship workshop for women",
      image: "/placeholder.svg?height=200&width=300",
      category: "Workshop",
    },
    {
      title: "Youth Skills Fair",
      date: "2024-02-25",
      time: "11:00 AM - 5:00 PM",
      location: "Local University Campus",
      description: "Showcase of student projects and skills training opportunities",
      image: "/placeholder.svg?height=200&width=300",
      category: "Event",
    },
    {
      title: "Monthly Donation Drive",
      date: "2024-03-01",
      time: "All Day",
      location: "Multiple Locations",
      description: "Community donation drive for orphanage and elderly care supplies",
      image: "/placeholder.svg?height=200&width=300",
      category: "Fundraising",
    },
  ]

  const newsUpdates = [
    {
      title: "25 Students Graduate from MS Office Training Program",
      date: "2024-01-28",
      excerpt:
        "Another successful batch of students completed their comprehensive MS Office training, with 90% securing employment within two weeks of graduation.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Education",
      readTime: "3 min read",
    },
    {
      title: "New Partnership with Local Healthcare Providers",
      date: "2024-01-25",
      excerpt:
        "Unity Foundation announces strategic partnership with three local hospitals to provide better healthcare services for our elderly care residents.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Partnership",
      readTime: "2 min read",
    },
    {
      title: "Women's Sewing Cooperative Launches First Product Line",
      date: "2024-01-22",
      excerpt:
        "15 women who completed our sewing program have formed a cooperative and launched their first collection of traditional Pakistani clothing.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Success Story",
      readTime: "4 min read",
    },
    {
      title: "Mental Health Awareness Campaign Reaches 1000+ People",
      date: "2024-01-20",
      excerpt:
        "Our month-long mental health awareness campaign successfully reached over 1000 community members across Karachi and Lahore.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Community",
      readTime: "3 min read",
    },
    {
      title: "New Computer Lab Opens at Youth Training Center",
      date: "2024-01-18",
      excerpt:
        "Thanks to generous donations, we've opened a state-of-the-art computer lab with 20 new computers for our youth education programs.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Infrastructure",
      readTime: "2 min read",
    },
    {
      title: "Annual Impact Report 2023 Released",
      date: "2024-01-15",
      excerpt:
        "Our comprehensive annual report shows significant growth in all programs, with 500+ lives directly impacted in 2023.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Report",
      readTime: "5 min read",
    },
  ]

  const monthlyReports = [
    {
      month: "January 2024",
      highlights: [
        "50 new students enrolled in various programs",
        "3 medical camps conducted serving 300+ patients",
        "15 women completed vocational training",
        "2 new corporate partnerships established",
      ],
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      month: "December 2023",
      highlights: [
        "Year-end graduation ceremony for 75 students",
        "Holiday celebration for orphanage children",
        "Winter clothing drive collected 500+ items",
        "Mental health workshops reached 200+ people",
      ],
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      month: "November 2023",
      highlights: [
        "Women's entrepreneurship fair showcased 25 businesses",
        "Free eye checkup camp for elderly residents",
        "Youth career counseling sessions for 100+ students",
        "Community awareness session on child rights",
      ],
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with our latest activities, upcoming events, and impact stories
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Upcoming Events</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 left-2 bg-green-600">{event.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-green-600" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Register / Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Latest News & Updates</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {newsUpdates.map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 left-2 bg-blue-600">{news.category}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{new Date(news.date).toLocaleDateString()}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {news.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-gray-800 line-clamp-2">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Read Full Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All News Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Monthly Reports */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Monthly Impact Reports</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Regular updates on our programs, achievements, and community impact
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {monthlyReports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-gray-800">{report.month}</CardTitle>
                    <Image
                      src={report.image || "/placeholder.svg"}
                      alt={`${report.month} Report`}
                      width={60}
                      height={45}
                      className="rounded"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {report.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                    Download Full Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive regular updates about our programs, events, and impact stories
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded-lg text-gray-800"
              />
              <Button className="bg-white text-green-600 hover:bg-gray-100">Subscribe</Button>
            </div>
            <p className="text-sm mt-2 opacity-90">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Follow Us on Social Media</h2>
          <p className="text-center text-gray-600 mb-12">
            Get real-time updates and behind-the-scenes content from our social media channels
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Facebook</h3>
                <p className="text-gray-600 text-sm mb-4">Daily updates, event photos, and community stories</p>
                <Button variant="outline" size="sm">
                  Follow Us
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Instagram</h3>
                <p className="text-gray-600 text-sm mb-4">Visual stories and behind-the-scenes content</p>
                <Button variant="outline" size="sm">
                  Follow Us
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">LinkedIn</h3>
                <p className="text-gray-600 text-sm mb-4">Professional updates and partnership announcements</p>
                <Button variant="outline" size="sm">
                  Connect
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
