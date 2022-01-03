import React from "react";
import logo from "../../assets/logo_title_square.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
	const { handleSubmit, register } = useForm();
	let navigate = useNavigate();
	const location = useLocation();
	const redirect_uri = location.state?.from || "/home";

	const { setUser, error, setError, setIsLoading, signInUsingGoogle, processLogin } = useFirebase();

	//* Google Sign In Handler Method
	const handleGoogleSignIn = () => {
		signInUsingGoogle()
			.then((res) => {
				const user = res.user;
				setUser(user);
				// saveUser(user.email, user.displayName, user.photoURL, "PUT");
				navigate(redirect_uri);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const onSubmit = (data) => {
		processLogin(data.email, data.password)
			.then((res) => {
				setUser(res.user);
				setError("");
				navigate(redirect_uri);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				window.location.reload();
				setIsLoading(false);
			});
	};
	return (
		<div>
			<div className='flex flex-col justify-center items-center h-screen'>
				<img src={logo} alt='Logo' style={{ height: "150px" }} />

				<form className='mt-4 ' onSubmit={handleSubmit(onSubmit)}>
					<input
						required
						type='email'
						placeholder='Email'
						className='text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5'
						style={{ outline: "none" }}
						{...register("email")}
					/>
					<input
						required
						type='password'
						placeholder='Password'
						className='text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5'
						style={{ outline: "none" }}
						{...register("password")}
					/>
					<button className='text-white text-lg py-2 px-7 w-80 rounded-md bg-brand-3 hover:bg-white border-2 border-brand-3 hover:text-brand-1'>
						Log In
					</button>
					<br />
					<Link to='/register'>
						<p className='text-center pt-3 font-semibold text-brand-2 hover:text-brand-1'>
							New User or Admin?
						</p>
					</Link>
				</form>
				<p className='text-center py-3 font-semibold text-brand-12'>{error}</p>
				<hr className='border-0 w-80 bg-bluegray-300 text-gray-500 h-px'></hr>
				<div className='flex justify-center mb-80'>
					<button
						onClick={handleGoogleSignIn}
						className='rounded-full bg-brand-3 text-white text-2xl p-2 mt-5 hover:bg-white  border-white hover:border-brand-3 border-2 hover:text-brand-3'
					>
						<BsGoogle />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
