import React from 'react'
import './flexContainer.scss'

interface FlexContainerRequiredProps {
  children: React.ReactNode
}

interface FlexContainerOptionalProps {
  showBackground: boolean
  orientation: string
  backgroundColor: string
  gap: string
  width: string
  textColor: string
  floating: boolean
  className: string
}

interface FlexContainerProps extends FlexContainerRequiredProps, FlexContainerOptionalProps {}

const FlexContainer = (props: FlexContainerProps): JSX.Element => {
  const { children, showBackground, orientation, backgroundColor, gap, width, textColor, floating, className } = props

  const outerContainerStyle = {
    background: showBackground ? backgroundColor : 'none',
    padding: showBackground ? gap : 0,
    width,
    color: textColor
  }

  return (
    <div className={`${floating ? 'card-container-floating' : 'card-container'} ${className}`} style={outerContainerStyle} >
        <div className="card-container-cards" style={{flexDirection: orientation === 'vertical' ? 'column' : 'row',
    gap}}>
            {children}
        </div>
    </div>
  )
}

FlexContainer.defaultProps = {
  showBackground: false,
  orientation: 'horizontal',
  backgroundColor: 'rgb(40, 0, 0)',
  textColor: 'white',
  gap: '2%',
  width: '100%',
  floating: false,
  className: ''
}

export default FlexContainer
