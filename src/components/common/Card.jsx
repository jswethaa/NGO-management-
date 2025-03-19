"use client"
import { motion } from "framer-motion"

const Card = ({ children, className = "", variant = "default", hover = true, ...props }) => {
  const variants = {
    default: "bg-card text-card-foreground",
    outline: "bg-transparent border border-border",
    muted: "bg-muted text-muted-foreground",
  }

  const hoverClass = hover ? "card-hover" : ""

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg shadow-sm overflow-hidden ${variants[variant]} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card

