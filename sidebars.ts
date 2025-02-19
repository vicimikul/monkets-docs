import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	tutorialSidebar: [
		"introduction",
		"getting-started",
		"profiles",
		{
			type: "category",
			label: "Trading",
			items: [
				"trading/create-token",
				"trading/bonding-curves",
				"trading/analytics",
				"trading/fees",
			],
		},
		{
			type: "category",
			label: "Rewards",
			items: [
				"rewards/dev-rewards",
				"rewards/buybacks",
				"rewards/referrals",
				"rewards/leaderboards",
			],
		},
		"roadmap",
		{
			type: "html",
			value: "<br/><b>Others</b>",
			className: "sidebar-title",
		},
		{
			type: "link",
			label: "Try the App",
			href: "https://lunipump.xyz",
		},
		{
			type: "link",
			label: "Follow us on Twitter",
			href: "https://twitter.com/lunipump",
		},
		{
			type: "link",
			label: "Join our Discord",
			href: "https://discord.gg/your-discord",
		},
	],

	// But you can create a sidebar manually
	/*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
