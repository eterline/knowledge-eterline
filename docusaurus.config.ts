import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'My knowledge base',
    favicon: 'img/favicon.svg',
    url: 'https://knowledge.eterline.ru',
    baseUrl: '/',
    organizationName: 'EterLine',
    projectName: 'knowledge-eterline',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',



    future: {
        v4: true,
    },

    i18n: {
        defaultLocale: 'ru',
        locales: ['ru'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/eterline',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    editUrl: 'https://github.com/eterline/knowledge-eterline/blob/master',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/logo.png',
        navbar: {
            title: 'by Eterline',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Туториалы 📖',
                },
                {
                    to: '/blog',
                    position: 'left',
                    label: 'Микроблог ',
                },
                {
                    to: 'https://www.eterline.ru/pages/progs.html',
                    position: 'left',
                    label: 'Загрузки ',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Социальные сети',
                    items: [
                        {
                            label: 'Github',
                            to: 'https://github.com/eterline',
                        },
                        {
                            label: 'Telegram',
                            to: 'https://t.me/+KS32COpu-pI5Yzgy',
                        },
                    ],
                },
                {
                    title: 'Другое',
                    items: [
                        {
                            label: 'Основной сайт',
                            to: 'https://www.eterline.ru',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} EterLine knowledges, Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;