"use client"

import { useState } from "react"
import { Calendar, Users, MapPin, Search, Filter, ArrowUpDown } from "lucide-react"
import AnimatedSection from "../components/common/AnimatedSection"
import Button from "../components/common/Button"
import Card from "../components/common/Card"

const CampaignsPage = () => {
  const [view, setView] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    status: "all",
    location: "all",
  });
  const [sortBy, setSortBy] = useState("date");

  const campaigns = [
    {
      id: 1,
      title: "Clean Water Initiative",
      category: "environment",
      status: "ongoing",
      location: "Global",
      date: "Ongoing",
      participants: 120,
      progress: 65,
      description: "Providing clean water access to rural communities facing water scarcity. This initiative focuses on building wells, water purification systems, and education on water conservation.",
      image: "/placeholder.svg?height=300&width=500",
      goal: 50000,
      raised: 32500,
    },
    {
      id: 2,
      title: "Education for All",
      category: "education",
      status: "ongoing",
      location: "Africa",
      date: "Ongoing",
      participants: 85,
      progress: 40,
      description: "Supporting education for underprivileged children through scholarships, school supplies, and resources. We aim to ensure every child has access to quality education.",
      image: "/placeholder.svg?height=300&width=500",
      goal: 75000,
      raised: 30000,
    },
    {
      id: 3,
      title: "Community Health Camp",
      category: "healthcare",
      status: "upcoming",
      location: "Asia",
      date: "Jun 15 - Jul 30",
      participants: 200,
      progress: 80,
      description: "Free health checkups and medical assistance for underserved communities. Our medical volunteers provide essential healthcare services to those who need it most.",
      image: "/placeholder.svg?height=300&width=500",
      goal: 25000,
      raised: 20000,
    },
    {
      id: 4,
      title: "Disaster Relief Fund",
      category: "emergency",
      status: "urgent",
      location: "Global",
      date: "Ongoing",
      participants: 350,
      progress: 60,
      description: "Providing immediate assistance to communities affected by natural disasters. Funds are used for food, shelter, medical aid, and rebuilding efforts.",
      image: "/placeholder.svg?height=300&width=500",
      goal: 100000,
      raised: 60000,
    },
    {
      id: 5,
      title: "Women Empowerment Workshop",
      category: "social",
      status: "upcoming",
      location: "Multiple Locations",
      date: "Aug 10 - Sep 15",
      participants: 75,
      progress: 30,
      description: "Workshops and training programs designed to empower women with skills, knowledge, and resources to achieve economic independence.",
      image: "/placeholder.svg?height=300&width=500",
      goal: 35000,
      raised: 10500,
    },
    {
      id: 6,
      title: "Reforestation Project",
      category: "environment",
      status: "ongoing",
      location: "South America",
      date: "Ongoing",
      participants: 180,
      progress: 70,
      description: "Planting trees to combat deforestation and climate change. Join us in restoring forest ecosystems and protecting biodiversity.",
      image: "/placeholder.svg?height=300&width=500",
      goal: 60000,
      raised: 42000,
    },
  ];

  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({ ...prev, [category]: value }));
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const filteredCampaigns = campaigns
    .filter((campaign) => {
      // Apply search term
      if (searchTerm && !campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !campaign.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Apply category filter
      if (filters.category !== "all" && campaign.category !== filters.category) {
        return false;
      }
      
      // Apply status filter
      if (filters.status !== "all" && campaign.status !== filters.status) {
        return false;
      }
      
      // Apply location filter
      if (filters.location !== "all" && campaign.location !== filters.location) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      // Apply sorting
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "progress":
          return b.progress - a.progress;
        case "participants":
          return b.participants - a.participants;
        case "raised":
          return b.raised - a.raised;
        default: // date
          return a.id - b.id; // Using id as a proxy for date in this example
      }
    });

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Campaigns & Events</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our ongoing and upcoming campaigns. Join us in making a positive impact 
            on communities and the environment around the world.
          </p>
        </AnimatedSection>

        <div className="mb-8">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  className={`p-2 rounded-md ${
                    view === "grid" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground"
                  }`}
                  onClick={() => setView("grid")}
                  aria-label="Grid view"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                  </svg>
                </button>
                <button
                  className={`p-2 rounded-md ${
                    view === "list" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground"
                  }`}
                  onClick={() => setView("list")}
                  aria-label="List view"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
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
                  <option value="environment">Environment</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="emergency">Emergency</option>
                  <option value="social">Social</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Status</label>
                <select
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={filters.status}
                  onChange={(e) => handleFilterChange("status", e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="urgent">Urgent</option>
                  <option value="completed">Completed</option>
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
                  <option value="Global">Global</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="South America">South America</option>
                  <option value="Multiple Locations">Multiple Locations</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block flex items-center">
                  <ArrowUpDown size={14} className="mr-1" />
                  Sort By
                </label>
                <select
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option value="date">Date</option>
                  <option value="title">Title</option>
                  <option value="progress">Progress</option>
                  <option value="participants">Participants</option>
                  <option value="raised">Amount Raised</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {filteredCampaigns.map((campaign, index) => (
  <AnimatedSection key={campaign.id} delay={index * 0.05}>
    <Card className="flex overflow-hidden border border-border">
      <div className="hidden sm:block w-48 shrink-0">
        <img
          src={campaign.image || "/placeholder.svg"}
          alt={campaign.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="bg-background text-foreground px-2 py-0.5 rounded-full text-xs font-medium border border-border">
            {campaign.category}
          </span>
          {campaign.status === "urgent" && (
            <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              Urgent
            </span>
          )}
          <span className="bg-muted text-muted-foreground px-2 py-0.5 rounded-full text-xs font-medium">
            {campaign.location}
          </span>
        </div>
        
        <h3 className="text-lg font-bold mb-2">{campaign.title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{campaign.description}</p>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground mb-3">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{campaign.date}</span>
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1" />
            <span>{campaign.participants} participants</span>
          </div>
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            <span>{campaign.location}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1">
            <span>${campaign.raised.toLocaleString()} raised</span>
            <span className="font-medium">{campaign.progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-1.5">
            <div
              className="bg-primary rounded-full h-1.5"
              style={{ width: `${campaign.progress}%` }}
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button to={`/campaigns/${campaign.id}`} variant="outline" size="sm">
            Details
          </Button>
          <Button to={`/donate?campaign=${campaign.id}`} size="sm">
            Donate
          </Button>
        </div>
      </div>
    </Card>
  </AnimatedSection>
))}

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Don't see a campaign that matches your interests? Contact us to learn about more opportunities.
          </p>
          <Button to="/contact">Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;

