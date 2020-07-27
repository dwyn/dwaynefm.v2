require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        chunkSize: 10000, // default: 1000
        algoliaQueries: require('@gatsby-theme-flexiblog/core/src/utils/algolia')
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'uqh0q4zh',
        dataset: 'production',
        token: process.env.SANITY_TOKEN
      }
    },
    {
      resolve: '@gatsby-theme-flexiblog/theme-minimal',
      options: {
        sources: {
          sanity: true,
          algolia: true
        }
      }
    }
  ],

  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'dwayne.fm',
    name: 'dwayne. ',
    description: 'Musings. Music. Hieroglyphs.',
    address: '11234 E-Arth-137',
    email: 'email@example.com',
    phone: '+1 (206) 3955298',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/dwyn'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/dwyn'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/dwyn'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
