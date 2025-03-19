import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-xl font-bold gradient-text">Upliftly</span>
            </Link>
            <p className="text-muted-foreground">
              Empowering communities through sustainable development and compassionate action.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Campaigns
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-muted-foreground hover:text-primary transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Impact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/volunteer" className="text-muted-foreground hover:text-primary transition-colors">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link to="/fundraise" className="text-muted-foreground hover:text-primary transition-colors">
                  Start Fundraising
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-muted-foreground hover:text-primary transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Impact Avenue, Charity City, CC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-muted-foreground">info@upliftly.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Upliftly. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

