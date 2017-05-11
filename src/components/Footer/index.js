import { Bit, Image, Paragraph } from 'stemcell'
import Link from '../Link'
import { number, object, shape, string } from 'prop-types'
import React from 'react'
import Section from '../Section'
import SocialLinks from '../SocialLinks'
import ThemeProvider from '../ThemeProvider'

const style = {
  content: {
    flex: 1
  },
  legal: {
    color: 'var(--colorText)',
    textAlign: 'center'
  },
  link: {
    textAlign: 'center'
  },
  linkWrapper: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  root: {
    backgroundColor: 'var(--colorBackground)',
    display: 'flex',
    flexDirection: 'column'
  },
  section: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const Footer = (props, { metadata: { legal, social }, theme }) => (
  <ThemeProvider theme="invert">
    <Bit css={style.root} marginTop={3} paddingVertical={2}>
      <Section css={style.section}>
        <Bit marginRight={0}>
          <Image
            alt=""
            css={style.logo}
            fill
            height={5}
            src="/assets/techramento_logo.svg"
            width={8}
          />
          <SocialLinks networks={social}/>
        </Bit>
        <Bit css={style.content}>
          <Paragraph
            css={style.linkWrapper}
            marginHorizontal={7}
            marginTop={1}
            size="longPrimer"
          >
            <Link css={style.link} to="/code-of-conduct">
              Code of Conduct
            </Link>
            <Link css={style.link} to="/contact-us">
              Contact Us
            </Link>
            <Link css={style.link} to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link css={style.link} to="/terms-and-conditions">
              Terms & Conditions
            </Link>
          </Paragraph>
          <Paragraph css={style.legal} marginTop={1} size="minion">
            © {legal.copyright_year} {legal.corporate_name}
          </Paragraph>
        </Bit>
      </Section>
    </Bit>
  </ThemeProvider>
)

Footer.contextTypes = {
  metadata: shape({
    legal: shape({
      copyright_year: number,
      corporate_name: string
    }).isRequired
  }).isRequired,
  theme: object
}

export default Footer
