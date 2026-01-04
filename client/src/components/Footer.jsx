import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Mail, Phone, MapPin, Clock, Linkedin, Youtube } from 'lucide-react'
import { navLinks, siteConfig } from '../config/data'
import logo from '../assets/add.png'

function Footer() {
  const currentYear = new Date().getFullYear()

  // Navigation buttons matching the image
  const footerNavButtons = [
    { id: 'shop-by-brand', name: 'SHOP BY BRAND', slug: '/shop-by-brand' },
    { id: 'camping-gear', name: 'CAMPING GEAR', slug: '/camping-gear' },
    { id: 'trekking-gear', name: 'TREKKING GEAR', slug: '/trekking-gear' },
    { id: 'climbing-gear', name: 'CLIMBING GEAR', slug: '/climbing-gear' },
    { id: 'ecommerce-services', name: 'E-COMMERCE SERVICES', slug: '/ecommerce-services' },
    { id: 'imported-stuff', name: 'IMPORTED STUFF', slug: '/imported-stuff' },
  ]

  // Left column links
  const leftColumnLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CONTACT US', href: '/contact' },
  ]

  // Right column links
  const rightColumnLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cancellation & Return', href: '/returns' },
  ]

  return (
    <footer className="w-full bg-primary-50 text-neutral-900 border-t border-primary-200">
      {/* Top Breadcrumb Section */}
      <div className="bg-primary-100 border-b border-primary-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <p className="text-xs text-primary-700 text-center sm:text-left">
            Addventureindia Trekking | Camping | Climbing Gear | Online | Navi Mumbai - Add-Venture India
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Navigation Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start mb-8 lg:mb-10"
          >
            {footerNavButtons.map((button) => (
              <motion.div
                key={button.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={button.slug}
                  className="px-4 py-2 bg-primary-600 text-white text-xs lg:text-sm font-bold uppercase tracking-wide rounded-md hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-50 shadow-sm hover:shadow-md"
                >
                  {button.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-8">
            {/* Left Section - Company Info & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              {/* Logo and Title */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-5">
                <img
                  src={logo}
                  alt="Add-Venture India Logo"
                  className="h-12 lg:h-14 w-auto object-contain"
                />
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary-800">
                  Add-Venture India
                </h2>
              </div>
              <p className="text-sm text-primary-700 mb-6 leading-relaxed">
                Premium outdoor adventure gear and equipment for explorers across India
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+919869018845"
                    className="flex items-center gap-3 text-primary-800 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-50 rounded-lg p-2 hover:bg-primary-100"
                  >
                    <div className="w-9 h-9 bg-primary-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-primary-700" />
                    </div>
                    <span className="font-semibold text-sm lg:text-base">+91-98690 18845</span>
                  </a>
                </li>
                <li>
                  <span className="flex items-start gap-3 text-primary-800 p-2 rounded-lg">
                    <div className="w-9 h-9 bg-primary-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-primary-700" />
                    </div>
                    <span className="font-medium text-sm lg:text-base">A/4/46 HH Shree Mataji Nirmala Devi Marg, Navi Mumbai</span>
                  </span>
                </li>
                <li>
                  <span className="flex items-center gap-3 text-primary-800 p-2 rounded-lg">
                    <div className="w-9 h-9 bg-primary-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-primary-700" />
                    </div>
                    <span className="font-medium text-sm lg:text-base">
                      Today <span className="text-secondary-600 font-bold">Closed today</span>
                    </span>
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Right Section - Links Columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Left Column */}
              <div>
                <h3 className="text-base font-bold text-primary-800 mb-4 uppercase tracking-wide">Quick Links</h3>
                <ul className="space-y-2.5">
                  {leftColumnLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm font-semibold text-primary-800 hover:text-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-50 rounded-md inline-block hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2 border-t border-primary-200">
                    <a
                      href="mailto:info@addventureindia.com"
                      className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-50 rounded-md inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      info@addventureindia.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="text-base font-bold text-primary-800 mb-4 uppercase tracking-wide">Legal & Info</h3>
                <ul className="space-y-2.5">
                  {rightColumnLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm font-semibold text-primary-800 hover:text-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-50 rounded-md inline-block hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Payment Methods, Social Media, Stats, WhatsApp */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-6 border-t border-primary-200"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Payment Methods */}
              <div className="flex items-center gap-3 flex-wrap justify-center lg:justify-start">
                <span className="text-xs text-primary-700 font-semibold">Payment:</span>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-7 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                  <div className="w-12 h-7 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">MC</div>
                  <div className="w-12 h-7 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">AMEX</div>
                  <div className="w-12 h-7 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">M</div>
                  <div className="w-14 h-7 bg-neutral-700 rounded flex items-center justify-center text-white text-xs font-bold">NET</div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-primary-700 font-semibold hidden lg:inline">Follow:</span>
                <div className="flex items-center gap-2">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center text-white shadow-sm hover:shadow-md transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white shadow-sm hover:shadow-md transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm hover:shadow-md transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white shadow-sm hover:shadow-md transition-all"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Stats and WhatsApp Widget */}
              <div className="flex items-center gap-4 flex-wrap justify-center">
                {/* Website Stats */}
                <div className="flex flex-col items-center bg-primary-100 rounded-lg px-4 py-2 border border-primary-200">
                  <div className="text-2xl font-bold text-primary-800">207109</div>
                  <div className="text-xs text-primary-700 font-semibold uppercase">WEB-STAT</div>
                </div>

                {/* WhatsApp Widget */}
                <motion.a
                  href="https://wa.me/919869018845"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg"
                >
                  {/* WhatsApp Icon SVG */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="text-xs lg:text-sm font-bold">WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary-200 border-t border-primary-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-primary-800 font-semibold text-center">
            &copy; {currentYear} Add-Venture India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
