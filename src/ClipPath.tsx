import React from 'react'
import styled from 'styled-components'

const animationLength = '2.5s'
const dotSize = 100
const animationRadius = dotSize * 2
const lightBlue = '#1050CB'
const darkBlue = '#161C4F'

interface DProps {
  readonly seconds: number
  readonly diameter: number
  readonly colors: {
    main: string
    accent: string
  }
}

const D = styled.div<DProps>`
  ${(props: DProps) => ``}
  position: relative;
  display: flex;
  width: ${animationRadius}px;
  height: ${animationRadius}px;
  border: 1px dotted #f00;
  border-radius: 50%;

  span {
    width: ${dotSize}px;
    height: ${dotSize}px;
    border-radius: 50%;
    position: absolute;
  }

  .N {
    z-index: 1;
    left: ${dotSize / 2}px;
    background: ${lightBlue};
    animation: animateN ${animationLength} ease infinite;
  }

  @keyframes animateN {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(0deg) translateY(-${dotSize}px);
    }
    50% {
      transform: rotate(180deg) translateY(-${animationRadius}px);
    }
    80% {
      transform: rotate(360deg) translateY(-${dotSize}px);
    }
    100% {
      transform: translate(${0}px);
    }
  }

  .E {
    z-index: 2;
    top: ${dotSize / 2}px;
    left: ${dotSize}px;
    background: ${darkBlue};
    animation: animateE ${animationLength} ease infinite;
  }

  @keyframes animateE {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(0deg) translateX(${dotSize}px);
    }
    50% {
      transform: rotate(180deg) translateX(${animationRadius}px);
    }
    80% {
      transform: rotate(360deg) translateX(${dotSize}px);
    }
    100% {
      transform: translate(${0}px);
    }
  }

  .S {
    z-index: 3;
    top: ${dotSize}px;
    left: ${dotSize / 2}px;
    background: ${lightBlue};
    animation: animateS ${animationLength} ease infinite;

    &::after {
      content: '';
      clip-path: circle(50% at 0% 0%);
      display: block;
      background: ${darkBlue};
      height: ${dotSize}px;
      width: ${dotSize}px;

      animation: animateClipPath ${animationLength} ease infinite;
    }
  }

  @keyframes animateClipPath {
    0% {
      clip-path: circle(50% at 0% 0%);
    }

    20% {
      clip-path: circle(50% at -100% -100%);
    }

    80% {
      clip-path: circle(50% at -100% -100%);
    }
    100% {
      clip-path: circle(50% at 0% 0%);
    }
  }

  @keyframes animateS {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(0deg) translateY(${dotSize}px);
    }
    50% {
      transform: rotate(180deg) translateY(${animationRadius}px);
    }
    80% {
      transform: rotate(360deg) translateY(${dotSize}px);
    }
    100% {
      transform: translate(0);
    }
  }

  .W {
    z-index: 0;
    top: ${dotSize / 2}px;
    background: ${darkBlue};
    animation: animateW ${animationLength} ease infinite;
  }

  @keyframes animateW {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(0deg) translateX(-${dotSize}px);
    }
    50% {
      transform: rotate(180deg) translateX(-${animationRadius}px);
    }
    80% {
      transform: rotate(360deg) translateX(-${dotSize}px);
    }
    100% {
      transform: translate(${0}px);
    }
  }
`

interface Props {
  readonly seconds?: number
  readonly diameter?: number
  readonly colors: {
    main?: string
    accent?: string
  }
}

export const ClipPath = ({
  seconds = 2.5,
  diameter = 30,
  colors = { main: darkBlue, accent: lightBlue },
}: Props) => (
  <D>
    <span className="N" />
    <span className="E" />
    <span className="S" />
    <span className="W" />
  </D>
)
