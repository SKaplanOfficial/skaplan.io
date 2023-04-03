import React from 'react'
import './textSection.scss'

interface TextSectionProps {
  children: React.ReactNode
  title: string
  bodyText: string
  floating: boolean
  className: string
  customStyle: React.CSSProperties | undefined
}

const TextSection = (props: TextSectionProps): JSX.Element => {
  const { children, title, bodyText, floating, className, customStyle } = props

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
    <section className={`text-section ${className} ${floating ? 'text-section-floating' : ''}`} style={customStyle}>
        <header className="text-section-header">{title}</header>
        <p className="text-section-body">{bodyText}</p>
        {children}
    </section>
  )
}

TextSection.defaultProps = {
  children: null,
  title: '',
  bodyText: '',
  floating: false,
  className: '',
  customStyle: undefined
}

export default TextSection
