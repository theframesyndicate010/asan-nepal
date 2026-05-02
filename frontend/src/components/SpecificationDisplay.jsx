import { useState } from 'react'

const SpecificationDisplay = ({ spec, className = 'product-spec', hideToggle = false }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!spec) return null

  const displayStyle = !isExpanded && !hideToggle ? {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  } : {}

  return (
    <div className="spec-display-container">
      <p className={className} style={displayStyle}>
        {spec}
      </p>
      {!hideToggle && spec.length > 60 && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-link"
          style={{ 
            marginTop: '4px', 
            fontSize: '0.875rem', 
            fontWeight: '600',
            color: 'var(--accent)',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer'
          }}
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  )
}

export default SpecificationDisplay
