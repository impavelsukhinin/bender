import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import { PaperItemProps } from './PaperItem.d'

const PaperStyled = styled(Paper)`
	padding: 15px;

	& + & {
		margin-top: 20px;
	}
`

const PaperItem = ({ title, children }: PaperItemProps) => (
	<PaperStyled>
		<Typography variant="h5">
			{title}
		</Typography>
		<div dangerouslySetInnerHTML={{ __html: children.toString() }} />
	</PaperStyled>
)

export default PaperItem
