import mdItCustomAttrs from "markdown-it-custom-attrs";
import { defineConfig } from "vitepress";

export default defineConfig({
	locales: {
		root: {
			label: "简体中文",
			lang: "zh-CN",
		},
		en: {
			label: "English",
			lang: "en",
		},
	},
	title: "Whisper",
	lang: "zh-CN",
	description: "Whisper 中文文档",
	head: [
		["meta", { name: "author", content: "HalseySpicy" }],
		["meta", { name: "keywords", content: "whisper, whisper-vue, whisper-docs, Vite, Vue, Vue3, Admin" }],
		["link", { rel: "icon", href: "/logo.svg" }],
		["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" }],
		["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
	],
	markdown: { config: (md) => md.use(mdItCustomAttrs, "image", { "data-fancybox": "gallery" }) },
	lastUpdated: true,
	themeConfig: {
		logo: "/logo.svg",
		algolia: {
			appId: "YMXN47DKMJ",
			apiKey: "8bf7d8e2b7e7b32a95f5aec9aca38a70",
			indexName: "whisper",
		},
		editLink: {
			text: "为此页提供修改建议",
			pattern: "https://github.com/xazhaox/whisper-docs",
		},
		socialLinks: [{ icon: "github", link: "https://github.com/xazhaox/whisper" }],
		footer: {
			message: "MIT License.",
			copyright: "Copyright © 2024 whisper",
		},
		docFooter: {
			prev: "Previous page",
			next: "Next page",
		},
		nav: [
			{
				text: "文档",
				items: [
					{
						text: "Java 文档",
						items: [
							{ text: "指南", link: "/java/guide/", activeMatch: "/guide" },
							{ text: "中间件", link: "/java/components/", activeMatch: "/components" },
							{ text: "架构图", link: "java/architecture/", activeMatch: "/architecture" },
							{ text: "技术线路", link: "java/route/", activeMatch: "/route" },
						],
					},
					{
						text: "whisper-vue 文档",
						items: [
							{ text: "指南", link: "/vue/guide/", activeMatch: "/guide" },
							{ text: "组件", link: "/vue/components/", activeMatch: "/components" },
						],
					},
					{
						text: "历史版本",
						items: [{ text: "24.9.3", link: "https://github.com/xazhaox/whisper-vue" }],
					},
				],
			},
			{
				text: "演示",
				items: [
					{
						text: "whisper-vue",
						items: [
							{ text: "演示版本", link: "https://github.com/xazhaox/whisper" },
							{ text: "Ant Design Vue 版本", link: "https://github.com/xazhaox/whisper-vue" },
						],
					},
					{
						text: "whisper",
						items: [{ text: "Java 后台", link: "https://github.com/xazhaox/whisper" }],
					},
				],
			},
			{
				text: "24.9.3",
				items: [
					{
						text: "更新",
						items: [
							{ text: "whisper 更新日志", link: "https://github.com/xazhaox/whisper" },
							{ text: "whisper-vue 更新日志", link: "https://github.com/xazhaox/whisper-vue" },
						],
					},
					{
						text: "贡献",
						items: [
							{ text: "whisper 贡献", link: "https://github.com/xazhaox/whisper" },
							{ text: "whisper-vue 贡献", link: "https://github.com/xazhaox/whisper-vue" },
						],
					},
				],
			},
			{ text: "🥰 技术支持", link: "/support/index" },
			{ text: "🎉 赞助", link: "/sponsor/index" },
			{ text: "🏡 社区", link: "/community/index" },
			{
				text: "🌈 友情连接",
				items: [
					{
						text: "Java",
						items: [
							{ text: "GitHub", link: "https://github.com/xazhaox/whisper" },
							{ text: "Gitee", link: "https://gitee.com/xaJa/whisper" },
						],
					},
					{
						text: "whisper-vue",
						items: [
							{ text: "GitHub", link: "https://github.com/xazhaox/whisper-vue" },
							{ text: "Gitee", link: "https://gitee.com/xaJa/whisper-vue" },
						],
					},
					{
						text: "文档",
						items: [{ text: "文档源码", link: "https://github.com/xazhaox/whisper-docs" }],
					},
				],
			},
		],

		sidebar: {
			"java/guide/": [
				{
					text: "指南",
					items: [
						{ text: "介绍", link: "/guide/introduce" },
					],
				},
				{
					text: "进阶",
					items: [
						{ text: "部署Java", link: "/guide/standard" },
					],
				},
				{
					text: "其他",
					items: [{ text: "常见问题", link: "/guide/question" }],
				},
			],

			"vue/guide/": [
				{
					text: "指南",
					items: [
						{ text: "介绍", link: "/guide/introduce" },
					],
				},
				{
					text: "进阶",
					items: [
						{ text: "部署vue", link: "/guide/standard" },
					],
				},
				{
					text: "其他",
					items: [{ text: "常见问题", link: "/guide/question" }],
				},
			],
			"/vue/components/": [
				{
					text: "组件",
					items: [
						{ text: "ProTable", link: "/components/proTable" },
						{ text: "SelectIcon", link: "/components/selectIcon" },
						{ text: "SelectFilter", link: "/components/selectFilter" },
						{ text: "TreeFilter", link: "/components/treeFilter" },
						{ text: "Upload", link: "/components/upload" },
						{ text: "ImportExcel", link: "/components/importExcel" },
						{ text: "SvgIcon", link: "/components/svgIcon" },
						{ text: "WangEditor", link: "/components/wangEditor" },
					],
				},
			],
		},
	},
});
