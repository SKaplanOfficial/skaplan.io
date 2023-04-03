import React from 'react'
import './card.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core'

interface CardRequiredProps {
  title: string
  body: string
}

interface CardOptionalProps {
  footer: string
  icon: string | IconDefinition
  percentWidth: number
  backgroundColor: string
  textColor: string
  children: React.ReactNode | null
}

interface CardProps extends CardRequiredProps, CardOptionalProps {}

const Card = (props: CardProps): JSX.Element => {
  const { title, body, footer, icon, percentWidth, backgroundColor, textColor, children } = props

  const divStyle = {
    width: `${percentWidth}%`,
    background: backgroundColor,
    color: textColor
  }

  return (
    <div className="card" style={divStyle}>
      <header className="card-header">
        {props.icon !== ''
          ? (
            <FontAwesomeIcon icon={icon as IconProp} />
            )
          : null}

        <p className="card-title">
            {title}
        </p>
      </header>

      {body !== ''
        ? (
      <p className="card-body">
        {body}
      </p>
          )
        : null }

      <div className="card-children">
        {children}
      </div>

      {footer !== ''
        ? (
        <footer className="card-footer">
            {footer}
        </footer>
          )
        : null}

    </div>
  )
}

Card.defaultProps = {
  footer: '',
  icon: '',
  percentWidth: 30,
  backgroundColor: 'rgb(50, 20, 30)',
  textColor: 'white',
  children: null
}

export default Card
