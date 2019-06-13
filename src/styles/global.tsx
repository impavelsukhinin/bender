import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	html,
	body,
	#app {
		font-family: system-ui,-apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
		height: 100%;
		padding: 0;
		margin: 0;
	}

	.public-DraftEditor-content {
		min-height: 150px;
		padding: 10px;
		border-radius: 2px;
		border: 1px solid gray;
		margin-bottom: 10px;
		box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
	}
`
