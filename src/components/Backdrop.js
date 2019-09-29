import React from "react"
import styled from "styled-components"
const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  top: 0;
  left: 0;
`
const backdrop = ({ toggleDrawer }) => {
  return <BackDrop onClick={toggleDrawer} />
}

export default backdrop
