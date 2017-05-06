import Container from './components/Container'
import Content from './components/Content'
import DefaultHeadMeta from './components/DefaultHeadMeta'
import Footer from './components/Footer'
import Header from './components/Header'
import { node } from 'prop-types'
import React from 'react'

const AppContainer = ({ children, ...props }) => (
  <Container {...props}>
    <DefaultHeadMeta/>
    <Header/>
    <Content>
      {children}
    </Content>
    <Footer/>
  </Container>
)

AppContainer.propTypes = {
  children: node
}

export default AppContainer
