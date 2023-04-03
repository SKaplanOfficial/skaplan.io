import React, { MouseEventHandler } from 'react'
import './button.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core'

interface ButtonProps {
  children: React.ReactNode
  title: string
  description: string
  icon: string | IconDefinition
  onClick: (button: React.ReactNode) => void | never
  customStyle: React.CSSProperties | undefined
  className: string
  link: string
  tooltip: string
}

const Button = (props: ButtonProps): JSX.Element => {
  const { children, title, description, icon, onClick, customStyle, className, link, tooltip } = props

  //   const outerContainerStyle = {
  //     background: showBackground ? backgroundColor : "none",
  //     padding: showBackground ? gap : 0,
  //     width: width,
  //     color: textColor,
  //   }

  //   const innerContainerStyle = {
  //     flexDirection: orientation === "vertical" ? "column" as "column" : "row" as "row",
  //     gap: gap,
  //   }

  return (

    link !== ''
      ? (
        <a href={link} style={customStyle} className={`btn btn-link ${className}`} title={tooltip === '' ? title : tooltip} >
        {icon !== ''
          ? (
            <FontAwesomeIcon icon={icon as IconProp} className="btn-icon" style={title === '' ? { paddingBottom: '20px' } : undefined} />
            )
          : null}

        {title !== ''
          ? (
            <p className="btn-title">{title}</p>
            )
          : null}

        {description !== ''
          ? (
            <p className="btn-description">{description}</p>
            )
          : null}

        {children !== null
          ? (
            <p className="btn-children">{children}</p>
            )
          : null}
        </a>
        )
      : (
        <button onClick={onClick as unknown as MouseEventHandler} style={customStyle} className={`btn ${className}`} title={tooltip === '' ? title : tooltip} >
        {icon !== ''
          ? (
            <FontAwesomeIcon icon={icon as IconProp} className="btn-icon" style={title === '' ? { paddingBottom: '20px' } : undefined} />
            )
          : null}

        {title !== ''
          ? (
            <p className="btn-title">{title}</p>
            )
          : null}

        {description !== ''
          ? (
            <p className="btn-description">{description}</p>
            )
          : null}

        {children !== null
          ? (
            <p className="btn-children">{children}</p>
            )
          : null}
        </button>
        )
  )
}

Button.defaultProps = {
  children: null,
  title: '',
  description: '',
  icon: '',
  onClick: null,
  customStyle: {
    backgroundColor: '#880000',
    color: 'white',
    fontSize: '30px'
  },
  className: '',
  link: '',
  tooltip: ''
}

export default Button
