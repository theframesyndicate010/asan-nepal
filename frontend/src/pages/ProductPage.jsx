import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { resolveImage } from '../utils/shopData'

const ProductPage = ({ productFilters, productCatalog }) => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProducts = useMemo(
    () =>
      activeFilter === 'All'
        ? productCatalog
        : productCatalog.filter((product) => product.category === activeFilter),
    [activeFilter, productCatalog],
  )

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

      <div className="product-groups">
        {groupedProductEntries.map(([heading, products]) => (
          <section key={heading} className="product-group scroll-reveal reveal-up" data-animate="true">
            <h3 className="product-heading">{heading}</h3>
            <div className="product-grid">
              {products.map((product) => (
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
                      <p className="product-spec">{product.spec}</p>
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
                      <p className="product-spec">{product.spec}</p>
                      <div className="product-meta">
                        <p className="product-price">{product.price}</p>
                      </div>
                    </div>
                  </article>
                )
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default ProductPage
