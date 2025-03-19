"use client"

import { useState } from "react"
import { MapPin, Search, Filter, Heart } from "lucide-react"
import AnimatedSection from "../components/common/AnimatedSection"
import Button from "../components/common/Button"
import Card from "../components/common/Card"

const BeneficiariesPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    category: "all",
    location: "all",
    urgency: "all",
  })

  const beneficiaries = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 12,
      category: "education",
      location: "Kenya",
      urgency: "high",
      needs: "School supplies and tuition fees",
      story:
        "Sarah dreams of becoming a doctor but her family cannot afford her education. She excels in science and has shown remarkable dedication to her studies despite the challenges.",
      image: "/placeholder.svg?height=300&width=300",
      amountNeeded: 1200,
      amountRaised: 450,
    },
    {
      id: 2,
      name: "Amir Hassan",
      age: 8,
      category: "healthcare",
      location: "Syria",
      urgency: "critical",
      needs: "Medical treatment and rehabilitation",
      story:
        "Amir was injured during conflict and requires ongoing medical care and physical therapy to regain mobility in his right leg.",
      image: "/placeholder.svg?height=300&width=300",
      amountNeeded: 3500,
      amountRaised: 2100,
    },
    {
      id: 3,
      name: "Maya Patel",
      age: 16,
      category: "education",
      location: "India",
      urgency: "medium",
      needs: "Computer and internet access for online learning",
      story:
        "Maya is a talented programmer who needs technology access to continue her education and develop her coding skills.",
      image: "/placeholder.svg?height=300&width=300",
      amountNeeded: 800,
      amountRaised: 350,
    },
    {
      id: 4,
      name: "Luis Rodriguez",
      age: 10,
      category: "nutrition",
      location: "Colombia",
      urgency: "high",
      needs: "Nutritional support and food security",
      story:
        "Luis and his siblings face food insecurity. Nutritional support will help him stay healthy and focused on his education.",
      image: "/placeholder.svg?height=300&width=300",
      amountNeeded: 600,
      amountRaised: 200,
    },
    {
      id: 5,
      name: "Grace Muthoni",
      age: 14,
      category: "shelter",
      location: "Kenya",
      urgency: "medium",
      needs: "Safe housing and basic amenities",
      story:
        "Grace and her grandmother need safe housing with access to clean water and electricity to improve their living conditions.",
      image: "/placeholder.svg?height=300&width=300",
      amountNeeded: 1800,
      amountRaised: 900,
    },
    {
      id: 6,
      name: "Raj Kumar",
      age: 7,
      category: "healthcare",
      location: "India",
      urgency: "critical",
      needs: "Heart surgery and post-operative care",
      story:
        "Raj has a congenital heart condition that requires surgery. His family cannot afford the medical costs for this life-saving procedure.",
      image: "/placeholder.svg?height=300&width=300",
      amountNeeded: 5000,
      amountRaised: 3200,
    },
  ]

  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({ ...prev, [category]: value }))
  }

  const filteredBeneficiaries = beneficiaries.filter((beneficiary) => {
    // Apply search term
    if (
      searchTerm &&
      !beneficiary.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !beneficiary.story.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    // Apply category filter
    if (filters.category !== "all" && beneficiary.category !== filters.category) {
      return false
    }

    // Apply location filter
    if (filters.location !== "all" && beneficiary.location !== filters.location) {
      return false
    }

    // Apply urgency filter
    if (filters.urgency !== "all" && beneficiary.urgency !== filters.urgency) {
      return false
    }

    return true
  })

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "critical":
        return "bg-red-500 text-white"
      case "high":
        return "bg-orange-500 text-white"
      case "medium":
        return "bg-yellow-500 text-yellow-950"
      default:
        return "bg-blue-500 text-white"
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Beneficiaries</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the individuals whose lives you can help transform through your support. Every contribution makes a
            real difference in their journey.
          </p>
        </AnimatedSection>

        <div className="mb-8">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="text"
                  placeholder="Search beneficiaries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="text-sm font-medium mb-1 block flex items-center">
                  <Filter size={14} className="mr-1" />
                  Category
                </label>
                <select
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={filters.category}
                  onChange={(e) => handleFilterChange("category", e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="nutrition">Nutrition</option>
                  <option value="shelter">Shelter</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Location</label>
                <select
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={filters.location}
                  onChange={(e) => handleFilterChange("location", e.target.value)}
                >
                  <option value="all">All Locations</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Syria">Syria</option>
                  <option value="India">India</option>
                  <option value="Colombia">Colombia</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Urgency</label>
                <select
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={filters.urgency}
                  onChange={(e) => handleFilterChange("urgency", e.target.value)}
                >
                  <option value="all">All Urgency Levels</option>
                  <option value="critical">Critical</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {filteredBeneficiaries.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No beneficiaries found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your filters or search term</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setFilters({ category: "all", location: "all", urgency: "all" })
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBeneficiaries.map((beneficiary, index) => (
              <AnimatedSection key={beneficiary.id} delay={index * 0.1}>
                <Card className="h-full flex flex-col overflow-hidden">
                  <div className="relative">
                    <img
                      src={beneficiary.image || "/placeholder.svg"}
                      alt={beneficiary.name}
                      className="w-full h-64 object-cover"
                    />
                    <div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium shadow-sm ${getUrgencyColor(beneficiary.urgency)}`}
                    >
                      {beneficiary.urgency.charAt(0).toUpperCase() + beneficiary.urgency.slice(1)} Urgency
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{beneficiary.name}</h3>
                        <p className="text-muted-foreground text-sm">Age: {beneficiary.age}</p>
                      </div>
                      <span className="bg-background text-foreground px-2 py-1 rounded-full text-xs font-medium border border-border">
                        {beneficiary.category}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin size={16} className="mr-1 text-primary" />
                      <span>{beneficiary.location}</span>
                    </div>

                    <p className="text-sm mb-4 flex-grow">{beneficiary.story}</p>

                    <div className="mb-2">
                      <p className="font-medium text-sm">Needs:</p>
                      <p className="text-muted-foreground text-sm">{beneficiary.needs}</p>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>${beneficiary.amountRaised} raised</span>
                        <span className="font-medium">${beneficiary.amountNeeded} needed</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{ width: `${(beneficiary.amountRaised / beneficiary.amountNeeded) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button to={`/beneficiaries/${beneficiary.id}`} variant="outline" className="flex-1">
                        Learn More
                      </Button>
                      <Button
                        to={`/donate?beneficiary=${beneficiary.id}`}
                        className="flex-1"
                        icon={<Heart size={16} />}
                      >
                        Sponsor
                      </Button>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Your support can transform lives. Every contribution, no matter how small, makes a difference.
          </p>
          <Button to="/donate">Make a Donation</Button>
        </div>
      </div>
    </div>
  )
}

export default BeneficiariesPage

