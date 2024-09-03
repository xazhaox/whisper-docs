import { defineConfig, ConfigEnv, UserConfig } from "vite";

// @see: https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	return {
		server: {
			host: "0.0.0.0",
			port: 10837,
			open: true,
			cors: true,
		},
	};
});
