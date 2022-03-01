import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Children, useState } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

import CarouselStyled from './Carousel.styles';

export interface CarouselProps {
  autoPlay?: boolean;
  showIndicator?: boolean;
  enablePeak?: boolean;
  externalControl?: {
    prevText?: string;
    nextText?: string;
  };
}

const PointerEvents = styled.div<{ disabled: boolean }>`
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

const Carousel: React.FC<CarouselProps> = ({ children, ...props }) => {
  props = {
    ...props,
    autoPlay: props.autoPlay ?? false,
    showIndicator: props.showIndicator ?? true,
    enablePeak: props.enablePeak ?? false,
  };

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const next = () => setCurrentSlide((currentSlide) => currentSlide + 1);
  const prev = () => setCurrentSlide((currentSlide) => currentSlide - 1);
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <CarouselStyled>
      <ResponsiveCarousel
        selectedItem={currentSlide}
        showIndicators={props.showIndicator}
        autoPlay={props.autoPlay}
        interval={props.autoPlay ? 3000 : 9999999}
        emulateTouch={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        dynamicHeight={false}
        centerMode={props.enablePeak}
        centerSlidePercentage={90}
        onChange={(index) => setCurrentSlide(index)}
        onSwipeEnd={() => setDisabled(false)}
        onSwipeMove={() => {
          setDisabled(true);
          return true;
        }}
      >
        {
          Children.map(children, (child, index) => (
            <PointerEvents disabled={disabled} key={index}>
              {child}
            </PointerEvents>
          )) as React.ReactElement[]
        }
      </ResponsiveCarousel>
      {props.externalControl && (
        <div className="carousel__external-control">
          <div>
            {currentSlide != 0 && (
              <Button kind="link-small" onClick={prev}>
                <Icon name="arrow-left" size="x-small" color="primary" />
                {props.externalControl.prevText && (
                  <Typography type="body" color="primary">
                    {props.externalControl.prevText}
                  </Typography>
                )}
              </Button>
            )}
          </div>
          <div>
            {Children.count(children) - 1 != currentSlide && (
              <Button kind="link-small" onClick={next}>
                {props.externalControl.nextText && (
                  <Typography type="body" color="primary">
                    {props.externalControl.nextText}
                  </Typography>
                )}
                <Icon name="arrow-right" size="x-small" color="primary" />
              </Button>
            )}
          </div>
        </div>
      )}
    </CarouselStyled>
  );
};

export default Carousel;
