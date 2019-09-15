import React from 'react'
import LoadingOverlayStyled from './LoadingOverlay.styles'
import Loader from '../Loader'

const LoadingOverlay = () => (
  <LoadingOverlayStyled>
    <div className="loader-wrapper">
      <Loader />
    </div>
  </LoadingOverlayStyled>
)

export default LoadingOverlay
