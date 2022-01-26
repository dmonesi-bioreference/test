
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactChild, useState } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

import CarouselStyled from './Carousel.styles';

export interface CarouselProps {
  children?: ReactChild[];
  autoPlay?: boolean;
  showIndicator?: boolean;
  enablePeak?: boolean;
  externalControl?: {
    prevText?: string;
    nextText?: string;
  }
}

const Carousel: React.FC<CarouselProps> = (props) => {
  props = {
    ...props,
    autoPlay: props.autoPlay ?? false,
    showIndicator: props.showIndicator ?? true,
    enablePeak: props.enablePeak ?? false,
  };

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const next = () => setCurrentSlide(currentSlide => currentSlide + 1);

  const prev = () => setCurrentSlide(currentSlide => currentSlide - 1);

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
      >
        {props.children}
      </ResponsiveCarousel>
      {props.externalControl && 
        <div className="carousel__external-control">
          <div>
            {currentSlide != 0 &&
              <Button kind="link-small" onClick={prev}>
                <Icon name="arrow-left" size="x-small" color="primary" />
                {props.externalControl.prevText && 
                  <Typography type="body" color="primary">
                    {props.externalControl.prevText}
                  </Typography>
                }
              </Button>
            }
          </div>
          <div>
            {props.children && props.children.length - 1 != currentSlide &&
              <Button kind="link-small" onClick={next}>
                {props.externalControl.nextText &&
                  <Typography type="body" color="primary">
                    {props.externalControl.nextText}
                  </Typography>
                }
                <Icon name="arrow-right" size="x-small" color="primary" />
              </Button>
            }
          </div>
        </div>
      }
    </CarouselStyled>
  );
};

export default Carousel;
