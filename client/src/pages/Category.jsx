import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import { categories, products, siteConfig } from '../config/data'

function Category() {
  const { slug } = useParams()
  const category = categories.find((cat) => cat.slug === slug)

  if (!category) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-display font-bold text-neutral-900 mb-4">Category Not Found</h1>
        <p className="text-lg text-neutral-600 mb-8">The category you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Return Home
        </Link>
      </div>
    )
  }

  const categoryProducts = products[category.slug] || []

  return (
    <>
      <SEO
        title={`${category.name} | ${siteConfig.name}`}
        description={category.description}
        keywords={`${category.name}, outdoor gear, adventure equipment`}
        image={category.image}
        url={`${siteConfig.url}/${category.slug}`}
      />

      {/* Category Header */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-12 lg:py-16 mb-12 lg:mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-primary-200 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-primary-600 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <span className="text-primary-300 mx-2">/</span>
              </li>
              <li>
                <span className="text-white font-medium" aria-current="page">
                  {category.name}
                </span>
              </li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
              {category.name}
            </h1>
            <p className="text-lg sm:text-xl text-primary-50">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section aria-labelledby="products-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {categoryProducts.length > 0 ? (
            <>
              <div className="mb-8 flex items-center justify-between">
                <h2 id="products-heading" className="text-2xl font-display font-bold text-neutral-900">
                  All {category.name}
                </h2>
                <span className="text-neutral-600">
                  {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-neutral-600 mb-8">No products available in this category.</p>
              <Link
                to="/"
                className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Browse Other Categories
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="mt-16 lg:mt-20" aria-labelledby="related-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="related-heading" className="text-2xl font-display font-bold text-neutral-900 mb-8 text-center">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories
              .filter((cat) => cat.id !== category.id)
              .map((relatedCategory) => (
                <Link
                  key={relatedCategory.id}
                  to={`/${relatedCategory.slug}`}
                  className="group block rounded-lg border border-neutral-200 overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                    <img
                      src={relatedCategory.image}
                      alt={relatedCategory.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-neutral-900 mb-2">
                      {relatedCategory.name}
                    </h3>
                    <p className="text-sm text-neutral-600 line-clamp-2 mb-3">
                      {relatedCategory.description}
                    </p>
                    <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                      Shop {relatedCategory.name} →
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Category

