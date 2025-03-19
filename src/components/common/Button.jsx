"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  icon,
  iconPosition = "left",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    outline: "border border-input bg-background hover:bg-muted hover:text-foreground",
    ghost: "hover:bg-muted hover:text-foreground",
  }

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-6 text-lg",
  }

  const buttonContent = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  )

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const MotionComponent = ({ children }) => (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
      {children}
    </motion.div>
  )

  if (to) {
    return (
      <MotionComponent>
        <Link to={to} className={buttonClasses} {...props}>
          {buttonContent}
        </Link>
      </MotionComponent>
    )
  }

  if (href) {
    return (
      <MotionComponent>
        <a href={href} className={buttonClasses} {...props}>
          {buttonContent}
        </a>
      </MotionComponent>
    )
  }

  return (
    <MotionComponent>
      <button onClick={onClick} className={buttonClasses} disabled={disabled} {...props}>
        {buttonContent}
      </button>
    </MotionComponent>
  )
}

export default Button

