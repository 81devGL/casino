import React, { useState, usetEffect } from 'react';

import 'src/assets/scss/login.scss';
import loginBackground from 'src/assets/images/login-background.png';

const Login = () => {
	return (
		<div id='login-container'>
			<img src={loginBackground} alt='background' />
			<div id='login-form'>
				<form>
					<label for='email'>Email</label>
					<input type='text' name='email' id='email' required />
					<label for='password'>Password</label>
					<input type='password' name='password' id='password' required />
					<div id='submit-register'>
						<div id='button-submit'>
							<span>Submit</span>
						</div>
						<div id='button-register'>
							<span>Register</span>
						</div>
					</div>

					<div id='login-notification'>
						<div id='login-failed' className='d-none'>
							<small>{`<Your email or password not correct./>`}</small>
						</div>
						<div id='register-failed' className='d-none'>
							<small>{`<Your email already exits./>`}</small>
						</div>
						<div id='register-succeed' className='d-none'>
							<small>Thank you for being a member. We will redirect in 5 seconds.</small>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
