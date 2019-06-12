import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent, { SnackbarContentProps } from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import styled from 'styled-components'

import { ErrorSnackProps } from './ErrorSnack.d'

const StyledSnackbarContent: React.ComponentType<SnackbarContentProps> = styled(SnackbarContent)`
	&& {
		display: flex;
		flex-flow: inherit;
		background-color: #d32f2f;
	}
`

const ErrorSnack = ({ message, open, handleClose }: ErrorSnackProps) => (
	<Snackbar
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		open={open}
		autoHideDuration={6000}
		onClose={handleClose}
	>
		<StyledSnackbarContent
			message={message}
			action={[
				<IconButton key="close" aria-label="Close" color="inherit" onClick={handleClose}>
					<CloseIcon />
				</IconButton>,
			]}
		/>
	</Snackbar>
)

export default ErrorSnack
