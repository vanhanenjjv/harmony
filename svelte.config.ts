import { Config } from '@sveltejs/kit'

import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

const config: Config = {
	preprocess: preprocess({
    postcss: true
  }),
	kit: {
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			base: '/harmony'
		}
	}
}

export default config
