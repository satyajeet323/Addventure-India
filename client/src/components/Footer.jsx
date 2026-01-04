import { Link } from 'react-router-dom'
import { categories, siteConfig } from '../config/data'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-neutral-900 text-neutral-300 border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-display font-bold text-white mb-4">
              {siteConfig.name}
            </h2>
            <p className="text-sm text-neutral-400 mb-4">
              {siteConfig.description}
            </p>
            <p className="text-xs text-neutral-500">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Categories Section */}
          <div className="col-span-1">
            <h3 className="text-base font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/${category.slug}`}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded-md"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-base font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded-md"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded-md"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#shipping"
                  className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded-md"
                >
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1">
            <h3 className="text-base font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a
                  href="mailto:info@addventureindia.com"
                  className="hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded-md"
                >
                  info@addventureindia.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded-md"
                >
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-neutral-500 text-center md:text-left">
              Designed and built for adventurers across India
            </p>
            <div className="flex space-x-6 text-xs text-neutral-500">
              <a
                href="#privacy"
                className="hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded-md"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded-md"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

