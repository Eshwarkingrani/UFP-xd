"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Heart, CreditCard, Building, Smartphone, Shield, Users, GraduationCap, HandHeart } from "lucide-react"
import Image from "next/image"

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [showPopup, setShowPopup] = useState(false)

  const predefinedAmounts = [
    { amount: "50", impact: "School supplies for 5 children" },
    { amount: "100", impact: "One month vocational training for a woman" },
    { amount: "200", impact: "Monthly care for an elderly person" },
    { amount: "500", impact: "Complete MS Office course for 10 students" },
    { amount: "1000", impact: "Medical camp for 100+ people" },
    { amount: "2000", impact: "Sponsor a child's education for 6 months" },
  ]

  const programs = [
    {
      id: "youth-education",
      name: "Youth Education & Skills",
      icon: GraduationCap,
      description: "Support youth training programs",
      color: "green",
    },
    {
      id: "women-empowerment",
      name: "Women Empowerment",
      icon: Users,
      description: "Empower women through vocational training",
      color: "blue",
    },
    {
      id: "elderly-care",
      name: "Orphanage & Elderly Care",
      icon: Heart,
      description: "Provide care for vulnerable individuals",
      color: "green",
    },
    {
      id: "community-outreach",
      name: "Community Outreach",
      icon: HandHeart,
      description: "Support community health programs",
      color: "blue",
    },
  ]

  const finalAmount = customAmount || selectedAmount

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Donation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your generosity transforms lives. Choose how you'd like to make a difference today.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  Complete Your Donation
                </CardTitle>
                <CardDescription>Every contribution makes a meaningful impact in someone's life</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Donation Type */}
                <div>
                  <Label className="text-base font-semibold">Donation Type</Label>
                  <RadioGroup value={donationType} onValueChange={setDonationType} className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time">One-time donation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Monthly donation</Label>
                      <Badge variant="secondary" className="ml-2">
                        More Impact
                      </Badge>
                    </div>
                  </RadioGroup>
                </div>

                {/* Program Selection */}
                <div>
                  <Label className="text-base font-semibold">Choose a Program to Support</Label>
                  <div className="grid md:grid-cols-2 gap-3 mt-2">
                    {programs.map((program) => (
                      <Card key={program.id} className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                program.color === "green" ? "bg-green-100" : "bg-blue-100"
                              }`}
                            >
                              <program.icon
                                className={`h-5 w-5 ${program.color === "green" ? "text-green-600" : "text-blue-600"}`}
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm">{program.name}</h4>
                              <p className="text-xs text-gray-600">{program.description}</p>
                            </div>
                            <Checkbox />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label className="text-base font-semibold">Select Amount (PKR)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {predefinedAmounts.map((item) => (
                      <Card
                        key={item.amount}
                        className={`cursor-pointer transition-all ${
                          selectedAmount === item.amount ? "ring-2 ring-green-500 bg-green-50" : "hover:shadow-md"
                        }`}
                        onClick={() => {
                          setSelectedAmount(item.amount)
                          setCustomAmount("")
                        }}
                      >
                        <CardContent className="p-4 text-center">
                          <div className="text-xl font-bold text-green-600">PKR {item.amount}</div>
                          <div className="text-xs text-gray-600 mt-1">{item.impact}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="custom-amount">Or enter custom amount</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter amount in PKR"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setSelectedAmount("")
                      }}
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <Label className="text-base font-semibold">Payment Method</Label>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2">
                    <Card className="p-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                          <CreditCard className="h-4 w-4 text-blue-600" />
                          Credit/Debit Card
                        </Label>
                      </div>
                      {paymentMethod === "card" && (
                        <div className="mt-4 space-y-3">
                          <div>
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input id="card-number" placeholder="1234 5678 9012 3456" />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" />
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer">
                          <Building className="h-4 w-4 text-green-600" />
                          Bank Transfer
                        </Label>
                      </div>
                      {paymentMethod === "bank" && (
                        <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm">
                          <p className="font-semibold mb-2">Bank Details:</p>
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
                      )}
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mobile" id="mobile" />
                        <Label htmlFor="mobile" className="flex items-center gap-2 cursor-pointer">
                          <Smartphone className="h-4 w-4 text-purple-600" />
                          Mobile Payment (JazzCash/EasyPaisa)
                        </Label>
                      </div>
                      {paymentMethod === "mobile" && (
                        <div className="mt-4 space-y-3">
                          <div>
                            <Label htmlFor="mobile-number">Mobile Number</Label>
                            <Input id="mobile-number" placeholder="03XX XXXXXXX" />
                          </div>
                          <div className="flex items-center gap-4">
                            <Image
                              src="/placeholder.svg?height=100&width=100&text=QR"
                              alt="Payment QR Code"
                              width={80}
                              height={80}
                              className="border rounded"
                            />
                            <div className="text-sm text-gray-600">
                              <p className="font-semibold mb-1">Scan QR Code:</p>
                              <p>• JazzCash: 03XX XXXXXXX</p>
                              <p>• EasyPaisa: 03XX XXXXXXX</p>
                              <p>• Bank Alfalah: 03XX XXXXXXX</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                  </RadioGroup>
                </div>

                {/* Donor Information */}
                <div>
                  <Label className="text-base font-semibold">Donor Information</Label>
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="address">Address (Optional)</Label>
                    <Textarea id="address" placeholder="Enter your address for tax receipt" rows={2} />
                  </div>
                </div>

                {/* Special Message */}
                <div>
                  <Label htmlFor="message">Special Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Leave a message of hope or dedication..."
                    rows={3}
                    className="mt-1"
                  />
                </div>

                {/* Terms and Privacy */}
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-green-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-green-600 hover:underline">
                      Privacy Policy
                    </a>
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                  disabled={!finalAmount || !paymentMethod}
                  onClick={() => setShowPopup(true)}
                >
                  <Shield className="h-5 w-5 mr-2" />
                  Donate PKR {finalAmount || "0"} Securely
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Donation Summary & Trust Indicators */}
          <div className="space-y-6">
            {/* Donation Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Donation Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Donation Amount:</span>
                    <span className="font-semibold">PKR {finalAmount || "0"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee:</span>
                    <span className="text-green-600">PKR 0 (We cover it!)</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total:</span>
                    <span>PKR {finalAmount || "0"}</span>
                  </div>
                  {donationType === "monthly" && (
                    <p className="text-sm text-gray-600 mt-2">
                      This amount will be charged monthly. You can cancel anytime.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Why Donate With Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">100% Secure</h4>
                    <p className="text-xs text-gray-600">SSL encrypted payments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Direct Impact</h4>
                    <p className="text-xs text-gray-600">95% goes directly to programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Tax Deductible</h4>
                    <p className="text-xs text-gray-600">Official receipt provided</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Donations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Anonymous donated</span>
                    <span className="font-semibold">PKR 500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ahmed K. donated</span>
                    <span className="font-semibold">PKR 200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fatima S. donated</span>
                    <span className="font-semibold">PKR 1000</span>
                  </div>
                  <div className="text-center pt-2 border-t">
                    <p className="text-xs text-gray-600">Join 500+ donors this month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Thank You for Your Interest!</h3>
              <p className="text-gray-600 mb-6">
                We will contact you as soon as possible to complete your donation process. Your generosity means the
                world to us!
              </p>
              <Button onClick={() => setShowPopup(false)} className="bg-green-600 hover:bg-green-700">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
