import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, X } from 'lucide-react'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import { footwearProducts, siteConfig } from '../config/data'

function Footwear() {
  const [priceRange, setPriceRange] = useState([149, 1699])
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [openFilters, setOpenFilters] = useState({
    color: true,
    size: true,
    brand: true,
    quantity: false,
  })
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Extract unique values for filters
  const allColors = useMemo(() => {
    const colors = new Set()
    footwearProducts.forEach((product) => {
      if (product.color) {
        product.color.split('/').forEach((c) => colors.add(c.trim()))
      }
    })
    return Array.from(colors).sort()
  }, [])

  const allSizes = useMemo(() => {
    const sizes = new Set()
    footwearProducts.forEach((product) => {
      if (product.size) {
        product.size.forEach((s) => sizes.add(s))
      }
    })
    return Array.from(sizes).sort()
  }, [])

  const allBrands = useMemo(() => {
    const brands = new Set()
    footwearProducts.forEach((product) => {
      if (product.brand) brands.add(product.brand)
    })
    return Array.from(brands).sort()
  }, [])

  // Filter products
  const filteredProducts = useMemo(() => {
    return footwearProducts.filter((product) => {
      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false
      }

      // Color filter
      if (selectedColors.length > 0) {
        const productColors = product.color?.split('/').map((c) => c.trim()) || []
        if (!selectedColors.some((color) => productColors.includes(color))) {
          return false
        }
      }

      // Size filter
      if (selectedSizes.length > 0) {
        if (!selectedSizes.some((size) => product.size?.includes(size))) {
          return false
        }
      }

      // Brand filter
      if (selectedBrands.length > 0) {
        if (!selectedBrands.includes(product.brand)) {
          return false
        }
      }

      return true
    })
  }, [priceRange, selectedColors, selectedSizes, selectedBrands])

  const toggleFilter = (filterName) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }))
  }

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    )
  }

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    )
  }

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  const clearFilters = () => {
    setPriceRange([149, 1699])
    setSelectedColors([])
    setSelectedSizes([])
    setSelectedBrands([])
  }

  const FilterSection = ({ title, filterKey, children }) => (
    <div className="border-b border-primary-200 pb-4 mb-4">
      <button
        type="button"
        onClick={() => toggleFilter(filterKey)}
        className="w-full flex items-center justify-between text-left mb-3"
      >
        <h3 className="font-semibold text-primary-800 uppercase text-sm">{title}</h3>
        {openFilters[filterKey] ? (
          <ChevronUp className="w-4 h-4 text-primary-600" />
        ) : (
          <ChevronDown className="w-4 h-4 text-primary-600" />
        )}
      </button>
      <AnimatePresence>
        {openFilters[filterKey] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <>
      <SEO
        title={`Footwear | ${siteConfig.name}`}
        description="Premium trekking shoes, hiking boots, and outdoor footwear"
        keywords="trekking shoes, hiking boots, outdoor footwear, adventure shoes"
        url={`${siteConfig.url}/trekking-gear/footwear`}
      />

      {/* Header */}
      <section className="bg-primary-50 border-b border-primary-200 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-primary-700 hover:text-primary-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <span className="text-primary-500 mx-2">/</span>
              </li>
              <li>
                <Link
                  to="/trekking-gear"
                  className="text-primary-700 hover:text-primary-600 transition-colors"
                >
                  Trekking Gear
                </Link>
              </li>
              <li>
                <span className="text-primary-500 mx-2">/</span>
              </li>
              <li>
                <span className="text-primary-800 font-medium" aria-current="page">
                  Footwear
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-primary-800">
            Footwear
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              {/* Mobile Filter Toggle */}
              <button
                type="button"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden w-full mb-4 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold flex items-center justify-between"
              >
                <span>Filter by</span>
                {showMobileFilters ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {/* Filter Panel */}
              <div className={`lg:block ${showMobileFilters ? 'block' : 'hidden'}`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden bg-white rounded-lg border border-primary-200 p-6 shadow-sm"
                >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-primary-800">Filter by</h2>
                  {(selectedColors.length > 0 ||
                    selectedSizes.length > 0 ||
                    selectedBrands.length > 0 ||
                    priceRange[0] !== 149 ||
                    priceRange[1] !== 1699) && (
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="text-xs text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* Price Range */}
                <div className="border-b border-primary-200 pb-4 mb-4">
                  <h3 className="font-semibold text-primary-800 uppercase text-sm mb-3">
                    Price Range
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary-700 font-medium">₹{priceRange[0]}</span>
                      <span className="text-primary-700 font-medium">₹{priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="149"
                      max="1699"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="149"
                        max="1699"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([
                            Math.min(parseInt(e.target.value) || 149, priceRange[1]),
                            priceRange[1],
                          ])
                        }
                        className="w-full px-2 py-1 border border-primary-300 rounded text-sm"
                      />
                      <input
                        type="number"
                        min="149"
                        max="1699"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([
                            priceRange[0],
                            Math.max(parseInt(e.target.value) || 1699, priceRange[0]),
                          ])
                        }
                        className="w-full px-2 py-1 border border-primary-300 rounded text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Colour Filter */}
                <FilterSection title="Colour" filterKey="color">
                  <div className="space-y-2">
                    {allColors.map((color) => (
                      <label
                        key={color}
                        className="flex items-center cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color)}
                          onChange={() => toggleColor(color)}
                          className="w-4 h-4 text-primary-600 border-primary-300 rounded focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-primary-700 group-hover:text-primary-600">
                          {color}
                        </span>
                      </label>
                    ))}
                  </div>
                </FilterSection>

                {/* Quantity Filter */}
                <FilterSection title="Quantity" filterKey="quantity">
                  <p className="text-sm text-primary-600">Quantity filter coming soon</p>
                </FilterSection>

                {/* Size Filter */}
                <FilterSection title="SIZE" filterKey="size">
                  <div className="space-y-2">
                    {allSizes.map((size) => (
                      <label
                        key={size}
                        className="flex items-center cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(size)}
                          onChange={() => toggleSize(size)}
                          className="w-4 h-4 text-primary-600 border-primary-300 rounded focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-primary-700 group-hover:text-primary-600">
                          {size}
                        </span>
                      </label>
                    ))}
                  </div>
                </FilterSection>

                {/* Brand Filter */}
                <FilterSection title="Brand" filterKey="brand">
                  <div className="space-y-2">
                    {allBrands.map((brand) => (
                      <label
                        key={brand}
                        className="flex items-center cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="w-4 h-4 text-primary-600 border-primary-300 rounded focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-primary-700 group-hover:text-primary-600">
                          {brand}
                        </span>
                      </label>
                    ))}
                  </div>
                </FilterSection>
                </motion.div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-primary-700">
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-primary-700 mb-4">No products found matching your filters.</p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footwear

