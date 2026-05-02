import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { fetchProductById } from '../api/products'
import { resolveImage } from '../utils/shopData'
import SpecificationDisplay from '../components/SpecificationDisplay'

const ProductDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const numericId = Number(id)
  const [product, setProduct] = useState(null)
  const [status, setStatus] = useState({ state: 'loading', message: '' })

  useEffect(() => {
    if (!Number.isInteger(numericId)) {
      setStatus({ state: 'error', message: 'Invalid product link.' })
      return
    }

    let isActive = true
    const controller = new AbortController()

    const loadProduct = async () => {
      try {
        const payload = await fetchProductById({ id: numericId, signal: controller.signal })
        if (!isActive) return
        setProduct(payload.product)
        setStatus({ state: 'ready', message: '' })
      } catch (error) {
        if (!isActive || error?.name === 'AbortError') return
        if (error?.status === 404) {
          setProduct(null)
          setStatus({ state: 'error', message: 'Product not found.' })
          return
        }

        setStatus({
          state: 'error',
          message: 'Unable to load product. Please try again.',
        })
      }
    }

    loadProduct()

    return () => {
      isActive = false
      controller.abort()
    }
  }, [numericId])

  const detailProduct = product

  const handleRequestQuote = () => {
    if (!detailProduct) return

    const prefilledMessage = `Hi, I'm interested in the following product:\n\n- Product: ${detailProduct.name}\n- Category: ${detailProduct.category}\n- Specification: ${detailProduct.spec}\n- Price: ${detailProduct.price || 'Contact for price'}\n\nPlease provide more details and availability.`

    navigate('/contact', {
      state: { prefilledMessage },
    })
  }

  return (
    <section className="product-detail mx-auto mt-10 w-full max-w-6xl px-6 md:px-10">
      <div className="section-head scroll-reveal reveal-up" data-animate="true">
        <p className="kicker">Product Details</p>
        <h2 className="section-title">{detailProduct?.name || 'Product Overview'}</h2>
        <p className="section-subtitle">
          Explore pricing, specs, and availability for this ASAN Electronics model.
        </p>
      </div>

      <div className="product-detail-toolbar scroll-reveal reveal-up" data-animate="true">
        <Link to="/product" className="text-link">
          Back to products
        </Link>
        {status.message ? (
          <span className={`detail-status ${status.state}`} role="status">
            {status.message}
          </span>
        ) : null}
      </div>

      {detailProduct ? (
        <div className="product-detail-grid">
          <figure className="product-detail-media tilt-card scroll-reveal reveal-left" data-animate="true">
            <img src={resolveImage(detailProduct.image)} alt={detailProduct.name} />
          </figure>

          <article className="product-detail-card scroll-reveal reveal-right" data-animate="true">
            <div className="detail-header">
              <span className="detail-chip">{detailProduct.category}</span>
              <h3 className="detail-title">{detailProduct.name}</h3>
              <SpecificationDisplay spec={detailProduct.spec} className="detail-spec" hideToggle />
            </div>

            <div className="detail-meta">
              <div>
                <p className="detail-label">Price</p>
                <p className="detail-value">{detailProduct.price || 'Contact for price'}</p>
              </div>
              <div>
                <p className="detail-label">Availability</p>
                <p className={`detail-value ${detailProduct.status === 'In Stock' ? 'in-stock' : 'low-stock'}`}>
                  {detailProduct.status}
                </p>
              </div>
            </div>

            <div className="detail-actions">
              <button
                type="button"
                className="solid-btn"
                onClick={handleRequestQuote}
              >
                Request a quote
              </button>
              <Link to="/product" className="outline-btn">
                Continue shopping
              </Link>
            </div>
          </article>
        </div>
      ) : (
        <div className="product-detail-empty scroll-reveal reveal-up" data-animate="true">
          {status.state === 'loading' ? (
            <p>Loading product details...</p>
          ) : (
            <>
              <p>We could not find this product. Please return to the catalog and try again.</p>
              <Link to="/product" className="solid-btn">
                Browse products
              </Link>
            </>
          )}
        </div>
      )}
    </section>
  )
}

export default ProductDetailPage
