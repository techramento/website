// You can add any STATIC data you want here
import pkg from '../package.json'

export default {
  legal: {
    copyright_year: new Date().getFullYear(),
    corporate_mailing_address_1: '9633 Spring Breeze Ct.',
    corporate_mailing_address_2: null,
    corporate_mailing_city: 'Elk Grove',
    corporate_mailing_postal_code: '95757',
    corporate_mailing_state: 'CA',
    corporate_name: 'Techramento',
    corporate_physical_address_1: '9633 Spring Breeze Ct.',
    corporate_physical_address_2: null,
    corporate_physical_city: 'Elk Grove',
    corporate_physical_postal_code: '95757',
    corporate_physical_state: 'CA'
  },
  mainNav: [
    {
      description: 'Check out the various organizations that make up the SacTech community.',
      hero: '/assets/images/community/hero@2x.jpg',
      label: 'Community',
      path: '/community',
      title: 'Our Community'
    },
    {
      description: 'Discover the many events that we host and facilitate in the Sacramento area.',
      hero: '/assets/images/events/hero@2x.jpg',
      label: 'Events',
      path: '/events',
      title: 'Events'
    },
    {
      description: 'Learn how to join our ranks as stewards of the Sacramento Tech Community.',
      hero: '/assets/images/join/hero@2x.jpg',
      label: 'Join',
      path: '/join',
      title: 'Join Us'
    },
    {
      description: `See how our community leaders are mentoring and training Sacramento's tech scene.`,
      hero: '/assets/images/mission/hero@2x.jpg',
      label: 'Mission',
      path: '/mission',
      title: 'Our Mission'
    }
  ],
  metaTitle: 'Techramento',
  pkg,
  social: {
    facebook: 'techramento',
    github: 'techramento',
    twitter: pkg.twitter,
    website: pkg.homepage
  },
  team: [
    {
      avatarUrl: '/assets/images/team/avatar_dlindahl.jpeg',
      name: 'Derek Lindahl',
      title: 'President'
    },
    {
      avatarUrl: '/assets/images/team/avatar_rjulian.jpeg',
      name: 'Richard Julian',
      title: 'Vice President'
    },
    {
      avatarUrl: '/assets/images/team/avatar_efletcher.jpeg',
      name: 'Emma Fletcher',
      title: 'Treasurer'
    },
    {
      avatarUrl: '/assets/images/team/avatar_aroughani.png',
      name: 'Ash Roughani',
      title: 'Secretary'
    }
  ],
  /* eslint-disable max-len */
  testimonials: [
    {
      avatar_url: '/assets/images/testimonials/avatar_oif_vet.jpeg',
      content: `
        It takes a surprising amount of financial support to run a community-focused technology meetup. We rely heavily on forming relationships with outside sponsors to provide us with meetup spaces, food and drinks, and marketing materials like stickers. Techramento provides us with the ability for us to draw upon a larger collective of sponsors, allowing us to focus on running a successful event.
      `,
      name: 'Derek Lindahl',
      organization: 'SacJS'
    }
  ]
  /* eslint-enable max-len */
}
