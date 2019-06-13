import React from 'react'
import Container from '@material-ui/core/Container'
import PaperItem from 'components/UI/PaperItem'
import Admin from 'components/Admin'
import AppBar from 'components/UI/AppBar'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import mock from './mock'

const StyledContainer = styled(Container)`
	margin: 30px 0;
`

const Base = () => {
	return (
		<>
			<AppBar title="base" category="css"/>
			<StyledContainer>
				<Helmet>
					<title>Base</title>
				</Helmet>
				<Admin />
				{
					mock.map(({ title, content }) =>
						<PaperItem title={title} key={title}>
							{content}
						</PaperItem>
					)
				}
			</StyledContainer>
		</>
	)
}

export default Base
