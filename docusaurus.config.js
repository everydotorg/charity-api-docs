// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Every.org Charity API Docs",
  tagline:
    "Use Every.org's free Charity API to create innovative giving experiences.",
  url: "https://docs.every.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "everydotorg", // Usually your GitHub org/user name.
  projectName: "charity-api-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/everydotorg/charity-api-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Every.org Charity API",
        logo: {
          alt: "Every.org Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/everydotorg/",
            label: "Github",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro",
                to: "/docs/intro",
              },
              {
                label: "Authentication",
                to: "/docs/endpoints/authentication"
              },
              {
                label: "Nonprofit Search",
                to: "/docs/endpoints/nonprofit-search"
              },
              {
                label: "Fundraisers",
                to: "/docs/endpoints/fundraisers"
              },
              {
                label: "Donate Button",
                to: "/docs/donate-button"
              },
              {
                label: "Donate Link",
                to: "/docs/donate-link"
              },
              {
                label: "Webhooks",
                to: "/docs/webhooks"
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Every.org.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // See docs at https://docusaurus.io/docs/search#connecting-algolia
      algolia: {
        // The application ID provided by Algolia
        appId: 'NQG6UYJ0XB', 
        // Public API key: it is safe to commit it
        apiKey: 'a8f2018501bed7871adaec4b5fc13fbe',  
        indexName: 'every', 
        contextualSearch: true,
  
        // Optional: path for search page that is enabled by default (`false` to
        // disable it)
        searchPagePath: 'search',
      },

    }),
};

module.exports = config;
