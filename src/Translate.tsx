// inspo credit: Curtis Andrews, https://codepen.io/candrews
// https://codepen.io/candrews/pen/KzJJmz?editors=1100

import React from 'react'
import styled from 'styled-components'

// TODO: should/can these be non-stringy values?
const animationLength = '5s'
const animationRadius = '100px'
const dotSize = 200
const lightBlue = '#1050CB'
const darkBlue = '#161C4F'

interface Props {
  size: number
}

const Wrapper = styled.div`
  position: relative;
  /* width: ${animationRadius} * 3 + ${dotSize}; */
  /* height: ${dotSize}; */
  /* margin: ${animationRadius} auto; */
  display: inline-block;
  transform-style: preserve-3d;
  transform-origin: center;
  /* perspective: ${animationRadius}; */

  .dot {
    display: inline-block;
    width: ${dotSize}px;
    height: ${dotSize}px;
    border-radius: calc(${dotSize}px / 2);
    background: ${lightBlue};
    position: absolute;
  }

  .dot_1 {
    /* animation: animateDot1 ${animationLength} linear infinite; */
    transform: translate(-${dotSize / 2}px, ${dotSize / 2}px);
    background: ${darkBlue};
  }

  .dot_2 {
    /* animation: animateDot2 ${animationLength} linear infinite; */
    animation-delay: ${animationLength} / 3;
    transform: translate(0, 0);
  }

  .dot_3 {
    /* animation: animateDot3 ${animationLength} linear infinite; */
    transform:
      translate(${dotSize / 2}px, calc(${dotSize}px / 2))
      rotateX(-10deg)
      /* skewX(-1deg) */
      ;

    background: ${darkBlue};
  }

  .dot_4 {
    /* animation: animateDot4 ${animationLength} linear infinite; */
    animation-delay: ${animationLength} / 3;
    /* transform: translate(-${
      dotSize * 2
    }px, calc(${dotSize}px)) rotateZ(180deg) scaleZ(-1); */
    /* top: ${dotSize}; */
    /* left: ${animationRadius}; */
    transform:
      translate(${dotSize / 16}px, ${dotSize}px)
      rotateY(-10deg)
      rotateX(-1deg)
      skewY(-1deg)
    ;
  }

  @keyframes animateDot1 {
    0% {
      transform: rotate(0deg) translateY(-${animationRadius});
    }
    25% {
      transform: rotate(180deg) translateY(-${animationRadius});
    }
    75% {
      transform: rotate(180deg) translateY(-${animationRadius});
    }
    100% {
      transform: rotate(360deg) translateY(-${animationRadius});
    }
  }

  @keyframes animateDot2 {
    0% {
      transform: rotate(-0deg) translateX(-${animationRadius});
    }
    25% {
      transform: rotate(-180deg) translateX(-${animationRadius});
    }
    75% {
      transform: rotate(-180deg) translateX(-${animationRadius});
    }
    100% {
      transform: rotate(-360deg) translateX(-${animationRadius});
    }
  }

  @keyframes animateDot3 {
    0% {
      transform: rotate(0deg) translateX(${animationRadius});
    }
    25% {
      transform: rotate(180deg) translateX(${animationRadius});
    }
    75% {
      transform: rotate(180deg) translateX(${animationRadius});
    }
    100% {
      transform: rotate(360deg) translateX(${animationRadius});
    }
  }

  @keyframes animateDot4 {
    0% {
      transform: rotate(-0deg) translateX(${animationRadius});
    }
    25% {
      transform: rotate(-180deg) translateX(${animationRadius});
    }
    75% {
      transform: rotate(-180deg) translateX(${animationRadius});
    }
    100% {
      transform: rotate(-360deg) translateX(${animationRadius});
    }
  }
`

const Container = styled.div`
  /* width: 100px; */
  margin-top: 100px;
`

export default ({ size }: Props) => (
  <Container>
    <Wrapper>
      <span className="dot dot_1"></span>
      <span className="dot dot_2"></span>
      <span className="dot dot_3"></span>
      <span className="dot dot_4"></span>
    </Wrapper>
  </Container>
)
