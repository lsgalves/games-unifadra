import styled, { keyframes } from 'styled-components'

const glitchAnimation = keyframes`
  0% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 5% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 10% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 15% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 20% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 25% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 30% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 35% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 40% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 45% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 50% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 55% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 60% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 65% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 70% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 75% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 80% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 85% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 90% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 95% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  } 100% {
    clip: rect(${Math.floor(Math.random() * (150 - 1)) + 1}px, 300px, ${
  Math.floor(Math.random() * (150 - 1)) + 1
}px, 0px);
  }
`

export const GlitchTitle = styled.h1<{ text: string }>`
  color: white;
  font-family: sans-serif;
  font-weight: 800;
  position: relative;
  font-size: 2em;

  &::after,
  &::before {
    color: var(--white-color);
    content: '${({ text }) => text}';
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    animation: ${glitchAnimation} 2s linear infinite alternate-reverse;
  }

  &::before {
    left: 3px;
    text-shadow: 2px 0 var(--red-color);
  }

  &::after {
    left: -3px;
    text-shadow: -2px 0 var(--blue-color);
  }
`
