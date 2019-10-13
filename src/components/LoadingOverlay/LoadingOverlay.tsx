import React from 'react'
import Loader from '../Loader'
import LoadingOverlayStyled from './LoadingOverlay.styles'

const LoadingOverlay = () => (
  <LoadingOverlayStyled>
    <div className="loader-wrapper">
      <Loader />
    </div>
  </LoadingOverlayStyled>
)

export default LoadingOverlay
