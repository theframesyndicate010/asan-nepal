import { useState } from 'react'

const SpecificationDisplay = ({ spec, className = 'product-spec', hideToggle = false }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!spec) return null

  const words = spec.split(' ')
  const isTruncated = words.length > 20
  const displayText = isTruncated && !isExpanded && !hideToggle ? words.slice(0, 20).join(' ') + '...' : spec

  return (
    <div>
      <p className={className}>{displayText}</p>
      {isTruncated && !hideToggle && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-link"
          style={{ marginTop: '8px', fontSize: '0.875rem', fontWeight: '500' }}
        >
          {isExpanded ? 'Show less' : 'More'}
        </button>
      )}
    </div>
  )
}

export default SpecificationDisplay
