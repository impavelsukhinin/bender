import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	html,
	body {
		font-family: system-ui,-apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
		height: 100%;
		padding: 0;
		margin: 0;
	}

	#app {
		height: 100%;
	}
`
