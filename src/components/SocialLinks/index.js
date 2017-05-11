import EmailIcon from '../Icons/EmailIcon'
import FacebookIcon from '../Icons/FacebookIcon'
import GitHubIcon from '../Icons/GitHubIcon'
import Link from '../Link'
import List from '../List'
import MeetupIcon from '../Icons/MeetupIcon'
import { number, object, string } from 'prop-types'
import React from 'react'
import { Bit } from 'stemcell'
import TwitterIcon from '../Icons/TwitterIcon'
import WebIcon from '../Icons/WebIcon'

const ICONS = {
  email: EmailIcon,
  facebook: FacebookIcon,
  github: GitHubIcon,
  meetup: MeetupIcon,
  twitter: TwitterIcon,
  website: WebIcon
}

const URLS = {
  email: (address) => `mailto:${address}`,
  facebook: (pageName) => `https://www.facebook.com/${pageName}`,
  github: (username) => `https://github.com/${username}/`,
  meetup: (username) => `https://meetup.com/${username}`,
  twitter: (username) => `https://twitter.com/${username}`,
  website: (url) => url
}

const style = {
  icon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '70%'
  },
  item: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  },
  list: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const SocialLinks = ({
  primaryColor,
  networks,
  secondaryColor,
  size,
  ...props
}) => {
  const networkNames = Object.keys(networks)
  return (
    <List collection={networkNames} css={style.list} {...props}>
      {(networkName) => {
        const Icon = ICONS[networkName]
        return (
          <Bit css={style.item} key={networkName} marginTop={1}>
            <Link inline={false} to={URLS[networkName](networks[networkName])}>
              <Icon
                css={style.icon}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                size={size}
              />
            </Link>
          </Bit>
        )
      }}
    </List>
  )
}

SocialLinks.defaultProps = {
  primaryColor: 'var(--colorIconPrimary)',
  secondaryColor: 'var(--colorIconSecondary)',
  size: 1
}

SocialLinks.propTypes = {
  networks: object,
  primaryColor: string,
  secondaryColor: string,
  size: number
}

export default SocialLinks
