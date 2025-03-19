"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu, X, Heart, Users, Calendar, BarChart2 } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Donate", path: "/donate", icon: Heart },
    { name: "Volunteer", path: "/volunteer", icon: Users },
    { name: "Campaigns", path: "/campaigns", icon: Calendar },
    { name: "Beneficiaries", path: "/beneficiaries", icon: Users },
    { name: "Impact", path: "/impact", icon: BarChart2 },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
            </motion.div>
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl font-bold gradient-text"
            >
              Upliftly
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background border-b"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  location.pathname === link.path ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.icon && <link.icon size={18} />}
                <span>{link.name}</span>
              </Link>
            ))}
            <div className="pt-2 border-t border-border">
              <Link
                to="/login"
                className="block w-full text-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar

