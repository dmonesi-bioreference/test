import { remToPx } from 'polished';

import { colors, tokens } from 'styles/tokens';

import CircularProgressStyled from './CircularProgress.styles';

export interface CircularProgressProps {
  /** Percent completion of operation in progress */
  percent: number;
  /** Width of progress */
  strokeWidth?: number;
  /** The color of the progress track */
  trackColor?: string;
  /** The color of the progress indicator r */
  indicatorColor?: string | [string, string];
  /** The color of the progress indicator's shadow */
  indicatorShadowColor?: string;
  /** The thickness of the container surrounding progress */
  containerThickness?: number;
  /** The color of the container surrounding progress */
  containerColor?: string;
  /** Container offset in the x and y */
  containerBottomCut?: number
  /** Radius */
  radius?: number;
  /** React element at the center */
  icon?: JSX.Element;
}

export const CircularProgress: React.FC<CircularProgressProps> = (props) => {
  props = {
    strokeWidth: 25.5,
    trackColor: colors.white,
    indicatorColor: colors.teal[700],
    indicatorShadowColor: colors.black,
    containerThickness: parseInt(remToPx(tokens.spacingXxSmall), 10),
    containerColor: colors.black,
    containerBottomCut: 0,
    radius: 37,
    ...props
  }

  return (
    <CircularProgressStyled {...props}>
      <svg className="progress">
        <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feFlood floodColor={props.indicatorShadowColor} />
          <feComposite operator="out" in2="SourceGraphic" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite operator="atop" in2="SourceGraphic" />
        </filter>
        
        <filter
          id="shadow-filter" filterUnits="userSpaceOnUse"
          x="-102px"
          y={`-${102 + (props.containerBottomCut ?? 0)}px`}
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

        <circle className="container" filter="url(#shadow-filter)" />
        <circle className="bg" filter="url(#inset-shadow)" />
        <circle className="indicator" filter="url(#inset-shadow)" stroke="url(#linear)" />

        <foreignObject>
          {props.icon}
        </foreignObject>
      </svg>
    </CircularProgressStyled>
  );
};