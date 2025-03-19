"use client"
import { motion } from "framer-motion"
import HeroSection from "../components/home/HeroSection"
import ImpactStats from "../components/home/ImpactStats"
import FeaturedCampaigns from "../components/home/FeaturedCampaigns"
import VolunteerCTA from "../components/home/VolunteerCTA"
import TestimonialSection from "../components/home/TestimonialSection"
import DonationCTA from "../components/home/DonationCTA"

const LandingPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <HeroSection />
      <ImpactStats />
      <FeaturedCampaigns />
      <VolunteerCTA />
      <TestimonialSection />
      <DonationCTA />
    </motion.div>
  )
}

export default LandingPage

