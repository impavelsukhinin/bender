import React from 'react'
import Editor from 'components/Editor'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const Container = styled.div`
	margin: 20px 0;
`

const Admin = () => {
	return (
		<Container>
			<Editor />
			<Button color="primary" variant="contained">
				Save
			</Button>
		</Container>
	)
}

export default Admin
