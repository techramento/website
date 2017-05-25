import { array } from 'prop-types'
import BiColorSection from '../BiColorSection'
import { Bit, Paragraph, Text } from 'stemcell'
import ComponentHeading from '../ComponentHeading'
import Link from '../Link'
import React from 'react'

const style = {
  aside: {
    alignItems: 'center',
    color: 'var(--colorText)',
    display: 'flex',
    flexDirection: 'column'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  link: {
    flex: 1
  },
  stat: {
    fontFamily: 'var(--fontAccent)',
    textTransform: 'uppercase'
  }
}

const HowWeWork = (props, { organizations }) => (
  <BiColorSection
    aside={
      <Bit css={style.aside} width={5}>
        <Text block css={style.stat} size="trafalgar">
          2,000+
        </Text>
        <Text block size="brevier">
          People Empowered
        </Text>

        <Text block css={style.stat} marginTop={1} size="trafalgar">
          {organizations.length}
        </Text>
        <Text block size="brevier">
          Organizations
        </Text>

        <Text block css={style.stat} marginTop={1} size="trafalgar">
          3
        </Text>
        <Text block size="brevier">
          Workshops
        </Text>
      </Bit>
    }
    {...props}
  >
    <ComponentHeading align="left">
      How We Work
    </ComponentHeading>
    <Paragraph size="longPrimer">
      Techramento supports our tech community by providing financial, logistical, and technological assistance to the many user groups located in and around Sacramento as well as running our own events to serve the community at large. We can offer fiscal sponsorship, meetup and event venue assistance, and guidance on maintaining a social media and web presence.
    </Paragraph>
    <Paragraph size="longPrimer">
      Each of our member organization’s events are focused on creating a diverse and inclusive environment aimed at continuing the education of its members and preparing them for a successful and continued career in technology.
    </Paragraph>
    <Bit as="footer" css={style.footer} marginTop={1}>
      <Link css={style.link} inline={false} size="longPrimer" to="/join">
        Become a Member
      </Link>
      <Link css={style.link} inline={false} size="longPrimer" to="/">
        Apply for a Grant
      </Link>
      <Link css={style.link} inline={false} size="longPrimer" to="/">
        Engage Your Community
      </Link>
    </Bit>
  </BiColorSection>
)

HowWeWork.contextTypes = {
  organizations: array
}

export default HowWeWork
