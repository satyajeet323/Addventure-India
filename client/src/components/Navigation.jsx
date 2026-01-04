import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, megaMenuItems } from '../config/data'
import MegaMenu from './MegaMenu'
import logo from '../assets/add.png'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (slug) => location.pathname === `/${slug}`

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-primary-200'
          : 'bg-white border-b border-primary-100'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-14 lg:h-16 xl:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md group"
            aria-label="Adventure India Home"
          >
            <img 
              src={logo} 
              alt="Adventure India Logo" 
              className="h-7 lg:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="hidden sm:block text-base lg:text-lg font-display font-bold text-primary-800">
              Add-Venture India
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-0.5 xl:space-x-1 relative z-50">
            {navLinks.map((link, index) => {
              const dropdownItems = megaMenuItems[link.slug] || []
              return (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative"
                >
                  <MegaMenu
                    items={dropdownItems}
                    label={link.name}
                    slug={link.slug}
                    isMobile={false}
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-1.5 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-primary-100"
            >
              <div className="py-3">
                <div className="flex flex-col space-y-0.5">
                  {navLinks.map((link, index) => {
                    const dropdownItems = megaMenuItems[link.slug] || []
                    const hasDropdown = dropdownItems.length > 0

                    return (
                      <motion.div
                        key={link.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {hasDropdown ? (
                          <div className="flex flex-col">
                            <button
                              type="button"
                              onClick={() =>
                                setOpenMobileMenu(
                                  openMobileMenu === link.id ? null : link.id
                                )
                              }
                              className={`w-full text-left px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wide rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                                isActive(link.slug)
                                  ? 'text-primary-600 bg-primary-50'
                                  : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                              }`}
                            >
                              {link.name}
                            </button>
                            <AnimatePresence>
                              {openMobileMenu === link.id && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-3.5 py-1.5 bg-primary-50 rounded-md ml-3.5 mt-0.5 space-y-0.5">
                                    {dropdownItems.map((item, itemIndex) => (
                                      <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: itemIndex * 0.03,
                                          duration: 0.2,
                                        }}
                                      >
                                        <Link
                                          to={item.slug}
                                          className="block px-2.5 py-1.5 text-xs text-primary-800 hover:text-primary-600 hover:bg-primary-100 rounded-md transition-colors"
                                          onClick={() => {
                                            setIsMenuOpen(false)
                                            setOpenMobileMenu(null)
                                          }}
                                        >
                                          {item.name}
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={`/${link.slug}`}
                            className={`block px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wide rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                              isActive(link.slug)
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation