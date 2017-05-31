import { array } from 'prop-types'
import { Bit, List, ListItem, Paragraph } from 'stemcell'
import ComponentHeading from '../ComponentHeading'
import Link from '../Link'
import React from 'react'
import Section from '../Section'
import ThemeProvider from '../ThemeProvider'

const style = {
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  link: {
    flex: 1
  },
  root: {
    alignSelf: 'center',
    backgroundColor: 'var(--colorBackground)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }
}

const BeAPartOfUs = (props, { organizations, sponsors }) => (
  <ThemeProvider theme="callout">
    <Bit css={style.root} data-root>
      <Section {...props}>
        <Bit marginVertical={2}>
          <ComponentHeading align="center">
            Be A Part Of Us
          </ComponentHeading>
          <Paragraph size="longPrimer">
            Techramento is committed to providing the Sacramento Tech Community
            with events of outstanding quality. Joining our organization allows
            you to take advantage of the numerous resources that we provide.
            Joining is 100% free and easy to do!
          </Paragraph>
          <Paragraph size="longPrimer">
            In order to qualify for support, groups need to meet all of the
            following guidelines:
          </Paragraph>
          <List ordered={false} size="longPrimer">
            <ListItem>
              Meet to discuss a concrete technological topic, idea, or
              philosophy
            </ListItem>
            <ListItem>
              Three staff members (organizers and/or volunteers)
            </ListItem>
            <ListItem>
              An inclusive Code of Conduct
            </ListItem>
            <ListItem>
              Conduct business in an public, open source manner using common
              tools collaboration tools.
            </ListItem>
            <ListItem>
              Be good community stewards
            </ListItem>
          </List>
          <Paragraph
            as="footer"
            css={style.footer}
            marginTop={1}
            size="longPrimer"
          >
            <Link css={style.link} to="/">
              Become a Member
            </Link>
            <Link css={style.link} to="/posts/2017-05-17-grants/">
              Apply for a Grant
            </Link>
            <Link css={style.link} to="/">
              Engage Your Community
            </Link>
          </Paragraph>
        </Bit>
      </Section>
    </Bit>
  </ThemeProvider>
)

BeAPartOfUs.contextTypes = {
  organizations: array,
  sponsors: array
}

export default BeAPartOfUs
