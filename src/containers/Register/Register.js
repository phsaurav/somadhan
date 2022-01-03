import React from "react";
import logo from "../../assets/logo_title_square.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
	const { handleSubmit, register } = useForm();

	const onSubmit = (data) => {
		console.log(data);
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
						name='Gender'
						{...register("gender")}
					>
						<option value='male' className='text-center'>
							User Account
						</option>
						<option value='female' className='text-center'>
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
				<p className='text-center py-3 font-semibold text-brand-12 mb-96'>Error will be here!!</p>
			</div>
		</div>
	);
};

export default Register;
