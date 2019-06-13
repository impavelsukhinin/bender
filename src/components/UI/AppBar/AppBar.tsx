import React from 'react'
import { default as UIAppBar } from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { AppBarProps } from './AppBar.d'

const AppBar = ({ title, category }: AppBarProps) => {
	return (
		<UIAppBar position="static">
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="Menu">
				<MenuIcon />
				</IconButton>
				<Typography variant="h5">
					{title}
				</Typography>
				&nbsp;
				({category})
			</Toolbar>
		</UIAppBar>
	)
}

export default AppBar
