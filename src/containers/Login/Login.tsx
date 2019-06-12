import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Input, { InputProps } from '@material-ui/core/Input'
import ErrorSnack from 'components/UI/ErrorSnack'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const StyledInput: React.ComponentType<InputProps> = styled(Input)`
	width: 250px;
	margin-bottom: 15px;
`

const Login = () => {
	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [error, setError] = useState({ show: false, message: '' })

	const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault()
		setError({ show: true, message: 'Ошибка логина!!!!!!&&&&&' })
	}

	const onChangeLoginHandler = (e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.currentTarget.value)
	const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
	const onErrorCloseHandler = () => setError((el) => ({ ...el, ...{ show: false } }))

	return (
		<Form onSubmit={onSubmitHandler}>
			<Helmet>
				<title>Login</title>
			</Helmet>
			<h1>Login</h1>
			<StyledInput value={login} onChange={onChangeLoginHandler} placeholder="Login" autoFocus />
			<StyledInput value={password} onChange={onChangePasswordHandler} placeholder="Password" type="password" />
			<Button variant="contained" type="submit">
				Enter
			</Button>

			<ErrorSnack message={error.message} open={error.show} handleClose={onErrorCloseHandler} />
		</Form>
	)
}

export default Login
