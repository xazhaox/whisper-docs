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
			lang: "en-US",
		},
	},
	title: "Whisper",
	lang: "zh-CN",
	description: "Whisper 中文文档",
	cleanUrls: true,
	head: [
		["meta", { name: "author", content: "Zhao.An" }],
		["meta", { name: "keywords", content: "whisper, whisper-vue, whisper-docs, Vite, Vue, Vue3, Admin" }],
		// 将 logo.svg 放在公共目录中，如果设置了 base，则使用 /base/logo.svg
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
		socialLinks: [
			{ icon: "github", link: "https://github.com/xazhaox/whisper" },
			{
				icon: {
					svg: '<svg t="1725377770376" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4233" width="200" height="200"><path d="M512 1021.72444445A509.72444445 509.72444445 0 1 1 512 2.27555555a509.72444445 509.72444445 0 0 1 0 1019.4488889z m257.99338667-566.37667556H480.54272a25.19495111 25.19495111 0 0 0-25.19495111 25.19495111v62.91456c0 13.90819555 11.28675555 25.19495111 25.12213333 25.19495111h176.21902223c13.98101333 0 25.19495111 11.28675555 25.1949511 25.12213334v12.59747555c0 41.72458667-33.78744889 75.51203555-75.51203555 75.51203555H367.23825778a25.19495111 25.19495111 0 0 1-25.12213333-25.12213333V417.62816c0-41.72458667 33.78744889-75.51203555 75.43921777-75.51203555h352.43804445c13.83537778 0 25.12213333-11.28675555 25.12213333-25.19495112v-62.91456a25.19495111 25.19495111 0 0 0-25.12213333-25.19495111h-352.43804445a188.74368 188.74368 0 0 0-188.74368 188.81649778v352.36522667c0 13.90819555 11.28675555 25.19495111 25.19495111 25.19495111h371.22503112a169.88387555 169.88387555 0 0 0 169.95669333-169.88387556V480.54272a25.19495111 25.19495111 0 0 0-25.19495111-25.19495111z" fill="#d81e06" p-id="4234"></path></svg>',
				},
				link: "https://gitee.com/xaJa/whisper",
			},
			{
				icon: {
					svg: '<svg t="1725377842975" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6569" width="200" height="200"><path d="M694.726113 1024h-16.958219a335.964724 335.964724 0 0 1-165.422631-54.074322A336.28469 336.28469 0 0 1 348.842431 1024q-130.866259 3.839597-184.300648-49.914759a100.789417 100.789417 0 0 1-31.996641-65.913079A127.986561 127.986561 0 0 1 178.940271 800.023518a47.035061 47.035061 0 0 0-31.996641 1.919798 63.993281 63.993281 0 0 1-63.99328-6.079362C46.47418 770.906575 41.99465 711.072857 43.914448 665.317662v-5.759396a405.077467 405.077467 0 0 1 98.549653-196.459371 169.90216 169.90216 0 0 1 33.916438-126.066763C195.578524 64.100789 404.516585-3.092155 513.625129 0.107509 619.853975-2.452223 828.792036 64.100789 846.710155 337.032132a168.622295 168.622295 0 0 1 33.596472 126.066763 402.197769 402.197769 0 0 1 98.869619 196.459371v5.759396c2.559731 46.395129-2.239765 107.188745-39.355868 132.146124a66.233046 66.233046 0 0 1-63.99328 2.559732 34.236405 34.236405 0 0 0-31.996641 0 127.986561 127.986561 0 0 1 46.075162 107.828678 100.789417 100.789417 0 0 1-31.99664 65.913079c-31.356708 33.276506-86.710895 50.234725-163.182866 50.234725z m-223.976482-154.863739h80.311567l14.398488 20.157883c12.798656 18.238085 71.672474 34.876338 116.147805 38.395969 82.551332 2.559731 108.148644-18.238085 111.668274-25.277346v-1.599832c2.879698-28.47701-36.156204-42.875498-38.076002-43.515431l-60.793616-22.077682 38.395968-51.834557q8.639093-11.838757 16.318287-23.997481A127.986561 127.986561 0 0 1 883.186325 704.033596a239.33487 239.33487 0 0 0 0-30.396808 316.766739 316.766739 0 0 0-85.750996-156.783538l-17.598152-16.958219 2.559731-24.637413a115.827838 115.827838 0 0 0-7.359228-73.272306l-23.037581-9.918959v-31.99664C744.320906 98.657161 536.66271 96.09743 513.305162 96.09743s-233.255508 2.239765-240.614735 264.932182v31.99664l-23.037581 9.918959a115.827838 115.827838 0 0 0-7.359227 73.272306l2.879697 24.637413-18.238085 16.638253A312.927143 312.927143 0 0 0 139.904369 672.036956a252.773459 252.773459 0 0 0 0 31.99664 129.90636 129.90636 0 0 1 133.745957 56.314087c4.799496 7.679194 9.918959 15.038421 15.358388 22.717615l39.675834 52.794457-60.793617 21.757715s-40.315767 14.718455-37.436069 43.195465v1.599832c3.51963 7.039261 29.436909 27.837077 113.908039 25.277346 42.235565-3.51963 101.109384-20.157883 113.90804-38.395969z" fill="#4C4A58" p-id="6570"></path><path d="M880.306627 463.098895a255.973123 255.973123 0 0 0-1.599832-47.994961 47.355028 47.355028 0 0 0-19.51795 4.799496 645.05227 645.05227 0 0 1-74.552172 31.99664c-214.697457 74.552172-433.23451 29.116943-543.942886-4.799496-47.035061-14.398488-75.192105-26.557211-76.471971-26.877177a50.234725 50.234725 0 0 0-18.558051-4.159564 281.570435 281.570435 0 0 0-1.919799 47.994961c-7.99916 8.959059-18.558051 21.757715-29.756875 37.116103a56.634053 56.634053 0 0 0 10.238925 6.719294 803.755606 803.755606 0 0 0 82.871298 30.076842 1110.603387 1110.603387 0 0 0 325.405833 51.194625 860.389659 860.389659 0 0 0 287.969763-47.994961 780.078092 780.078092 0 0 0 81.911399-34.236405 56.95402 56.95402 0 0 0 8.639093-5.439429 387.159348 387.159348 0 0 0-30.716775-38.395968z" fill="#51C75B" p-id="6571"></path><path d="M344.042935 714.272521a47.994961 47.994961 0 0 1-47.994961-47.99496v-119.667435a47.994961 47.994961 0 0 1 95.989921 0v119.667435a48.314927 48.314927 0 0 1-47.99496 47.99496z" fill="#51C75B" p-id="6572"></path></svg>',
				},
				link: "https://github.com/xazhaox/whisper",
			},
		],
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
						text: "Spring Cloud 文档",
						items: [
							{ text: "指南", link: "/spring/cloud/guide/" },
							{ text: "中间件", link: "/spring/cloud/components/" },
							{ text: "第三方工具", link: "/spring/cloud/tools/" },
							{ text: "架构图", link: "/spring/cloud/architecture/" },
							{ text: "技术线路", link: "/spring/cloud/route/" },
						],
					},
					{
						text: "Spring Boot 文档",
						items: [
							{ text: "指南", link: "/spring/boot/guide/" },
							{ text: "中间件", link: "/spring/boot/components/" },
							{ text: "技术线路", link: "/spring/boot/route/" },
						],
					},
					{
						text: "Vue 文档",
						items: [
							{ text: "指南", link: "/vue/guide/" },
							{ text: "组件", link: "/vue/components/" },
						],
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
						items: [
							{ text: "Spring Cloud", link: "https://github.com/xazhaox/whisper" },
							{ text: "Spring Boot", link: "https://github.com/xazhaox/whisper" },
						],
					},
				],
			},
			{
				text: "🎉 24.9.3",
				items: [
					{
						text: "更新",
						items: [
							{ text: "Spring Cloud 微服务更新日志", link: "https://github.com/xazhaox/whisper" },
							{ text: "Spring Boot 版本更新日志", link: "https://github.com/xazhaox/whisper" },
							{ text: "whisper-vue 更新日志", link: "https://github.com/xazhaox/whisper-vue" },
						],
					},
					{
						text: "贡献",
						items: [
							{ text: "Spring Cloud 微服务贡献", link: "https://github.com/xazhaox/whisper" },
							{ text: "Spring Boot 版本贡献", link: "https://github.com/xazhaox/whisper" },
							{ text: "whisper-vue 贡献", link: "https://github.com/xazhaox/whisper-vue" },
						],
					},
					{
						text: "历史版本",
						items: [{ text: "2024.7.23", link: "https://github.com/xazhaox/whisper-vue" }],
					},
				],
			},
			{ text: "🥰 技术支持", link: "/support/", activeMatch: "/support" },
			{ text: "🧁 赞助", link: "/sponsor/", activeMatch: "/sponsor" },
			{ text: "🏡 社区", link: "/community/", activeMatch: "/community" },
			{
				text: "🌈 友情连接",
				items: [
					{
						text: "Spring Cloud 版本",
						items: [
							{ text: "GitHub", link: "https://github.com/xazhaox/whisper" },
							{ text: "Gitee", link: "https://gitee.com/xaJa/whisper" },
						],
					},
					{
						text: "Spring Boot 版本",
						items: [
							{ text: "GitHub", link: "https://github.com/xazhaox/whisper" },
							{ text: "Gitee", link: "https://gitee.com/xaJa/whisper" },
						],
					},
					{
						text: "Vue 版本",
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
			"/spring/cloud/guide/": [
				{
					text: "指南",
					items: [
						{ text: "介绍", link: "/spring/cloud/guide" },
						{ text: "快速开始", link: "/spring/cloud/guide" },
					],
				},
				{
					text: "进阶",
					items: [{ text: "部署Java", link: "/spring/cloud/guide" }],
				},
				{
					text: "其他",
					items: [{ text: "常见问题", link: "/spring/cloud/guide" }],
				},
			],

			"/spring/boot/guide/": [
				{
					text: "指南",
					items: [
						{ text: "介绍", link: "/spring/boot/guide" },
						{ text: "快速开始", link: "/spring/boot/guide" },
					],
				},
				{
					text: "进阶",
					items: [{ text: "部署Java", link: "/spring/boot/guide" }],
				},
				{
					text: "其他",
					items: [{ text: "常见问题", link: "/spring/boot/guide" }],
				},
			],

			"/vue/guide/": [
				{
					text: "指南",
					items: [
						{ text: "介绍", link: "/vue/guide/introduce" },
						{ text: "快速上手", link: "/vue/guide/" },
						{ text: "目录结构", link: "/vue/guide/catalogue" },
						{ text: "路由、菜单", link: "/vue/guide/router" },
						{ text: "权限管理", link: "/vue/guide/auth" },
						{ text: "网络请求", link: "/vue/guide/request" },
						{ text: "构建、部署", link: "/vue/guide/build" },
					],
				},
				{
					text: "进阶",
					items: [
						{ text: "项目规范", link: "/vue/guide/standard" },
						{ text: "主题配置", link: "/vue/guide/theme" },
						{ text: "布局模式", link: "/vue/guide/layout" },
					],
				},
				{
					text: "其他",
					items: [{ text: "常见问题", link: "/vue/guide/question" }],
				},
			],
			"/vue/components/": [
				{
					text: "组件",
					items: [{ text: "SvgIcon", link: "/vue/guide" }],
				},
			],
		},
	},
});
