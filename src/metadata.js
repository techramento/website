// You can add any STATIC data you want here
import pkg from '../package.json'

export default {
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
      hero: 'https://farm4.staticflickr.com/3949/15589950511_3675b15e59_k.jpg',
      label: 'Events',
      path: '/events',
      title: 'Events'
    },
    {
      description: 'Learn how to join our ranks as stewards of the Sacramento Tech Community.',
      hero: '/assets/images/community/hero@2x.jpg',
      label: 'Join',
      path: '/join',
      title: 'Join Us'
    },
    {
      description: `See how our community leaders are mentoring and training Sacramento's tech scene.`,
      hero: 'https://farm4.staticflickr.com/3949/15589950511_3675b15e59_k.jpg',
      label: 'Mission',
      path: '/mission',
      title: 'Our Mission'
    }
  ],
  metaTitle: 'Techramento',
  pkg,
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
