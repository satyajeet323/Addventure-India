import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingCart } from 'lucide-react'

function ProductCard({ product }) {
  const [isAdding, setIsAdding] = useState(false)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleAddToCart = (e) => {
    if (!product.inStock) return
    setIsAdding(true)
    // Ripple effect
    const button = e.currentTarget
    const ripple = document.createElement('span')
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.classList.add('ripple')
    button.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
      setIsAdding(false)
    }, 600)
  }

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? 'fill-primary-500 text-primary-500'
                : i < rating
                ? 'fill-primary-300 text-primary-300'
                : 'fill-neutral-200 text-neutral-200'
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-neutral-600">{rating.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-primary-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-neutral-900/60 flex items-center justify-center backdrop-blur-sm">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-neutral-600 mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="mb-3">{renderStars(product.rating)}</div>
        {product.reviews && (
          <p className="text-xs text-neutral-500 mb-3">{product.reviews} reviews</p>
        )}
        <div className="flex items-center justify-between mt-auto gap-3">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-neutral-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <motion.button
            type="button"
            disabled={!product.inStock}
            onClick={handleAddToCart}
            whileTap={{ scale: 0.95 }}
            className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 overflow-hidden ${
              product.inStock
                ? 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800'
                : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              {isAdding ? 'Adding...' : product.inStock ? 'Add to Cart' : 'Unavailable'}
            </span>
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}

export default ProductCard
