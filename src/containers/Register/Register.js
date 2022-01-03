import React from "react";
import logo from "../../assets/logo_title_square.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";

const Register = () => {
	const { handleSubmit, register } = useForm();
	const { auth, error, saveUser, setUser, setError, setIsLoading, createNewUser, updateProfile } =
		useFirebase();

	const location = useLocation();
	const redirect_uri = location.state?.from || "/home";
	let navigate = useNavigate();

	const onSubmit = (data) => {
		if (data?.password?.length <= 5) {
			setError("Password Must be atleast 6 character long");
			return;
		}
		if (!/^(?=.*[0-9])/.test(data.password)) {
			setError("Password Must have one nubmer!");
			return;
		}
		if (data.password !== data.password2) {
			setError("Password Doesn't match!!");
			return;
		}
		setError("");
		createNewUser(data.email, data.password)
			.then((res) => {
				setUser(newUser);
				updateProfile(auth.currentUser, {
					displayName: data.name,
					photoURL: url,
				})
					.then(() => {})
					.catch((err) => {});
				setError("");
				navigate(redirect_uri);
				window.location.reload();
				setUser(res.user);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});

		const email = data.email;
		const newUser = { email, displayName: data.name };
		const url = "https://i.ibb.co/VmSVPNR/female.png";
		saveUser(data.email, data.name, url, data.admin, "POST");
	};
	return (
		<div className='w-full h-full fixed block top-0 left-0 bg-white  z-30 '>
			<div className='flex flex-col justify-center items-center h-screen'>
				<img src={logo} alt='Logo' style={{ height: "150px" }} />

				<form className='mt-4 ' onSubmit={handleSubmit(onSubmit)}>
					<input
						required
						type='text'
						placeholder='Name'
						className='text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5'
						style={{ outline: "none" }}
						{...register("name")}
					/>
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
					<input
						required
						type='password'
						placeholder='Confirm Password'
						className='text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5'
						style={{ outline: "none" }}
						{...register("password2")}
					/>
					<select
						className='text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5 pr-5 text-center'
						name='Admin'
						{...register("admin")}
					>
						<option value='user' className='text-center'>
							User Account
						</option>
						<option value='admin' className='text-center'>
							Admin Account
						</option>
					</select>
					<button className='text-white py-2 px-7 w-80 rounded-md bg-brand-3 hover:bg-white border-2 border-brand-3 hover:text-black'>
						Sign Up
					</button>
					<br />
					<Link to='/login'>
						<p className='text-center py-3 font-semibold text-brand-2'>Already have an account</p>
					</Link>
				</form>
				<hr className='border-0 w-80 bg-bluegray-300 text-gray-500 h-px'></hr>
				<p className='text-center py-3 font-semibold text-brand-12 mb-96'>{error}</p>
			</div>
		</div>
	);
};

export default Register;
