import { colors } from 'styles/tokens';

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
  }
}

export const CircularProgress: React.FC<CircularProgressProps> = (props) => {
  props = {
    withOuterShadow: false,
    withInsetShadow: false,
    trackColor: colors.white,
    indicatorColor: colors.grey[700],
    strokePaddingColor: colors.white,
    ...props
  }

  return (
    <CircularProgressStyled {...props}>
      <svg className="progress">
        <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
          {props.withInsetShadow && <feFlood floodColor={colors.black} />}
          <feComposite operator="out" in2="SourceGraphic" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite operator="atop" in2="SourceGraphic" />
        </filter>

        <filter
          id="shadow-filter" filterUnits="userSpaceOnUse"
          x={
            `${!props.strokePaddingCut ?
                -102 :
                (props.strokePaddingCut.x > 0 ? '+' : '-') + (102 + (Math.abs(props.strokePaddingCut.x))).toString()
              }px`
            }
          y={
            `${!props.strokePaddingCut ?
                -102 :
                (props.strokePaddingCut.y > 0 ? '+' : '-') + (102 + (Math.abs(props.strokePaddingCut.y))).toString()
              }px`
            }
          width="200%" height="200%"
        >
          <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"/>
          <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
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
            <feMergeNode in="shadowMatrixOuter1"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <linearGradient id="linear" gradientTransform={`rotate(${180 + props.percent * 3.6} .5 .5)`}>
          {Array.isArray(props.indicatorColor) ? (
            <>
              <stop offset="0%" stopColor={props.indicatorColor[1]} />
              <stop offset="100%" stopColor={props.indicatorColor[0]} />
            </>
          ) : (
            <stop offset="100%" stopColor={props.indicatorColor} />
          )}
        </linearGradient>

        {props.strokePadding && <circle className="container" filter="url(#shadow-filter)" />}
        <circle className="bg" filter="url(#inset-shadow)" />
        <circle className="indicator" filter="url(#inset-shadow)" stroke="url(#linear)" />

        <foreignObject>
          {props.icon}
        </foreignObject>
      </svg>
    </CircularProgressStyled>
  );
};