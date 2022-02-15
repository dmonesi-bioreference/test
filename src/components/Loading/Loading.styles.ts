/* stylelint-disable declaration-empty-line-before */
/* eslint-disable import/order */
import styled from 'styled-components';

import { base, colors } from 'styles';

import { LoadingProps } from './Loading';

const LoadingStyled = styled.div<LoadingProps>`
  ${base};
  height: 100%;
  width: 100%;
  ${({ variant, theme }) =>
    variant == 'shimmer' &&
    `
    background: linear-gradient(
        to right,
        ${theme?.colors?.background || colors.grey[50]} 0%,
        ${theme?.colors?.foreground || colors.grey[100]} 50%,
        ${theme?.colors?.background || colors.grey[50]} 100%
        );
      background-size: 200% 100%;
      animation: 2s shimmer infinite;

      @keyframes shimmer {
        0% {
          background-position: 100% 0;
        }
        100% {
          background-position: -100% 0;
        }
      }
    `}

  h1 {
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  .dna-container {
    width: 50%;
    min-width: 300px;
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ul {
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${colors.green[400]};
    list-style-type: none;

    animation: 3s ease-in-out infinite;
    animation-name: upwards;
  }
  .opposing-set li {
    background-color: ${colors.indigo[800]};
    animation-name: downwards;
  }
  li:nth-child(2) {
    animation-delay: -0.2s;
  }
  li:nth-child(3) {
    animation-delay: -0.4s;
  }
  li:nth-child(4) {
    animation-delay: -0.6s;
  }
  li:nth-child(5) {
    animation-delay: -0.8s;
  }
  li:nth-child(6) {
    animation-delay: -1s;
  }

  @keyframes upwards {
    from {
      transform: translateY(0);
      z-index: 50;
    }
    25% {
      scale: 1.2;
    }
    50% {
      transform: translateY(100px);
    }
    75% {
      scale: scale(0.8);
    }
    to {
      transform: translateY(0);
      z-index: 1;
    }
  }
  @keyframes downwards {
    from {
      transform: translateY(0);
      z-index: 1;
    }
    25% {
      scale: 0.8;
    }
    50% {
      transform: translateY(-100px);
    }
    75% {
      scale: scale(1.2);
    }
    to {
      transform: translateY(0);
      z-index: 50;
    }
  }
`;

export default LoadingStyled;
