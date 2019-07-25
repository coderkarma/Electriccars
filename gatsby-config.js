module.exports = {
    siteMetadata: {
        title: `Starter Template`,
        description: `Sit ut labore perspiciatis at obcaecati? Non optio doloremque dolorem nesciunt dolorem. Repellat eligendi labore voluptatem repellendus fugit Nostrum placeat quibusdam quibusdam obcaecati ducimus Quidem sapiente earum error cum ad.`,
        author: `@codeselfstudy`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `css-gatsby-starter`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#666666`,
                theme_color: `#666666`,
                display: `minimal-ui`,
                icon: `src/images/codeselfstudy-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
