import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Check if we're in production (GitHub Pages) or development
const isProd = process.env.NODE_ENV === "production";

const config: Config = {
	title: "Monkets Docs",
	tagline: "Monkets Docs",
	favicon: "img/file_no_bg.svg",

	// Set the production url of your site here
	url: isProd ? "https://vicimikul.github.io" : "http://localhost:3000",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: isProd ? "/monkets-docs/" : "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "vicimikul", // Usually your GitHub org/user name.
	projectName: "monkets-docs", // Usually your repo name.

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
			title: "Monkets Docs",
			logo: {
				alt: "Lunipump Docs Logo",
				src: "img/file_no_bg.svg",
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
