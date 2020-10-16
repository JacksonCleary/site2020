module.exports = {
  siteMetadata: {
    title: `Jackson Web Dev`,
    author: {
      name: `Daniel Jackson`,
      summary: `who lives and works in Bellevue building useful things.`,
    },
    description: `A site to showcase things I have done.`,
    siteUrl: `https://jacksonweb.dev/`,
    social: {
      names: [`LinkedIn`],
      links: [`https://www.linkedin.com/in/daniel-jackson-53700812`],
      colors: [
        // `2867B2`, 
        `211F1F`,
        `F4CBB2`,
        `AD5C51`,
        `9CDAF1`,
        `7DBBE6`
      ]
    },
    accouncement_text: ['Hello', 'There!']
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/collection/`,
        name: `collection`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/collection/projects/portfolio/`,
        name: `portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JacksonWebDev Site`,
        short_name: `jacksonwebdev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./src/styles"],
      },
    },
    `gatsby-plugin-htaccess`
  ]
}
