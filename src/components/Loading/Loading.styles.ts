/* stylelint-disable declaration-empty-line-before */
/* eslint-disable import/order */
import styled, { css } from 'styled-components';

import { colors } from 'styles';

import { LoadingProps } from './Loading';

const LoadingStyled = styled.div<LoadingProps>`
  ${({ variant }) =>
    variant == 'fullscreen' &&
    css`
      &:before {
        content: '';
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: linear-gradient(
          to right,
          white 0%,
          ${colors.grey[100]} 50%,
          white 100%
        );
        animation: load 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;

        @keyframes load {
          from {
            left: -100%;
          }
          to {
            left: 100%;
          }
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
    align-items: space-between;
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
