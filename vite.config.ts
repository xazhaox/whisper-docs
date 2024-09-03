import { defineConfig } from "vite";

export default defineConfig({
	server: {
		host: "0.0.0.0",
    port: 10837,
		open: true,
    cors: true
	},
});
