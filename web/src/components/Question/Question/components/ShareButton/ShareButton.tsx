import { useState } from 'react'

import { Icon } from 'src/components/Icon'
import { Tooltip } from 'src/components/Tooltip'

const ShareButton = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false)

  const toggleTooltip = () => {
    setShowTooltip((prevValue) => !prevValue)
  }

  // TODO: Connect Modal for Sharing
  const handleClick = () => {}

  return (
    <button
      className="relative col-span-1 col-start-5 flex items-center justify-center hover:text-punch"
      onClick={handleClick}
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      <Icon name="share" />
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <Tooltip text="Share" isShowing={showTooltip} />
      </div>
    </button>
  )
}

export { ShareButton }
