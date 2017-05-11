import { array } from 'prop-types'
import BiColorSection from '../BiColorSection'
import { Bit, Paragraph } from 'stemcell'
import ComponentHeading from '../ComponentHeading'
import enhanceCollection from 'phenomic/lib/enhance-collection'
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

const HowWeWork = (props, { collection }) => {
  const orgs = enhanceCollection(collection, {
    filter: {
      class: 'Organization'
    },
    sort: 'short_name'
  })
  return (
    <BiColorSection
      aside={
        <Bit css={style.aside} width={5}>
          <Paragraph css={style.stat} size="trafalgar">
            43
          </Paragraph>
          <Paragraph size="brevier">
            Events
          </Paragraph>

          <Paragraph css={style.stat} marginTop={1} size="trafalgar">
            {orgs.length}
          </Paragraph>
          <Paragraph size="brevier">
            Organizations
          </Paragraph>

          <Paragraph css={style.stat} marginTop={1} size="trafalgar">
            3
          </Paragraph>
          <Paragraph size="brevier">
            Workshops
          </Paragraph>
        </Bit>
      }
      {...props}
    >
      <ComponentHeading align="left">
        How We Work
      </ComponentHeading>
      <Paragraph size="longPrimer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
      <Bit as="footer" css={style.footer} marginTop={1}>
        <Link css={style.link} inline={false} size="longPrimer" to="/">
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
}

HowWeWork.contextTypes = {
  collection: array
}

export default HowWeWork
