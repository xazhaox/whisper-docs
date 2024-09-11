// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme";
import Avatar from "../components/Avatar.vue";
import Layout from './Layout.vue'
import "./styles/index.css";

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		DefaultTheme.enhanceApp(ctx);
		ctx.app.component("Avatar", Avatar);
	},
	Layout: Layout
};
