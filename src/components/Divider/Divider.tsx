import React from 'react'
import './divider.scss'

interface DividerProps {
  height: string
  backgroundColor: string
  width: string
}

const Divider = (props: DividerProps): JSX.Element => {
  const { height, width, backgroundColor } = props

  const spanStyle = {
    width,
    height,
    backgroundColor
  }

  return (
    <span className="divider" style={spanStyle} />
  )
}

Divider.defaultProps = {
  width: '80%',
  height: '1vmin',
  backgroundColor: 'rgba(255, 255, 255, 0.05)'
}

export default Divider
