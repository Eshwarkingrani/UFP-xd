import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Reviews() {
  const reviews = [
    {
      name: "Fatima Ahmed",
      program: "Sewing & Tailoring",
      rating: 5,
      review:
        "The sewing course completely changed my life. The instructors were patient and skilled. I now run my own tailoring business and support my family. Unity Foundation gave me hope and skills.",
      image: "/placeholder.svg?height=60&width=60&text=Fatima",
      date: "2 months ago",
      verified: true,
    },
    {
      name: "Muhammad Ali",
      program: "MS Office Training",
      rating: 5,
      review:
        "Excellent training program! I learned Word, Excel, and PowerPoint professionally. Got a job within 3 weeks of completing the course. The certificate is recognized by employers.",
      image: "/placeholder.svg?height=60&width=60&text=Ali",
      date: "1 month ago",
      verified: true,
    },
    {
      name: "Aisha Khan",
      program: "Beauty Training",
      rating: 5,
      review:
        "Amazing experience! The beauty course covered everything from basic makeup to advanced techniques. I opened my own salon and now train other women. Highly recommended!",
      image: "/placeholder.svg?height=60&width=60&text=Aisha",
      date: "3 weeks ago",
      verified: true,
    },
    {
      name: "Hassan Malik",
      program: "Freelancing Skills",
      rating: 5,
      review:
        "The freelancing course taught me digital marketing and client management. I'm now earning $400+ monthly working with international clients. Best decision of my life!",
      image: "/placeholder.svg?height=60&width=60&text=Hassan",
      date: "1 month ago",
      verified: true,
    },
    {
      name: "Zainab Hussain",
      program: "English Language",
      rating: 5,
      review:
        "My English improved dramatically. The teachers were native speakers and very supportive. I can now communicate confidently in my job. The IELTS preparation was excellent too.",
      image: "/placeholder.svg?height=60&width=60&text=Zainab",
      date: "2 weeks ago",
      verified: true,
    },
    {
      name: "Omar Sheikh",
      program: "Youth Education",
      rating: 5,
      review:
        "Unity Foundation provided me with career guidance and skills training when I needed it most. The staff genuinely cares about students' success. Forever grateful!",
      image: "/placeholder.svg?height=60&width=60&text=Omar",
      date: "1 week ago",
      verified: true,
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real reviews from real people whose lives have been transformed through our programs
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-sm text-gray-600">4.9/5 from 200+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-800">{review.name}</h4>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{review.program}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>

                <div className="relative">
                  <Quote className="h-4 w-4 text-green-600 mb-2" />
                  <p className="text-gray-700 text-sm leading-relaxed italic">"{review.review}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Share Your Experience</h3>
            <p className="text-gray-600 mb-6">
              Have you completed one of our programs? We'd love to hear about your experience and how it impacted your
              life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Write a Review
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
