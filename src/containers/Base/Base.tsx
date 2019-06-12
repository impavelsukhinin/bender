import React from 'react'
import Container from '@material-ui/core/Container'
import PaperItem from 'components/UI/PaperItem'
import Helmet from 'react-helmet'

import mock from './mock'

const Base = () => {
	return (
		<Container>
			<Helmet>
				<title>Base</title>
			</Helmet>
			<h1>Base</h1>
			<h2>Категория</h2>
			{
				mock.map(({ title, content }) =>
					<PaperItem title={title} key={title}>
						{content}
					</PaperItem>
				)
			}
		</Container>
	)
}

export default Base
