"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CreditCard, Heart, DollarSign, Check, AlertCircle } from "lucide-react"
import Button from "../components/common/Button"
import Input from "../components/common/Input"
import AnimatedSection from "../components/common/AnimatedSection"

const DonationPage = () => {
  const [amount, setAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })
  const [errors, setErrors] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [progress, setProgress] = useState(0)

  const predefinedAmounts = [25, 50, 100, 250]

  const handleAmountSelect = (value) => {
    setAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "")
    setCustomAmount(value)
    if (value) {
      setAmount(Number.parseFloat(value))
    } else {
      setAmount(0)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (paymentMethod === "card") {
      if (!formData.cardNumber) {
        newErrors.cardNumber = "Card number is required"
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
        newErrors.cardNumber = "Card number must be 16 digits"
      }

      if (!formData.expiryDate) {
        newErrors.expiryDate = "Expiry date is required"
      } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = "Expiry date must be in MM/YY format"
      }

      if (!formData.cvv) {
        newErrors.cvv = "CVV is required"
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = "CVV must be 3 or 4 digits"
      }
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (step === 1) {
      if (amount <= 0) {
        setErrors({ amount: "Please select or enter a valid amount" })
        return
      }
      setStep(2)
      return
    }

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Process payment
    setIsProcessing(true)

    // Simulate payment processing with progress bar
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 5
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)
        setIsProcessing(false)
        setIsComplete(true)
      }
    }, 150)
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Make a Donation</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your generosity helps us continue our mission of uplifting communities in need. Every contribution makes a
            difference.
          </p>
        </AnimatedSection>

        {isComplete ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto bg-card rounded-lg shadow-sm border border-border p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Thank You for Your Donation!</h2>
            <p className="text-muted-foreground mb-6">
              Your donation of ${amount.toFixed(2)} has been successfully processed. A receipt has been sent to your
              email.
            </p>
            <div className="space-y-4">
              <Button to="/" variant="outline" className="w-full">
                Return to Home
              </Button>
              <Button to="/impact" className="w-full">
                See Your Impact
              </Button>
            </div>
          </motion.div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    1
                  </div>
                  <div className="ml-2 font-medium">Choose Amount</div>
                </div>
                <div className="flex-grow mx-4 h-1 bg-muted">
                  <div className="h-full bg-primary" style={{ width: step >= 2 ? "100%" : "0%" }} />
                </div>
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    2
                  </div>
                  <div className="ml-2 font-medium">Payment Details</div>
                </div>
              </div>
            </div>

            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-lg shadow-sm border border-border p-6 md:p-8"
            >
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Select Donation Amount</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Donation Type</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div
                          className={`flex items-center p-3 rounded-md border cursor-pointer transition-colors ${
                            donationType === "one-time"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => setDonationType("one-time")}
                        >
                          <div
                            className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center border ${
                              donationType === "one-time" ? "border-primary" : "border-muted-foreground"
                            }`}
                          >
                            {donationType === "one-time" && <div className="w-2 h-2 rounded-full bg-primary" />}
                          </div>
                          <span>One-time</span>
                        </div>
                        <div
                          className={`flex items-center p-3 rounded-md border cursor-pointer transition-colors ${
                            donationType === "monthly"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => setDonationType("monthly")}
                        >
                          <div
                            className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center border ${
                              donationType === "monthly" ? "border-primary" : "border-muted-foreground"
                            }`}
                          >
                            {donationType === "monthly" && <div className="w-2 h-2 rounded-full bg-primary" />}
                          </div>
                          <span>Monthly</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Amount</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {predefinedAmounts.map((presetAmount) => (
                          <button
                            key={presetAmount}
                            type="button"
                            className={`py-3 px-4 rounded-md border text-center transition-colors ${
                              amount === presetAmount && !customAmount
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => handleAmountSelect(presetAmount)}
                          >
                            ${presetAmount}
                          </button>
                        ))}
                      </div>

                      <div className="mt-3 relative">
                        <DollarSign
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                          size={18}
                        />
                        <input
                          type="text"
                          placeholder="Custom Amount"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          className="w-full pl-10 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>

                      {errors.amount && <p className="text-sm text-red-500 mt-1">{errors.amount}</p>}

                      <div className="mt-4 bg-muted rounded-md p-4 flex items-start">
                        <Heart className="text-primary mr-3 mt-0.5 shrink-0" size={18} />
                        <p className="text-sm text-muted-foreground">
                          Your donation of ${amount.toFixed(2)} {donationType === "monthly" ? "per month " : ""}
                          can provide essential resources to communities in need.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button onClick={handleSubmit} className="w-full" disabled={amount <= 0}>
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-xl font-bold mb-6">Payment Details</h2>

                  <div className="bg-muted rounded-md p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Donation Amount:</p>
                        <p className="font-bold text-lg">
                          ${amount.toFixed(2)} {donationType === "monthly" ? "per month" : ""}
                        </p>
                      </div>
                      <Button type="button" variant="ghost" size="sm" onClick={() => setStep(1)}>
                        Edit
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Input
                      label="Full Name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      error={errors.name}
                    />

                    <Input
                      type="email"
                      label="Email Address"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                    />

                    <div>
                      <label className="text-sm font-medium mb-2 block">Payment Method</label>
                      <div className="grid grid-cols-2 gap-3">
                        <div
                          className={`flex items-center p-3 rounded-md border cursor-pointer transition-colors ${
                            paymentMethod === "card"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => setPaymentMethod("card")}
                        >
                          <CreditCard className="mr-2 text-muted-foreground" size={18} />
                          <span>Credit Card</span>
                        </div>
                        <div
                          className={`flex items-center p-3 rounded-md border cursor-pointer transition-colors ${
                            paymentMethod === "paypal"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => setPaymentMethod("paypal")}
                        >
                          <span className="mr-2 font-bold text-blue-600">P</span>
                          <span>PayPal</span>
                        </div>
                      </div>
                    </div>

                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <Input
                          label="Card Number"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          error={errors.cardNumber}
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            label="Expiry Date"
                            name="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            error={errors.expiryDate}
                          />

                          <Input
                            label="CVV"
                            name="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            error={errors.cvv}
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center mt-4">
                      <input
                        id="receipt"
                        name="receipt"
                        type="checkbox"
                        className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                        defaultChecked
                      />
                      <label htmlFor="receipt" className="ml-2 block text-sm text-muted-foreground">
                        Email me a receipt
                      </label>
                    </div>
                  </div>

                  {isProcessing ? (
                    <div className="mt-8 space-y-4">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2 transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <p className="text-center text-muted-foreground">Processing your donation...</p>
                    </div>
                  ) : (
                    <div className="mt-8 space-y-4">
                      <Button type="submit" className="w-full">
                        Complete Donation
                      </Button>

                      <Button type="button" variant="outline" className="w-full" onClick={() => setStep(1)}>
                        Back
                      </Button>

                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center">
                        <AlertCircle size={14} className="mr-1" />
                        Your payment information is secure and encrypted
                      </p>
                    </div>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DonationPage

