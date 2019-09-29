import React from "react"
import styled from "styled-components"

const HamburgerWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  cursor: pointer;
  width: 50px;
  height: 50px;
  transition: 0.25s;
  margin-top: 2em;
  margin-right: 2em;
  transition: all 0.25s;

  &:hover {
    transform: scale(1.1);
  }

  span {
    position: absolute;
    display: block;
    height: 3px;
    background: #419eda;
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.25s;
    z-index: 1000;
  }
  &:hover {
    color: #2a6496;
  }

  span:nth-child(1) {
    top: 30%;
  }

  span:nth-child(3) {
    top: 70%;
  }

  &.active span:nth-child(1) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &.active span:nth-child(2) {
    background: rgba(0, 0, 0, 0);
  }
  &.active span:nth-child(3) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  @media (min-width: 769px) {
     {
      display: none;
    }

    &.active {
      display: block;
    }
  }
`

const Hamburger = ({ click, isOpen }) => {
  return (
    <HamburgerWrap onClick={click} className={isOpen ? "active" : ""}>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerWrap>
  )
}

export default Hamburger
