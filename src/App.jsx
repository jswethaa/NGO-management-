"use client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/auth/LoginPage"
import SignupPage from "./pages/auth/SignupPage"
import DonationPage from "./pages/DonationPage"
import VolunteerPage from "./pages/VolunteerPage"
import CampaignsPage from "./pages/CampaignsPage"
import BeneficiariesPage from "./pages/BeneficiariesPage"
import AdminDashboard from "./pages/admin/AdminDashboard"
import ScrollToTop from "./components/common/ScrollToTop"
import "./index.css"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/donate" element={<DonationPage />} />
              <Route path="/volunteer" element={<VolunteerPage />} />
              <Route path="/campaigns" element={<CampaignsPage />} />
              <Route path="/beneficiaries" element={<BeneficiariesPage />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

