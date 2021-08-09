import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import path from 'path'
/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    vite: {
      resolve: {
          alias: {
              // these are the aliases and paths to them
              '@components': path.resolve('./src/lib/components'),
              '@lib': path.resolve('./src/lib'),
              '@utils': path.resolve('./src/lib/utils'),
              '@posts': path.resolve('./src/posts')
          }
      }
  }
	},

    preprocess: [preprocess({
        "postcss": true
    }), mdsvex(mdsvexConfig)]
};

export default config;
