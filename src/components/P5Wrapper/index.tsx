import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './p5wrapper.scss'

declare global {
  interface Window {
    p5: any
  }
}

export default function (): React.NamedExoticComponent {
  let canvas: any = null

  function P5Wrapper ({
    sketch = () => {null},
    state = {},
    dispatch = () => {null}
  }): JSX.Element {
    const sketchContainer = useRef(null)

    useEffect(() => {
      // eslint-disable-next-line new-cap
      canvas = new window.p5(sketch, sketchContainer.current)
      canvas.state = state
      canvas.dispatch = dispatch

      return () => {
        canvas.remove()
      }
    }, [dispatch, sketch, state])

    return (
        <div ref={sketchContainer} className="p5-wrapper">
        </div>
    )
  }

  P5Wrapper.propTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func,
    sketch: PropTypes.func
  }

  P5Wrapper.defaultProps = {
    state: {},
    dispatch: () => {null},
    sketch: () => {null}
  }

  return memo(P5Wrapper, (_, nextProps) => {
    canvas.state = { ...nextProps.state }

    return true
  })
}
