import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])
  useEffect(() => {
    function updateSize () {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

const LayoutListener = (props:any) => {
  const [width, height] = useWindowSize()
  if (props.maxWidth && width as number <= props.maxWidth) {
    return props.children
  }
  if (props.maxHeight && height as number <= props.maxHeight) {
    return props.children
  }
  if (props.minWidth && width as number >= props.minWidth) {
    return props.children
  }
  if (props.minHeight && height as number>= props.minHeight) {
    return props.children
  }
  return null
}

LayoutListener.propTypes = {
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number
}

export default LayoutListener
