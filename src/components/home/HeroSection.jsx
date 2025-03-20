"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Button from "../common/Button"
import heroImage from "../../assets/images/pic.jpg"

// Base64 encoded placeholder image (a simple gray rectangle)
const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiNmM2Y0ZjYiLz48dGV4dCB4PSI0MDAiIHk9IjMwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjOWNhM2FmIj5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4="

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Making a difference together
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Empowering Communities Through <span className="gradient-text">Compassionate Action</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Join our mission to create sustainable change and uplift communities in need. Together, we can make a
              lasting impact on lives around the world.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button to="/donate" size="lg">
                Donate Now
              </Button>
              <Button to="/volunteer" variant="outline" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                Get Involved
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">120+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-muted-foreground">Beneficiaries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10K+</div>
                <div className="text-sm text-muted-foreground">Volunteers</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage || placeholderImage}
                alt="Volunteers helping in a community"
                className="w-full h-auto object-cover"
                width={800}
                height={600}
                loading="eager"
                onError={(e) => {
                  e.target.src = placeholderImage;
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

