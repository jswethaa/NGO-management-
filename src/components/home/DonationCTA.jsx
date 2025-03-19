"use client"
import { motion } from "framer-motion"
import { Heart, ArrowRight } from "lucide-react"
import AnimatedSection from "../common/AnimatedSection"
import Button from "../common/Button"

const DonationCTA = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <AnimatedSection direction="left" className="space-y-6">
              <div className="inline-flex items-center space-x-2 rounded-full bg-background px-4 py-1.5 text-sm font-medium text-primary">
                <Heart size={16} className="text-primary" />
                <span>Support Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Your Donation Makes a <span className="gradient-text">Lasting Impact</span>
              </h2>
              <p className="text-muted-foreground">
                Every contribution, no matter the size, helps us continue our mission of uplifting communities in need.
                Your generosity directly supports our programs and initiatives around the world.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {[25, 50, 100, 250].map((amount) => (
                  <motion.div
                    key={amount}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-center"
                  >
                    <a
                      href={`/donate?amount=${amount}`}
                      className="block w-full py-3 px-4 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      <span className="block font-bold text-lg">${amount}</span>
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button to="/donate" size="lg">
                  Donate Now
                </Button>
                <Button to="/impact" variant="outline" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  See Your Impact
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative z-10 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="People benefiting from donations"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/30 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonationCTA

