import { useState, useEffect } from 'react'

/**
 * Check Viewport Width
 * checks if viewport width is equal to the given resolution
 * and returns a boolean
 */
const CheckVW = (resolution = 480) => {
  /**
   * State Definitions
   */
  const [EqualToResolution, setEqualToResolution] = useState(false)

  /**
   * Sets is mobile based on window width
   */
  const handleWindowResize = () => {
    // eslint-disable-next-line no-undef
    window.innerWidth < resolution
      ? setEqualToResolution(true)
      : setEqualToResolution(false)
  }

  /**
   * Initial component logic
   */
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    window.innerWidth < resolution
      ? setEqualToResolution(true)
      : setEqualToResolution(false)
  }, [])

  return EqualToResolution
}

export default CheckVW
