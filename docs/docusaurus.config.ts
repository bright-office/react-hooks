import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'React Hooks',
    tagline: 'Easy to use React hooks',
    // favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://bright-office.github.io',
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'bright-office', // Usually your GitHub org/user name.
    projectName: 'React Hooks', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/bright-office/react-hooks',
                },

                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        navbar: {
            title: 'React Hooks',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docsSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    href: 'https://github.com/bright-office/react-hooks',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'Github',
                            to: 'https://github.com/bright-office/react-hooks',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} bright-office. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.gruvboxMaterialLight,
            darkTheme: prismThemes.gruvboxMaterialDark,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
