import { motion } from 'framer-motion';
import { remToPx } from 'polished';
import { useState } from 'react';

import { colors, tokens } from 'styles/tokens';

import CircularProgressStyled from './CircularProgress.styles';

export interface CircularProgressProps {
  /** Percent completion of operation in progress */
  percent: number;
  /** Radius */
  radius?: number;
  /** Width of progress */
  strokeWidth?: number;
  /** React element at the center */
  icon?: JSX.Element;
  /** With or without an outer shadow */
  withOuterShadow?: boolean;
  /** With or without an inset shadow */
  withInsetShadow?: boolean;
  /** The color of the progress indicator r */
  indicatorColor?: string | [string, string];
  /** The color of the progress track */
  trackColor?: string;
  /** The thickness of the progress indicator's padding */
  strokePadding?: number;
  /** The color of the progress indicator's padding */
  strokePaddingColor?: string;
  /** Cut the progress padding in the x or y (-ve values hide from left or bottom respectively) */
  strokePaddingCut?: {
    x: number;
    y: number;
  };
}

export const CircularProgress: React.FC<CircularProgressProps> = (props) => {
  props = {
    withOuterShadow: false,
    withInsetShadow: false,
    trackColor: colors.white,
    indicatorColor: colors.grey[700],
    strokePaddingColor: colors.white,
    ...props,
  };

  const [grid] = useState(() => {
    const outerShadowWidth = props.withOuterShadow
      ? parseInt(remToPx(tokens.spacingXxSmall), 10)
      : 0;

    if (!props.radius || !props.strokeWidth)
      return { radius: 0, width: 0, height: 0, origin: { x: 0, y: 0 } };
    return {
      radius: props.radius - props.strokeWidth / 2,
      width: props.radius * 2 + outerShadowWidth * 2,
      height: props.radius * 2 + outerShadowWidth * 2,
      origin: {
        x: props.radius + outerShadowWidth,
        y: props.radius + outerShadowWidth,
      },
    };
  });

  

  return (
    <CircularProgressStyled {...props} grid={grid}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={`${grid.width}px`}
        height={`${grid.height}px`}
        viewBox={`0 0 ${grid.width} ${grid.height}`}
        initial="hidden"
        animate="visible"
      >
        <InnerShadowSVG id="inset-shadow" {...props} />
        <IndicatorGradientSVG id="linear" {...props} />

        {props.strokePadding && (
          <>
            <PaddingFilterSVG id="shadow-filter" height={grid.height} width={grid.width} {...props} />
            <circle
              className="circular-progress__container"
              filter="url(#shadow-filter)"
              cx={grid.origin.x}
              cy={grid.origin.y}
              r={grid.radius}
            />
          </>
        )}

        <circle
          className="circular-progress__bg"
          filter="url(#inset-shadow)"
          cx={grid.origin.x}
          cy={grid.origin.y}
          r={grid.radius}
        />

        <motion.circle
          className="circular-progress__indicator"
          filter="url(#inset-shadow)"
          stroke="url(#linear)"
          cx={grid.origin.x}
          cy={grid.origin.y}
          r={grid.radius}
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: () => ({
              pathLength: 0.7,
              opacity: 1,
              transition: {
                pathLength: { delay: 0, type: "spring", duration: 2, bounce: 0 },
                opacity: { delay: 0, duration: 0.01 },
              }
            })
          }}
          custom={1}
        />

        <foreignObject
          x={grid.origin.x - parseInt(remToPx(tokens.spacingXLarge), 10) / 2}
          y={grid.origin.y - parseInt(remToPx(tokens.spacingXLarge), 10) / 2}
          width={`${remToPx(tokens.spacingXLarge)}`}
          height={`${remToPx(tokens.spacingXLarge)}`}
        >
          {props.icon}
        </foreignObject>
      </motion.svg>
    </CircularProgressStyled>
  );
};

const InnerShadowSVG: React.FC<{id: string} & CircularProgressProps> = (props) => (
  <filter id={props.id} x="-50%" y="-50%" width="200%" height="200%">
    {props.withInsetShadow && <feFlood floodColor={colors.black} />}
    <feComposite operator="out" in2="SourceGraphic" />
    <feGaussianBlur stdDeviation="3" />
    <feComposite operator="atop" in2="SourceGraphic" />
  </filter>
);

const IndicatorGradientSVG: React.FC<{id: string} & CircularProgressProps> = (props) => (
  <linearGradient
    id={props.id}
    gradientTransform={`rotate(${180 + props.percent * 3.6} .5 .5)`}
  >
    {Array.isArray(props.indicatorColor) ? (
      <>
        <stop offset="0%" stopColor={props.indicatorColor[1]} />
        <stop offset="100%" stopColor={props.indicatorColor[0]} />
      </>
    ) : (
      <stop offset="100%" stopColor={props.indicatorColor} />
    )}
  </linearGradient>
);

const PaddingFilterSVG: React.FC<{ id: string, height: number, width: number } & CircularProgressProps> = (props) => (
  <filter
    id={props.id}
    filterUnits="userSpaceOnUse"
    x={`${
      !props.strokePaddingCut
        ? -props.width
        : (props.strokePaddingCut.x > 0 ? '+' : '-') +
          (props.width + Math.abs(props.strokePaddingCut.x)).toString()
    }px`}
    y={`${
      !props.strokePaddingCut
        ? -props.height
        : (props.strokePaddingCut.y > 0 ? '+' : '-') +
          (props.height + Math.abs(props.strokePaddingCut.y)).toString()
    }px`}
    width="200%"
    height="200%"
  >
    <feOffset
      dx="0"
      dy="0"
      in="SourceAlpha"
      result="shadowOffsetOuter1"
    />
    <feGaussianBlur
      stdDeviation="2"
      in="shadowOffsetOuter1"
      result="shadowBlurOuter1"
    />
    <feColorMatrix
      type="matrix"
      in="shadowBlurOuter1"
      result="shadowMatrixOuter1"
      values="0 0 0 0 0
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 0.2 0"
    />
    <feMerge>
      <feMergeNode in="shadowMatrixOuter1" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
);
