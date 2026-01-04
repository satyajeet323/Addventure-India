import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Calendar, Star, Shield, Truck, Headphones, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import {
  categories,
  adventureTours,
  gearProducts,
  whyChooseUs,
  blogPosts,
  siteConfig,
  cyclingToursCarousel,
} from '../config/data'

const iconMap = {
  Shield,
  Truck,
  Headphones,
  Award,
}

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselTrackRef = useRef(null)
  const slideWidth = 350 + 32 // 350px width + 32px gap (2rem)

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const maxScroll = cyclingToursCarousel.length * slideWidth
        const newPosition = prev + 1
        // Reset when we've scrolled through one set of items
        return newPosition >= maxScroll ? 0 : newPosition
      })
    }, 30) // Smooth scrolling every 30ms

    return () => clearInterval(interval)
  }, [isPaused, slideWidth])

  const handlePrev = () => {
    setIsPaused(true)
    setScrollPosition((prev) => {
      const maxScroll = cyclingToursCarousel.length * slideWidth
      const newPosition = prev - slideWidth * 2 // Move 2 slides at a time for faster navigation
      return newPosition < 0 ? maxScroll - slideWidth : newPosition
    })
    setTimeout(() => setIsPaused(false), 3000) // Resume auto-scroll after 3 seconds
  }

  const handleNext = () => {
    setIsPaused(true)
    setScrollPosition((prev) => {
      const maxScroll = cyclingToursCarousel.length * slideWidth
      const newPosition = prev + slideWidth * 2 // Move 2 slides at a time for faster navigation
      return newPosition >= maxScroll ? 0 : newPosition
    })
    setTimeout(() => setIsPaused(false), 3000) // Resume auto-scroll after 3 seconds
  }

  return (
    <>
      <SEO
        title={siteConfig.defaultSeo.title}
        description={siteConfig.defaultSeo.description}
        keywords={siteConfig.defaultSeo.keywords}
        url={siteConfig.url}
      />

      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/75 to-primary-900/80"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
            >
              Your Adventure
              <br />
              <span className="text-primary-200">Starts Here</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl text-primary-50 mb-10 max-w-2xl mx-auto"
            >
              Premium outdoor gear and unforgettable adventure tours across India's most
              breathtaking landscapes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/adventure-tours"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 shadow-lg"
                >
                  Explore Tours
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/camping-gear"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                >
                  Shop Gear
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Parallax scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Upcoming Adventure Programs Carousel */}
      <section className="py-16 lg:py-20 bg-neutral-50" aria-labelledby="upcoming-programs-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 id="upcoming-programs-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-4">
              Upcoming Adventure Programs
            </h2>
          </motion.div>
          
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="carousel-container">
              <div 
                ref={carouselTrackRef}
                className="carousel-track carousel-track-controlled"
                style={{
                  transform: `translateX(-${scrollPosition}px)`,
                  transition: isPaused ? 'transform 0.5s ease-out' : 'none',
                }}
              >
                {[...cyclingToursCarousel, ...cyclingToursCarousel].map((tour, index) => (
                  <motion.div
                    key={`${tour.id}-${index}`}
                    className="carousel-slide"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={tour.slug}
                      className="group relative block w-[350px] h-[500px] rounded-2xl overflow-hidden shadow-strong hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent" />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-primary-300 transition-colors">
                            {tour.title}
                          </h3>
                          {tour.subtitle && (
                            <p className="text-xl text-primary-200 mb-4">
                              {tour.subtitle}
                            </p>
                          )}
                          <p className="text-base text-neutral-200 mb-4 font-medium">
                            {tour.date}
                          </p>
                          
                          {tour.details && (
                            <div className="mt-4 space-y-2">
                              <ul className="text-sm text-neutral-200 space-y-1">
                                {tour.details.slice(0, 4).map((detail, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-primary-400 mt-1">•</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16 lg:py-24 bg-primary-50" aria-labelledby="categories-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 id="categories-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
              Featured Categories
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover our curated collection of premium outdoor gear
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                <Link
                  to={`/${category.slug}`}
                  className="group relative block rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.5 }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-neutral-200 line-clamp-2 mb-3">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary-300 font-medium group-hover:text-primary-200 transition-colors">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Tours Section */}
      <section className="py-16 lg:py-24" aria-labelledby="tours-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 id="tours-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
              Adventure Tours
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Embark on unforgettable journeys across India's most stunning destinations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {adventureTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  {tour.badge && (
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      tour.badge === 'Popular' ? 'bg-primary-600 text-white' : 'bg-secondary-500 text-white'
                    }`}>
                      {tour.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-primary-500 text-primary-500" />
                    <span className="text-sm font-semibold text-neutral-700">{tour.rating}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {tour.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {tour.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {tour.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">
                      ₹{tour.price.toLocaleString('en-IN')}
                    </span>
                    <Link
                      to={`/adventure-tours/${tour.id}`}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-semibold"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear Showcase Section */}
      <section className="py-16 lg:py-24 bg-primary-50" aria-labelledby="gear-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 id="gear-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
              Premium Gear Showcase
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Handpicked gear trusted by professional adventurers
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {gearProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/camping-gear"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              View All Gear
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24" aria-labelledby="why-choose-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 id="why-choose-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Trusted by thousands of adventurers across India
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon]
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 lg:py-24 bg-primary-50" aria-labelledby="blog-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 id="blog-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Tips, guides, and stories from the adventure community
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-neutral-500 mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
