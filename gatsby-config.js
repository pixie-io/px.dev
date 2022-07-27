const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'dev';

require('dotenv')
  .config({
    path: `.env.${activeEnv}`,
  });

module.exports = {
  siteMetadata: {
    title: '',
    titleTemplate: '%s .',
    description: 'A simple and robust monitoring and live-debug platform for distributed environments, designed for developers.',
    author: 'Pixie',
    organisation: 'Pixie Labs',
    googleSiteVerification: 'UGO9cvTv-mu9EiADezhiLENml6FLHzoZ3chp2rgWJ98',
    supportEmail: 'info@pixielabs.ai',
    address: '333 Bryant St #110, San Francisco, CA 94107',
    phone: '(415) 429-8361',
    twitterUsername: '@pixie_run',
    url: 'https://px.dev',
    siteUrl: 'https://px.dev',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-W8Q4XLK',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-scroll-reveal',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'illustrations',
        path: `${__dirname}/src/illustrations`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'homepage-small-icons',
        path: `${__dirname}/src/images/homepage/icons`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'homepage-large-icons',
        path: `${__dirname}/src/images/homepage/large-icons`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 645,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#132E38',
        theme_color: '#132E38',
        display: 'minimal-ui',
        icon: 'src/images/p_circle_big.png', // This path is relative to the root of the site.
        include_favicon: false,
      },
    },
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        prodKey: process.env.SEGMENT_PRODUCTION_WRITE_KEY,
        devKey: process.env.SEGMENT_DEV_WRITE_KEY,
        trackPage: true,
        delayLoad: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: ['node_modules', './src/scss'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Manrope:300,400,400i,700,500',
          'Source Code Pro:400',
          'Roboto Mono',
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: 'https://px.dev',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-material-ui',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-hubspot',
      options: {
        trackingCode: '8260834',
        respectDNT: true,
        productionOnly: false,
      },
    },
  ],
};
