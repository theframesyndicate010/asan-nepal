import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { resolveImage } from '../utils/shopData'
import SpecificationDisplay from '../components/SpecificationDisplay'

const ProductPage = ({ productFilters, productCatalog }) => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('q') || ''

  const filteredProducts = useMemo(() => {
    let products = productCatalog

    if (activeFilter !== 'All') {
      products = products.filter((product) => product.category === activeFilter)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          (product.spec && product.spec.toLowerCase().includes(q)),
      )
    }

    return products
  }, [activeFilter, productCatalog, searchQuery])

  const groupedProductEntries = useMemo(
    () =>
      productFilters
        .filter((filter) => filter !== 'All')
        .map((category) => [category, filteredProducts.filter((product) => product.category === category)])
        .filter(([, products]) => products.length > 0),
    [filteredProducts, productFilters],
  )

  return (
    <section className="product-page mx-auto mt-10 w-full max-w-6xl px-6 md:px-10">
      <div className="section-head scroll-reveal reveal-up" data-animate="true">
        <h2 className="section-title">Product Page</h2>
        <p className="section-subtitle">
          Product lineup grouped by category headings with quick filters for faster browsing.
        </p>
      </div>

      <div className="filter-row scroll-reveal reveal-up" data-animate="true">
        {productFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-chip${activeFilter === filter ? ' active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {searchQuery && (
        <div className="search-results-info mt-6 scroll-reveal reveal-up" data-animate="true">
          <p className="text-muted">
            Showing results for "<strong>{searchQuery}</strong>"
            <Link to="/product" className="text-link ml-3" style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>
              Clear Search
            </Link>
          </p>
        </div>
      )}

      <div className="product-catalog-grid mt-10">
        <div className="product-grid">
          {filteredProducts.map((product) => (
            product.id ? (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card product-card-link tilt-card scroll-reveal reveal-zoom"
                data-animate="true"
                aria-label={`View ${product.name}`}
              >
                <div className="product-thumb">
                  <img src={resolveImage(product.image)} alt={product.name} />
                  <span className="product-badge">{product.category}</span>
                </div>
                <div className="product-content">
                  <h4 className="product-name">{product.name}</h4>
                  <SpecificationDisplay spec={product.spec} hideToggle />
                  <div className="product-meta">
                    <p className="product-price">{product.price}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <article
                key={product.name}
                className="product-card tilt-card scroll-reveal reveal-zoom"
                data-animate="true"
              >
                <div className="product-thumb">
                  <img src={resolveImage(product.image)} alt={product.name} />
                  <span className="product-badge">{product.category}</span>
                </div>
                <div className="product-content">
                  <h4 className="product-name">{product.name}</h4>
                  <SpecificationDisplay spec={product.spec} hideToggle />
                  <div className="product-meta">
                    <p className="product-price">{product.price}</p>
                  </div>
                </div>
              </article>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductPage
