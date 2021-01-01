import React from 'react'
import { render } from 'react-dom'
import Translate from './Translate'
import { ClipPath } from './ClipPath'
import styled from 'styled-components'

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  margin-left: 100px;
  margin-top: 100px;
`

const App = () => (
  <Container>
    {/* <Translate size={50} /> */}
    <ClipPath />
  </Container>
)

render(<App />, document.getElementById('root'))
