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
    }),
};

module.exports = config;
