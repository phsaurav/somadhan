import React from "react";
import logo from "../../assets/logo_title_square.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import useFirebase from "../../hooks/useFirebase";
import { setError, setIsLoading, setUser } from "../../redux/slices/firebaseSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
	const { handleSubmit, register } = useForm();
	let navigate = useNavigate();
	const location = useLocation();
	const redirect_uri = location.state?.from || "/home";
	const dispatch = useDispatch();
	const error = useSelector((state) => state.data.error);

	const { signInUsingGoogle, processLogin } = useFirebase();

	//* Google Sign In Handler Method
	const handleGoogleSignIn = () => {
		signInUsingGoogle()
			.then((res) => {
				const user = res.user;
				dispatch(setUser(user));
				navigate(redirect_uri);
			})
			.catch((error) => {
				dispatch(setError(error.message));
			})
			.finally(() => {
				dispatch(setError(""));
				dispatch(setIsLoading(false));
			});
	};

	const onSubmit = (data) => {
		processLogin(data.email, data.password)
			.then((res) => {
				dispatch(setUser(res.user));
				dispatch(setError(""));
				navigate(redirect_uri);
			})
			.catch((error) => {
				dispatch(setError(error.message));
			})
			.finally(() => {
				window.location.reload();
				dispatch(setError(""));
				dispatch(setIsLoading(false));
			});
	};
	return (
		<div>
			<Link to='/home'>
				<button
					type='button'
					className='bg-white rounded-md p-2 inline-flex items-center justify-center  fixed top-0 right-0 hover:text-brand-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset  text-2xl focus:ring-indigo-500 text-brand-1'
				>
					<MdClose></MdClose>
				</button>
			</Link>
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
