import React from 'react'
import './spacer.scss'

interface SpacerProps {
  height: string
  width: string
}

const Spacer = (props: SpacerProps): JSX.Element => {
  const { height, width } = props

  const spanStyle = {
    width: width === '' ? '100%' : width,
    height: height === '' ? '100%' : height
  }

  return (
    <span className="spacer" style={spanStyle} />
  )
}

Spacer.defaultProps = {
  height: '',
  width: ''
}

export default Spacer
