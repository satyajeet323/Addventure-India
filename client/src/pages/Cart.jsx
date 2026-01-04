import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, ArrowLeft, Trash2, Plus, Minus } from 'lucide-react'
import SEO from '../components/SEO'
import { siteConfig } from '../config/data'

function Cart() {
  // Temporary empty cart state - will be connected to cart functionality later
  const cartItems = []

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <>
      <SEO
        title={`Shopping Cart | ${siteConfig.name}`}
        description="Your shopping cart - Review your items before checkout"
        keywords="shopping cart, checkout, adventure gear"
        url={`${siteConfig.url}/cart`}
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
                <span className="text-primary-800 font-medium" aria-current="page">
                  Shopping Cart
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-primary-800">
            Shopping Cart
          </h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-100 rounded-full mb-6">
                <ShoppingCart className="w-12 h-12 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Your cart is empty</h2>
              <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                Looks like you haven't added any items to your cart yet. Start shopping to add products!
              </p>
              <Link
                to="/trekking-gear/footwear"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Continue Shopping
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg border border-primary-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-primary-200">
                    <h2 className="text-xl font-bold text-neutral-900">
                      Cart Items ({cartItems.length})
                    </h2>
                  </div>
                  <div className="divide-y divide-primary-200">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-6 flex flex-col sm:flex-row gap-4"
                      >
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                            {item.name}
                          </h3>
                          <p className="text-sm text-neutral-600 mb-2">{item.description}</p>
                          <div className="flex items-center justify-between mt-4">
                            <span className="text-xl font-bold text-primary-600">
                              {formatPrice(item.price)}
                            </span>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center border border-primary-300 rounded-lg">
                                <button
                                  type="button"
                                  className="p-2 hover:bg-primary-50 transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="px-4 py-2 min-w-[3rem] text-center font-medium">
                                  {item.quantity || 1}
                                </span>
                                <button
                                  type="button"
                                  className="p-2 hover:bg-primary-50 transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                              <button
                                type="button"
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-lg border border-primary-200 shadow-sm p-6 sticky top-4"
                >
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-neutral-700">
                      <span>Subtotal</span>
                      <span className="font-medium">{formatPrice(0)}</span>
                    </div>
                    <div className="flex justify-between text-neutral-700">
                      <span>Shipping</span>
                      <span className="font-medium">Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between text-neutral-700">
                      <span>Tax</span>
                      <span className="font-medium">Calculated at checkout</span>
                    </div>
                    <div className="border-t border-primary-200 pt-4">
                      <div className="flex justify-between text-lg font-bold text-neutral-900">
                        <span>Total</span>
                        <span>{formatPrice(0)}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 mb-4"
                  >
                    Proceed to Checkout
                  </button>
                  <Link
                    to="/trekking-gear/footwear"
                    className="block text-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Cart

