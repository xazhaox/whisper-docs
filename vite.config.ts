import { defineConfig, ConfigEnv, UserConfig } from "vite";

// @see: https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: "0.0.0.0",
		open: true,
	},
});
