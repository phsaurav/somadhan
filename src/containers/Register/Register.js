import React from "react";
import logo from "../../assets/logo_title_square.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveUser, setError, setIsLoading, setUser } from "../../redux/slices/firebaseSlice";
import useFirebase from "../../hooks/useFirebase";
import { MdClose } from "react-icons/md";

const Register = () => {
	const { handleSubmit, register } = useForm();
	const { auth, createNewUser, updateProfile } = useFirebase();
	let navigate = useNavigate();
	const dispatch = useDispatch();
	const error = useSelector((state) => state.data.error);

	const onSubmit = (data) => {
		if (data?.password?.length <= 5) {
			dispatch(setError("Password Must be atleast 6 character long"));
			return;
		}
		if (!/^(?=.*[0-9])/.test(data.password)) {
			dispatch(setError("Password Must have one nubmer!"));
			return;
		}
		if (data.password !== data.password2) {
			dispatch(setError("Password Doesn't match!!"));
			return;
		}
		dispatch(setError(""));
		createNewUser(data.email, data.password)
			.then((res) => {
				const email = data.email;
				const newUser = { email, displayName: data.name };
				dispatch(setUser(newUser));
				const url = "https://i.ibb.co/VmSVPNR/male.png";
				updateProfile(auth.currentUser, {
					displayName: data.name,
					photoURL: url,
				})
					.then(() => {})
					.catch((err) => {});
				dispatch(setError(""));
				dispatch(setUser(res.user));
			})
			.catch((error) => {
				dispatch(setError(error.message));
			})
			.finally(() => {
				navigate("/home");
				dispatch(setIsLoading(false));
				window.location.reload();
			});
		const url2 = "https://i.ibb.co/VmSVPNR/male.png";
		const user = { email: data.email, displayName: data.name, photoURL: url2, role: data.admin };
		dispatch(saveUser({ user, method: "POST" }));
	};

	return (
		<div>
			<Link to='/home'>
				<button
					type='button'
					className='bg-white rounded-md p-2 inline-flex items-center justify-center fixed top-0 right-0 hover:text-brand-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset text-2xl focus:ring-indigo-500 text-brand-1'
				>
					<MdClose></MdClose>
				</button>
			</Link>
			<div className='flex flex-col justify-start items-center pt-20 mb-10'>
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
						<option value='' className='text-center'>
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
						<p className='text-center py-3 font-semibold text-brand-2 hover:text-brand-3'>
							Already have an account
						</p>
					</Link>
				</form>
				<hr className='border-0 w-80 bg-bluegray-300 text-gray-500 h-px'></hr>
				<p className='text-center py-3 font-semibold text-brand-12'>{error}</p>
			</div>
		</div>
	);
};

export default Register;
