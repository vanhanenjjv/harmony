import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

const basePath = 'GITHUB_WORKFLOW' in process.env ? '/harmony' : undefined

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
    postcss: true
  }),
	kit: {
		target: '#svelte',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			base: basePath
		}
	}
}

export default config
