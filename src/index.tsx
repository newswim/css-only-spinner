import React from 'react'
import { render } from 'react-dom'
import Translate from './Translate'
import { ClipPath } from './ClipPath'
import styled from 'styled-components'
import './index.css'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 20px);
`

const App = () => (
  <Container>
    {/* <Translate size={50} /> */}
    <ClipPath />
  </Container>
)

render(<App />, document.getElementById('root'))
