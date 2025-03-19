"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"
import Input from "../../components/common/Input"
import Button from "../../components/common/Button"

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "donor", // Default role
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
    if (!formData.firstName) newErrors.firstName = "First name is required"
    if (!formData.lastName) newErrors.lastName = "Last name is required"

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
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
      // Redirect would happen here after successful signup
      console.log("Signup successful", formData)
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
              <h1 className="text-2xl font-bold">Create an Account</h1>
              <p className="text-muted-foreground mt-2">Join Upliftly and make a difference</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
                <Input
                  type="text"
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
              </div>

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

              <Input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                label="Confirm Password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                icon={<Lock size={18} />}
              />

              <div>
                <label className="text-sm font-medium mb-1 block">I am registering as a:</label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {["donor", "volunteer", "beneficiary"].map((role) => (
                    <div
                      key={role}
                      className={`flex items-center p-3 rounded-md border cursor-pointer transition-colors ${
                        formData.role === role ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setFormData((prev) => ({ ...prev, role }))}
                    >
                      <div
                        className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center border ${
                          formData.role === role ? "border-primary" : "border-muted-foreground"
                        }`}
                      >
                        {formData.role === role && <div className="w-2 h-2 rounded-full bg-primary" />}
                      </div>
                      <span className="capitalize">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Already have an account?</span>{" "}
                <Link to="/login" className="font-medium text-primary hover:text-primary/90">
                  Sign in
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage

