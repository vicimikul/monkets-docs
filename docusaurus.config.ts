import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Check if we're in production (GitHub Pages) or development
const isProd = process.env.NODE_ENV === "production";

const config: Config = {
	title: "Monkets Docs",
	tagline: "Monkets Trading Docs",
	favicon: "img/monkets_logo.svg",

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
				alt: "Monkets Docs Logo",
				src: "img/monkets_logo.svg",
			},
			// Remove the Tutorial item since docs is now the main page
			items: [],
		},

		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
