import { Bit, Image } from 'stemcell'
import HeaderContainer from '../HeaderContainer'
import MainNav from '../MainNav'
import { object } from 'prop-types'
import React from 'react'
import Section from '../Section'

const style = {
  keystone: {
    alignItems: 'center'
  },
  root: {
    position: 'absolute',
    zIndex: 999
  }
}

const Header = (props, { metadata: { pkg } }) => (
  <Section css={style.root} top={0}>
    <HeaderContainer>
      <MainNav>
        <Bit css={style.keystone} maxHeight={6} paddingHorizontal={3}>
          <Image
            alt=""
            css={style.logo}
            height={7}
            src="/assets/techramento_logo.svg"
            width={9}
          />
        </Bit>
      </MainNav>
    </HeaderContainer>
  </Section>
)

Header.contextTypes = {
  metadata: object.isRequired
}

export default Header
