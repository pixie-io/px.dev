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
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          'Content-Security-Policy: '
            + "base-uri 'self';"
            + "default-src 'self';"
            + "connect-src 'self' https://api.segment.io https://cdn.segment.io https://stats.g.doubleclick.net https://www.google-analytics.com/j/collect;"
            + "frame-src 'self' https://app.netlify.com;"
            + "font-src 'self' data: https://fonts.gstatic.com;"
            + "form-action 'self';"
            + "img-src 'self' data: https://analytics.twitter.com https://d33wubrfki0l68.cloudfront.net https://t.co https://www.google.com;"
            + "media-src 'self' https://d33wubrfki0l68.cloudfront.net;"
            + "object-src 'none';"
            + "script-src 'self' 'unsafe-inline' https://cdn.segment.io https://d33wubrfki0l68.cloudfront.net https://js.hs-scripts.com/8260834.js https://netlify-cdp-loader.netlify.app/netlify.js https://static.ads-twitter.com/uwt.js https://www.google-analytics.com/analytics.js https://www.googletagmanager.com/gtm.js;"
            + "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;"
            + 'report-to default;'
            + 'report-uri https://6703fcfa5dc750f546d44b0af80c78d5.report-uri.com/r/d/csp/enforce',
          'Permissions-Policy: camera=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), vibrate=()',
          'Report-To: {"group":"default","max_age":31536000,"endpoints":[{"url":"https://6703fcfa5dc750f546d44b0af80c78d5.report-uri.com/a/d/g"}],"include_subdomains":true}',
          'Referrer-Policy: strict-origin-when-cross-origin',
          'X-Content-Type-Options: nosniff',
          'X-Frame-Options: SAMEORIGIN',
          'X-XSS-Protection: 1; mode=block',
        ],
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
