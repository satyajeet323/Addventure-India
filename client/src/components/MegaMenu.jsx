import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function MegaMenu({ items, label, slug, isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [navbarHeight, setNavbarHeight] = useState(80)
  const menuRef = useRef(null)
  const triggerRef = useRef(null)
  const containerRef = useRef(null)

  // Calculate navbar height
  useEffect(() => {
    const updateNavbarHeight = () => {
      const nav = document.querySelector('nav')
      if (nav) {
        setNavbarHeight(nav.offsetHeight)
      }
    }
    updateNavbarHeight()
    window.addEventListener('resize', updateNavbarHeight)
    return () => window.removeEventListener('resize', updateNavbarHeight)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close dropdown when mouse leaves (desktop only)
  const handleMouseLeave = (e) => {
    if (!isMobile) {
      // Check if we're moving to the dropdown
      const relatedTarget = e.relatedTarget
      if (
        relatedTarget &&
        (menuRef.current?.contains(relatedTarget) ||
          triggerRef.current?.contains(relatedTarget))
      ) {
        return
      }
      // Small delay to allow moving to dropdown
      setTimeout(() => {
        if (
          menuRef.current &&
          !menuRef.current.matches(':hover') &&
          triggerRef.current &&
          !triggerRef.current.matches(':hover')
        ) {
          setIsOpen(false)
        }
      }, 150)
    }
  }

  // Toggle dropdown (mobile)
  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen)
    }
  }

  // Open dropdown on hover (desktop only)
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true)
    }
  }

  // Keep dropdown open when hovering over it
  const handleDropdownMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true)
    }
  }

  if (!items || items.length === 0) {
    return (
      <Link
        to={`/${slug}`}
        className="relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md group"
      >
        <span className="relative z-10 text-neutral-700 hover:text-primary-600">{label}</span>
        <motion.span
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Trigger Button */}
      <button
        type="button"
        ref={triggerRef}
        onClick={handleToggle}
        className="relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md group flex items-center gap-1"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={`mega-menu-${slug}`}
      >
        <span className="relative z-10 text-neutral-700 group-hover:text-primary-600">
          {label}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
        <motion.span
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Mega Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 z-40"
                onClick={() => setIsOpen(false)}
              />
            )}
            <motion.div
              id={`mega-menu-${slug}`}
              ref={menuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`fixed left-0 right-0 ${
                isMobile ? 'z-50' : 'z-[60]'
              }`}
              style={{ top: `${navbarHeight + 8}px` }}
              role="menu"
              aria-label={`${label} submenu`}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary-50 rounded-2xl shadow-strong border border-primary-200 p-6 lg:p-8 min-h-[300px] max-h-[350px] overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.id || index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03, duration: 0.2 }}
                      >
                        <Link
                          to={item.slug || `/${slug}/${item.id}`}
                          className="block w-full p-4 rounded-xl bg-primary-100 hover:bg-primary-600 text-primary-800 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-50 transform hover:scale-105"
                          role="menuitem"
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.span
                            className="block text-sm font-semibold text-center"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MegaMenu
