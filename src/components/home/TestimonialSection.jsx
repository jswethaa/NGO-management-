"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import AnimatedSection from "../common/AnimatedSection"

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Working with Upliftly has been one of the most rewarding experiences of my life. The impact we've made together on communities is truly inspiring.",
      author: "Sarah Johnson",
      role: "Volunteer, 3 years",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      quote:
        "As a donor, I've seen firsthand how Upliftly transforms every contribution into meaningful change. Their transparency and effectiveness are unmatched.",
      author: "Michael Chen",
      role: "Monthly Donor",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      quote:
        "The education program supported by Upliftly changed my life. Now I'm able to pursue my dreams and give back to my community.",
      author: "Amara Okafor",
      role: "Program Beneficiary",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices of Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the volunteers, donors, and beneficiaries who are part of our journey to create positive change.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border relative"
            >
              <div className="absolute top-8 left-8 text-primary/20">
                <Quote size={60} />
              </div>
              <div className="relative z-10">
                <p className="text-lg md:text-xl italic mb-8 relative z-10">"{testimonials[currentIndex].quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonials[currentIndex].author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection

