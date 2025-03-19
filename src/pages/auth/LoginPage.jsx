"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"
import Input from "../../components/common/Input"
import Button from "../../components/common/Button"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.password) {
      newErrors.password = "Password is required"
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect would happen here after successful login
      console.log("Login successful", formData)
    }, 1500)
  }

  return (
    <div className="min-h-screen pt-20 pb-12 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg shadow-sm border border-border p-8"
          >
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center justify-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-xl">U</span>
                </div>
              </Link>
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-muted-foreground mt-2">Sign in to your Upliftly account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  icon={<Mail size={18} />}
                />

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    label="Password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    icon={<Lock size={18} />}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-9 text-muted-foreground hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="text-sm font-medium text-primary hover:text-primary/90">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Don't have an account?</span>{" "}
                <Link to="/signup" className="font-medium text-primary hover:text-primary/90">
                  Sign up
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

