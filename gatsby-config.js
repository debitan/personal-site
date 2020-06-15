require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `David Matthews - Full Stack Developer & Engineering Manager`,
    // Default title of the page
    siteTitleAlt: `David Matthews - Full Stack Developer & Engineering Manager`,
    // Can be used for e.g. JSONLD
    siteHeadline: `David Matthews - Full Stack Developer & Engineering Manager`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://debitan.dev`,
    // Used for SEO
    siteDescription: `The blog and personal site of David Matthews - Full Stack Developer & Engineering Manager`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/favicon.png`,
    // Twitter Handle
    author: `@ThisIsDMatthews`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `GitHub`,
        url: `https://github.com/debitan`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/ThisIsDMatthews`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/d-matthews/`,
      },
    ],
    // Navigation links
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/debitan`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/ThisIsDMatthews`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/d-matthews/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
