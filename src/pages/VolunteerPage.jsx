"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Check, Users, Star, Filter } from "lucide-react"
import AnimatedSection from "../components/common/AnimatedSection"
import Button from "../components/common/Button"
import Input from "../components/common/Input"
import Card from "../components/common/Card"

const VolunteerPage = () => {
  const [activeTab, setActiveTab] = useState("opportunities")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    interests: [],
    skills: [],
    availability: [],
    experience: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [filters, setFilters] = useState({
    location: "all",
    category: "all",
    availability: "all",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [category]: checked ? [...prev[category], value] : prev[category].filter((item) => item !== value),
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone) newErrors.phone = "Phone number is required"
    if (!formData.location) newErrors.location = "Location is required"
    if (formData.interests.length === 0) newErrors.interests = "Select at least one interest"
    if (formData.availability.length === 0) newErrors.availability = "Select at least one availability"

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      console.log("Form submitted", formData)
    }, 1500)
  }

  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({ ...prev, [category]: value }))
  }

  const volunteerOpportunities = [
    {
      id: 1,
      title: "Community Garden Project",
      category: "environment",
      location: "New York, NY",
      date: "Ongoing",
      time: "Weekends, 9 AM - 1 PM",
      description: "Help maintain and grow our community garden that provides fresh produce to local food banks.",
      requiredSkills: ["Gardening", "Physical labor"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "After-School Tutoring",
      category: "education",
      location: "Chicago, IL",
      date: "Mon-Thu",
      time: "3 PM - 5 PM",
      description: "Provide academic support to underprivileged students in math, science, and reading.",
      requiredSkills: ["Teaching", "Patience", "Subject knowledge"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "Homeless Shelter Support",
      category: "community",
      location: "Los Angeles, CA",
      date: "Weekends",
      time: "Various shifts",
      description: "Assist with meal preparation, distribution, and general support at our homeless shelter.",
      requiredSkills: ["Compassion", "Organization", "Food handling"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Senior Companion Program",
      category: "healthcare",
      location: "Miami, FL",
      date: "Flexible",
      time: "2-4 hours per week",
      description: "Provide companionship and assistance to seniors living alone in our community.",
      requiredSkills: ["Empathy", "Good listener", "Patience"],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const volunteerProfiles = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Education Volunteer",
      years: 3,
      projects: 12,
      quote: "Volunteering with Upliftly has been the most rewarding experience of my life.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Community Outreach",
      years: 2,
      projects: 8,
      quote: "I've met amazing people and made a real difference in my community.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Environmental Projects",
      years: 4,
      projects: 15,
      quote: "Being able to contribute to environmental sustainability has been incredibly fulfilling.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const filteredOpportunities = volunteerOpportunities.filter((opportunity) => {
    if (filters.location !== "all" && opportunity.location !== filters.location) return false
    if (filters.category !== "all" && opportunity.category !== filters.category) return false
    return true
  })

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Volunteer With Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community of dedicated volunteers making a real difference. Whether you have a few hours or a few
            days, your contribution matters.
          </p>
        </AnimatedSection>

        <div className="mb-12">
          <div className="flex flex-wrap border-b border-border">
            <button
              className={`px-4 py-2 font-medium text-sm transition-colors ${
                activeTab === "opportunities"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("opportunities")}
            >
              Volunteer Opportunities
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm transition-colors ${
                activeTab === "register"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("register")}
            >
              Register as Volunteer
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm transition-colors ${
                activeTab === "volunteers"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("volunteers")}
            >
              Our Volunteers
            </button>
          </div>
        </div>

        {activeTab === "opportunities" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8 p-4 bg-muted rounded-lg">
              <div className="flex items-center mb-4">
                <Filter size={18} className="mr-2" />
                <h3 className="font-medium">Filter Opportunities</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Location</label>
                  <select
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={filters.location}
                    onChange={(e) => handleFilterChange("location", e.target.value)}
                  >
                    <option value="all">All Locations</option>
                    <option value="New York, NY">New York, NY</option>
                    <option value="Chicago, IL">Chicago, IL</option>
                    <option value="Los Angeles, CA">Los Angeles, CA</option>
                    <option value="Miami, FL">Miami, FL</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Category</label>
                  <select
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={filters.category}
                    onChange={(e) => handleFilterChange("category", e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    <option value="environment">Environment</option>
                    <option value="education">Education</option>
                    <option value="community">Community</option>
                    <option value="healthcare">Healthcare</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Availability</label>
                  <select
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={filters.availability}
                    onChange={(e) => handleFilterChange("availability", e.target.value)}
                  >
                    <option value="all">All Availabilities</option>
                    <option value="weekends">Weekends</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredOpportunities.map((opportunity) => (
                <AnimatedSection key={opportunity.id} delay={opportunity.id * 0.1}>
                  <Card className="h-full flex flex-col">
                    <div className="relative h-48">
                      <img
                        src={opportunity.image || "/placeholder.svg"}
                        alt={opportunity.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {opportunity.category}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                      <p className="text-muted-foreground mb-4">{opportunity.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm">
                          <MapPin size={16} className="mr-2 text-primary" />
                          <span>{opportunity.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar size={16} className="mr-2 text-primary" />
                          <span>{opportunity.date}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock size={16} className="mr-2 text-primary" />
                          <span>{opportunity.time}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Skills Needed:</p>
                        <div className="flex flex-wrap gap-2">
                          {opportunity.requiredSkills.map((skill, index) => (
                            <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto">
                        <Button to={`/volunteer/${opportunity.id}`} className="w-full">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "register" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isSubmitted ? (
              <div className="max-w-md mx-auto bg-card rounded-lg shadow-sm border border-border p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Thank You for Registering!</h2>
                <p className="text-muted-foreground mb-6">
                  Your volunteer application has been successfully submitted. We'll review your information and contact
                  you soon with next steps.
                </p>
                <Button to="/" className="w-full">
                  Return to Home
                </Button>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-sm border border-border p-6 md:p-8">
                <h2 className="text-xl font-bold mb-6">Volunteer Registration Form</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                    <Input
                      type="tel"
                      label="Phone Number"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleInputChange}
                      error={errors.phone}
                    />

                    <Input
                      label="Location"
                      name="location"
                      placeholder="City, State"
                      value={formData.location}
                      onChange={handleInputChange}
                      error={errors.location}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Areas of Interest
                      {errors.interests && <span className="text-red-500 ml-2">{errors.interests}</span>}
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        "Education",
                        "Environment",
                        "Healthcare",
                        "Community Development",
                        "Disaster Relief",
                        "Animal Welfare",
                      ].map((interest) => (
                        <div key={interest} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`interest-${interest}`}
                            value={interest}
                            checked={formData.interests.includes(interest)}
                            onChange={(e) => handleCheckboxChange(e, "interests")}
                            className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                          />
                          <label htmlFor={`interest-${interest}`} className="ml-2 text-sm">
                            {interest}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Skills</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        "Teaching",
                        "Organizing",
                        "Fundraising",
                        "Marketing",
                        "Technical",
                        "Medical",
                        "Languages",
                        "Leadership",
                      ].map((skill) => (
                        <div key={skill} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`skill-${skill}`}
                            value={skill}
                            checked={formData.skills.includes(skill)}
                            onChange={(e) => handleCheckboxChange(e, "skills")}
                            className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                          />
                          <label htmlFor={`skill-${skill}`} className="ml-2 text-sm">
                            {skill}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Availability
                      {errors.availability && <span className="text-red-500 ml-2">{errors.availability}</span>}
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {[
                        "Weekday Mornings",
                        "Weekday Afternoons",
                        "Weekday Evenings",
                        "Weekends",
                        "One-time Events",
                        "Ongoing Commitment",
                      ].map((time) => (
                        <div key={time} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`time-${time}`}
                            value={time}
                            checked={formData.availability.includes(time)}
                            onChange={(e) => handleCheckboxChange(e, "availability")}
                            className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                          />
                          <label htmlFor={`time-${time}`} className="ml-2 text-sm">
                            {time}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="text-sm font-medium mb-2 block">
                      Previous Volunteer Experience
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={3}
                      placeholder="Tell us about any previous volunteer experience you have..."
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Why do you want to volunteer with us?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Share your motivation for volunteering..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                      I agree to the volunteer terms and conditions
                    </label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === "volunteers" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Meet Our Amazing Volunteers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our volunteers are the heart of our organization. Their dedication and passion drive our mission
                forward.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {volunteerProfiles.map((volunteer, index) => (
                <AnimatedSection key={volunteer.id} delay={index * 0.1}>
                  <Card className="text-center p-6">
                    <div className="mb-4 relative mx-auto">
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                        <img
                          src={volunteer.image || "/placeholder.svg"}
                          alt={volunteer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs font-medium">
                        {volunteer.years} years
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{volunteer.name}</h3>
                    <p className="text-primary font-medium mb-2">{volunteer.role}</p>
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={i < 5 ? "text-yellow-400 fill-yellow-400" : "text-muted"} />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4">"{volunteer.quote}"</p>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Users size={16} className="mr-1" />
                      <span>{volunteer.projects} projects completed</span>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Join our community of dedicated volunteers and make a real difference in the world.
              </p>
              <Button onClick={() => setActiveTab("register")}>Become a Volunteer</Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default VolunteerPage

