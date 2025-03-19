"use client"
import { Calendar, Users, ArrowRight } from "lucide-react"
import AnimatedSection from "../common/AnimatedSection"
import Card from "../common/Card"
import Button from "../common/Button"

const FeaturedCampaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: "Clean Water Initiative",
      description: "Providing clean water access to rural communities facing water scarcity.",
      image: "/placeholder.svg?height=300&width=500",
      date: "Ongoing",
      participants: 120,
      progress: 65,
    },
    {
      id: 2,
      title: "Education for All",
      description: "Supporting education for underprivileged children through scholarships and resources.",
      image: "/placeholder.svg?height=300&width=500",
      date: "Ongoing",
      participants: 85,
      progress: 40,
    },
    {
      id: 3,
      title: "Community Health Camp",
      description: "Free health checkups and medical assistance for underserved communities.",
      image: "/placeholder.svg?height=300&width=500",
      date: "Jun 15 - Jul 30",
      participants: 200,
      progress: 80,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Campaigns</h2>
            <p className="text-muted-foreground max-w-2xl">
              Join our ongoing initiatives and help us create meaningful change in communities around the world.
            </p>
          </div>
          <Button
            to="/campaigns"
            variant="outline"
            className="mt-4 md:mt-0"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            View All Campaigns
          </Button>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <AnimatedSection key={campaign.id} delay={index * 0.1}>
              <Card className="h-full flex flex-col">
                <div className="relative">
                  <img
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{campaign.description}</p>

                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{campaign.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>{campaign.participants} participants</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span className="font-medium">{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: `${campaign.progress}%` }} />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button to={`/campaigns/${campaign.id}`} variant="outline" className="flex-1">
                      Learn More
                    </Button>
                    <Button to={`/donate?campaign=${campaign.id}`} className="flex-1">
                      Donate
                    </Button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCampaigns

