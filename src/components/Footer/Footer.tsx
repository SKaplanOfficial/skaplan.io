import React from 'react'
import './footer.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import FlexContainer from '../FlexContainer/FlexContainer'

interface FooterProps {
  children: React.ReactNode
  title: string
  description: string
  icon: string | IconDefinition
  onClick: (footer: React.ReactNode) => void | never
  customStyle: React.CSSProperties | undefined
  className: string
  link: string
  tooltip: string
}

const Footer = (props: FooterProps): JSX.Element => {
  // const { children, title, description, icon, onClick, customStyle, className, link, tooltip } = props

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
    <footer className="page-footer">
        <FlexContainer >
          {/* <FlexContainer>
            <a href="https://github.com/SKaplanOfficial" className="page-footer-link">GitHub</a>
            <a href="https://www.linkedin.com/in/stephen-kaplan-8168baa2/" className="page-footer-link">LinkedIn</a>
            <a href="https://www.youtube.com/channel/UCvFD3iYysFzkv1IYo1ugFfw" className="page-footer-link">YouTube</a>
            <a href="https://www.instagram.com/helloimsteven_/" className="page-footer-link">Instagram</a>
          </FlexContainer> */}

          <FlexContainer>
            <a href="https://github.com/SKaplanOfficial" className="page-footer-link">GitHub</a>
            <a href="https://www.linkedin.com/in/stephen-kaplan-8168baa2/" className="page-footer-link">LinkedIn</a>
            <a href="https://www.youtube.com/channel/UCvFD3iYysFzkv1IYo1ugFfw" className="page-footer-link">YouTube</a>
            <a href="https://www.instagram.com/helloimsteven_/" className="page-footer-link">Instagram</a>
          </FlexContainer>

            <p className='page-footer-copyright'>Copyright © 2022 Stephen Kaplan</p>
        </FlexContainer>
    </footer>
  )
}

Footer.defaultProps = {
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

export default Footer
