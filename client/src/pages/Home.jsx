import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import { categories, featuredProducts, siteConfig } from '../config/data'

function Home() {
  return (
    <>
      <SEO
        title={siteConfig.defaultSeo.title}
        description={siteConfig.defaultSeo.description}
        keywords={siteConfig.defaultSeo.keywords}
        url={siteConfig.url}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-16 lg:py-24 mb-16 lg:mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Gear Up for Your Next Adventure
            </h1>
            <p className="text-lg sm:text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
              Premium outdoor gear and equipment trusted by adventurers across India. From
              mountain peaks to desert trails, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/footwear"
                className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              >
                Shop Footwear
              </Link>
              <Link
                to="/hydration"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              >
                Explore Gear
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="mb-16 lg:mb-20" aria-labelledby="categories-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="categories-heading" className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover our curated collection of premium outdoor gear
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/${category.slug}`}
                className="group relative block rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-display font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-neutral-200 line-clamp-2">{category.description}</p>
                  <span className="inline-block mt-3 text-primary-300 font-medium group-hover:text-primary-200 transition-colors duration-200">
                    Shop Now →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mb-16 lg:mb-20" aria-labelledby="featured-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="featured-heading" className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Handpicked favorites from our collection
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-100 rounded-2xl py-12 lg:py-16 mb-16 lg:mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Join thousands of adventurers who trust Adventure India for their outdoor gear needs
            </p>
            <Link
              to="/footwear"
              className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

