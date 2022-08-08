import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  build: {
    minify: false
  },
  plugins: [sveltekit()],
  // ssr: { noExternal: true }
  legacy: {
    buildSsrCjsExternalHeuristics: true
  },
  server: {
    fs: {
      allow: ['/']
    }
  }
};

export default config;