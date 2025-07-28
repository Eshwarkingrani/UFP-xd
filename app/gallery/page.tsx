import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Quote } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const galleryItems = [
    {
      category: "Youth Education",
      title: "MS Office Training Graduation",
      image: "/placeholder.svg?height=300&width=400",
      description: "25 students completed their MS Office certification",
    },
    {
      category: "Women Empowerment",
      title: "Sewing Workshop Success",
      image: "/placeholder.svg?height=300&width=400",
      description: "Women learning valuable tailoring skills",
    },
    {
      category: "Community Outreach",
      title: "Free Medical Camp",
      image: "/placeholder.svg?height=300&width=400",
      description: "200+ people received free healthcare",
    },
    {
      category: "Elderly Care",
      title: "Daily Care Activities",
      image: "/placeholder.svg?height=300&width=400",
      description: "Providing compassionate care and companionship",
    },
    {
      category: "Youth Education",
      title: "English Language Class",
      image: "/placeholder.svg?height=300&width=400",
      description: "Interactive English learning sessions",
    },
    {
      category: "Women Empowerment",
      title: "Beauty Training Course",
      image: "/placeholder.svg?height=300&width=400",
      description: "Professional beauty and makeup training",
    },
    {
      category: "Orphanage",
      title: "Children's Study Time",
      image: "/placeholder.svg?height=300&width=400",
      description: "Educational support for orphaned children",
    },
    {
      category: "Community Outreach",
      title: "Mental Health Workshop",
      image: "/placeholder.svg?height=300&width=400",
      description: "Raising awareness about mental health",
    },
  ]

  const successStories = [
    {
      name: "Fatima Ahmed",
      program: "Women Empowerment - Sewing",
      story:
        "After completing the sewing course, I started my own tailoring business from home. Now I support my family and have employed two other women from my neighborhood.",
      image: "/placeholder.svg?height=200&width=200",
      outcome: "Started successful tailoring business",
    },
    {
      name: "Muhammad Ali",
      program: "Youth Education - Freelancing",
      story:
        "The freelancing course changed my life. I learned digital marketing and now work with international clients. I've been able to support my family and continue my education.",
      image: "/placeholder.svg?height=200&width=200",
      outcome: "Earning $500+ monthly from freelancing",
    },
    {
      name: "Aisha Khan",
      program: "Women Empowerment - Beauty Training",
      story:
        "I was a housewife with no income. After the beauty training, I opened a small salon in my area. My confidence and financial independence have completely transformed.",
      image: "/placeholder.svg?height=200&width=200",
      outcome: "Opened successful beauty salon",
    },
  ]

  const videoTestimonials = [
    {
      title: "Fatima's Success Story",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "2:30",
    },
    {
      title: "Youth Training Program Impact",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "3:15",
    },
    {
      title: "Community Medical Camp",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "1:45",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery & Impact Stories</h1>
          <p className="text-xl max-w-3xl mx-auto">
            See the real impact of our work through photos, stories, and testimonials from those whose lives have been
            transformed
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Photo Gallery</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-white text-gray-800" variant="secondary">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Success Stories</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Real stories from real people whose lives have been transformed through our programs
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{story.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {story.program}
                      </Badge>
                    </div>
                  </div>

                  <div className="relative mb-4">
                    <Quote className="h-6 w-6 text-green-600 mb-2" />
                    <p className="text-gray-700 italic leading-relaxed">"{story.story}"</p>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">Impact: {story.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Video Testimonials</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Button size="lg" className="rounded-full bg-white text-gray-800 hover:bg-gray-100">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <Badge className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white">
                    {video.duration}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-lg">Lives Transformed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-lg">Courses Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-lg">Women Empowered</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-lg">Children Cared For</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Be Part of Our Next Success Story</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your support can help us create more success stories and transform more lives in Pakistan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Support Our Mission
            </Button>
            <Button variant="outline" size="lg">
              Share Your Story
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
