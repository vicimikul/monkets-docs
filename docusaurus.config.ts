import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "Lunipump Docs",
	tagline: "Lunitics Trading Docs",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://your-docusaurus-site.example.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.ts"),
					// Make docs the default landing page
					routeBasePath: "/",
				},
				blog: false,
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "Lunipump Docs",
			logo: {
				alt: "Lunipump Docs Logo",
				src: "img/logo-lunipump.svg",
			},
			// Remove the Tutorial item since docs is now the main page
			items: [],
		},
		// footer: {
		// 	style: "dark",
		// 	links: [
		// 		{
		// 			title: "Docs",
		// 			items: [
		// 				{
		// 					label: "Tutorial",
		// 					to: "/docs/introduction",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			title: "Community",
		// 			items: [
		// 				{
		// 					label: "Discord",
		// 					href: "https://discord.gg/epePrJTXrr",
		// 				},
		// 				{
		// 					label: "X",
		// 					href: "https://x.com/lunipump",
		// 				},
		// 			],
		// 		},
		// 	],
		// 	copyright: `Copyright © ${new Date().getFullYear()} Lunipump, Inc. Built with Docusaurus.`,
		// },
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
