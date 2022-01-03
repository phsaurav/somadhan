import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_title_dark.png";
import { Transition } from "@headlessui/react";
import { BiUser } from "react-icons/bi";
import "./DashHeader.css";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
	const { user, logOut, admin } = useFirebase();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='md:min-h-screen md:w-96'>
			<div className='bg-brand-1 md:min-h-screen md:w-80 xl:w-96 md:fixed z-50'>
				<nav className='relative z-20'>
					<div className='container mx-auto'>
						<div className='text-black flex flex-col items-center'>
							<NavLink to='/home'>
								<img className='h-7 md:mt-32 md:my-10 my-5' src={logo} alt='logo' />
							</NavLink>

							<div className='flex items-end justify-center'>
								<div>
									{/* <!-- Header Icons --> */}
									{user.displayName ? (
										<div className=' hidden md:flex items-center justify-center mb-5'>
											<div className='h-24 mb-5'>
												<Link to='/mytours'>
													<div className='flex w-44 items-center justify-center h-8 mr-2'>
														<div className='w-5 h-5 m-1 text-xl border-bra mt-4'>
															<BiUser className='text-white text-xl h-5 w-5' />
														</div>
														<p className='font-semibold text-white  py-1 transition duration-300 ease-in-out text-left pl-1 mt-4'>
															{user.displayName.toUpperCase().length > 12
																? user.displayName.split(" ")[0].toUpperCase()
																: user.displayName.toUpperCase()}
														</p>
													</div>
												</Link>
												<div
													onClick={logOut}
													className='cursor-default font-semibold text-brand-1 px-2 py-2 transition duration-300 ease-in-out hover:bg-brand-1 hover:text-white bg-white mb-10 uppercase border-2 shadow-xl mt-5 border-white'
												>
													Sign Out
												</div>
											</div>
										</div>
									) : (
										<div className='hidden md:flex justify-center items-end'>
											{" "}
											<NavLink
												to='/login'
												className='font-semibold text-brand-1 px-8 py-2 transition duration-300 ease-in-out hover:bg-brand-1  hover:text-white bg-white mb-10 uppercase border-2 shadow-xl border-white'
												activeStyle={{
													backgroundColor: "#FFFFFF",
													color: "#1e1e1e",
													width: "full",
												}}
											>
												Sign In
											</NavLink>
										</div>
									)}
									<div className='hidden md:flex flex-col md:w-80 xl:w-96 uppercase text-sm lg:text-base'>
										<NavLink
											to='/home'
											className='font-base  text-bluegray-300 transition duration-500 ease-in-out hover:font-semibold hover:text-white link-underline  px-3 lg:px-6 py-4 link link-underline border-b border-brand-6 text-sm'
											activeStyle={{
												backgroundColor: "#FFFFFF",
												color: "#1e1e1e",
												fontWeight: "600",
											}}
										>
											Home
										</NavLink>
										<NavLink
											to='/explore'
											className='font-base text-bluegray-300 transition duration-500 ease-in-out hover:text-white hover:font-semibold link-underline px-3 lg:px-6 py-4 border-b border-brand-6 text-sm'
											activeStyle={{
												backgroundColor: "#FFFFFF",
												color: "#1e1e1e",
												fontWeight: "600",
											}}
										>
											All Sunglasses
										</NavLink>
									</div>
									{user.displayName && (
										<div>
											<div className='hidden md:flex flex-col md:w-80 xl:w-96 uppercase text-sm lg:text-base'>
												<NavLink
													to='/dashboard'
													className='font-base text-bluegray-300 transition duration-500 ease-in-out hover:text-white link hover:font-semibold link-underline px-3 lg:px-6 py-4 border-b border-white text-sm'
													activeStyle={{
														backgroundColor: "#ececec",
														color: "#1e1e1e",
														fontWeight: "600",
														backgroundSize: "100% 0px",
													}}
												>
													Dash Board
												</NavLink>
											</div>
											{!admin ? (
												<div className='hidden md:flex flex-col md:w-80 xl:w-96 uppercase text-sm lg:text-base'>
													<NavLink
														to='/dashboard/myorders'
														className='font-base text-brand-1transition duration-500 ease-in-out hover:text-black link hover:font-bold link-underline-black px-3 lg:px-6 py-4 border-b border-white bg-brand-11 text-sm'
														activeStyle={{
															backgroundColor: "#FFFFFF",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														My Orders
													</NavLink>
													<NavLink
														to='/dashboard/pay'
														className='font-base text-brand-1transition duration-500 ease-in-out hover:text-black link hover:font-bold link-underline-black px-3 lg:px-6 py-4 border-b border-white bg-brand-11 text-sm'
														style={{
															fontWeight: "500",
														}}
														activeStyle={{
															backgroundColor: "#FFFFFF",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														Pay
													</NavLink>
													<NavLink
														to='/dashboard/addreview'
														className='font-base text-brand-1transition duration-500 ease-in-out hover:text-black link hover:font-bold link-underline-black px-3 lg:px-6 py-4 border-b border-white bg-brand-11 text-sm'
														style={{
															fontWeight: "500",
														}}
														activeStyle={{
															backgroundColor: "#FFFFFF",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														Add Review
													</NavLink>
												</div>
											) : (
												<div className='hidden md:flex flex-col md:w-80 xl:w-96 uppercase text-sm lg:text-base'>
													<NavLink
														to='/dashboard/allorders'
														className='font-base text-brand-1transition duration-500 ease-in-out hover:text-black link hover:font-bold link-underline-black px-3 lg:px-6 py-4 border-b border-white bg-brand-11 text-sm'
														style={{
															fontWeight: "500",
														}}
														activeStyle={{
															backgroundColor: "#FFFFFF",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														Manage All Orders
													</NavLink>
													<NavLink
														to='/dashboard/manageproduct'
														className='font-base text-brand-1transition duration-500 ease-in-out hover:text-black link hover:font-bold link-underline-black px-3 lg:px-6 py-4 border-b border-white bg-brand-11 text-sm'
														style={{
															fontWeight: "500",
														}}
														activeStyle={{
															backgroundColor: "#FFFFFF",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														Manage All Products
													</NavLink>
													<NavLink
														to='/dashboard/addproduct'
														className='font-base text-brand-1transition duration-500 ease-in-out hover:text-black link hover:font-bold link-underline-black px-3 lg:px-6 py-4 border-b border-white bg-brand-11 text-sm'
														style={{
															fontWeight: "500",
														}}
														activeStyle={{
															backgroundColor: "#FFFFFF",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														Add a Product
													</NavLink>
													<NavLink
														to='/dashboard/addadmin'
														className='font-base text-brand-1transition duration-500 ease-in-out hover:text-black link hover:font-bold link-underline-black px-3 lg:px-6 py-4 border-b border-white bg-brand-11 text-sm'
														style={{
															fontWeight: "500",
														}}
														activeStyle={{
															backgroundColor: "#FFFFFF",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														Make Admin
													</NavLink>
												</div>
											)}
										</div>
									)}
								</div>
							</div>

							<div className='-mr-2 md:hidden flex absolute right-5 top-2'>
								<button
									onClick={() => setIsOpen(!isOpen)}
									type='button'
									className='bg-white inline-flex items-center justify-center p-1 rounded-xl text-brand-1 transition duration-300 ease-in-out hover:text-white border-2 border-white hover:bg-brand-1 focus:outline-none mt-2 '
									aria-controls='mobile-menu'
									aria-expanded='false'
								>
									<span className='sr-only'>Open main menu</span>
									{!isOpen ? (
										<svg
											className='block h-6 w-6'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M4 6h16M4 12h16M4 18h16'
											/>
										</svg>
									) : (
										<svg
											className='block h-6 w-6'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>

					<Transition
						show={isOpen}
						enter='transition ease-out duration-100 transform'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='transition ease-in duration-75 transform'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						{(ref) => (
							<div className='md:hidden ' id='mobile-menu'>
								<div ref={ref} className=' pt-2   text-center mx-auto bg-brand-1'>
									<NavLink
										to='/home'
										className='font-semibold text-white hover:bg-white hover:text-brand-2 block px-3   text-base w-full border-b border-brand-2 py-3'
										activeStyle={{
											backgroundColor: "#FFFFFF",
											color: "#000000",
											fontWeight: "600",
											backgroundSize: "100% 0px",
										}}
									>
										Home
									</NavLink>
									<NavLink
										to='/explore'
										className='font-semibold text-white hover:bg-white hover:text-brand-2 block px-3  text-base w-full border-b border-brand-2 py-3'
										activeStyle={{
											backgroundColor: "#FFFFFF",
											color: "#000000",
											fontWeight: "600",
											backgroundSize: "100% 0px",
										}}
									>
										All Sunglasses
									</NavLink>

									{user.displayName ? (
										<div className='pt-2   text-center mx-auto bg-brand-1'>
											<NavLink
												to='/dashboard'
												className='font-semibold text-brand-1 hover:bg-white hover:text-brand-2 block px-3 text-base w-full border-b border-brand-2 py-3 bg-brand-11'
												activeStyle={{
													backgroundColor: "#FFFFFF",
													color: "#000000",
													fontWeight: "700",
													backgroundSize: "100% 0px",
												}}
											>
												Dashboard
											</NavLink>
											{!admin ? (
												<div className='flex items-center flex-col'>
													<NavLink
														to='/dashboard/myorders'
														className='font-semibold text-brand-1 hover:bg-white hover:text-brand-2 block px-3 text-base w-full border-b border-brand-2 py-3 bg-white'
														activeStyle={{
															backgroundColor: "#A1A1AA",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														My Orders
													</NavLink>
													<NavLink
														to='/dashboard/pay'
														className='font-semibold text-brand-1 hover:bg-white hover:text-brand-2 block px-3 text-base w-full border-b border-brand-2 py-3 bg-white'
														activeStyle={{
															backgroundColor: "#A1A1AA",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														Pay
													</NavLink>
													<NavLink
														to='/dashboard/addreview'
														className='font-semibold text-brand-1 hover:bg-white hover:text-brand-2 block px-3 text-base w-full border-b border-brand-2 py-3 bg-white'
														activeStyle={{
															backgroundColor: "#A1A1AA",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														Add Review
													</NavLink>
												</div>
											) : (
												<div className='flex items-center flex-col'>
													<NavLink
														to='/dashboard/allorders'
														className='font-semibold text-brand-1 hover:bg-white hover:text-brand-2 block px-3 text-base w-full border-b border-brand-2 py-3 bg-white'
														activeStyle={{
															backgroundColor: "#A1A1AA",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														Manage All Orders
													</NavLink>

													<NavLink
														to='/dashboard/manageproduct'
														className='font-semibold text-brand-1 hover:bg-white hover:text-brand-2 block px-3 text-base w-full border-b border-brand-2 py-3 bg-white'
														activeStyle={{
															backgroundColor: "#A1A1AA",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														Manage All Products
													</NavLink>
													<NavLink
														to='/dashboard/addproduct'
														className='font-semibold text-brand-1 hover:bg-white hover:text-brand-2 block px-3 text-base w-full border-b border-brand-2 py-3 bg-white'
														activeStyle={{
															backgroundColor: "#A1A1AA",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														Add a Product
													</NavLink>
													<NavLink
														to='/dashboard/addadmin'
														className='font-semibold text-brand-1 hover:bg-white hover:text-brand-2 block px-3 text-base w-full border-b border-brand-2 py-3 bg-white'
														activeStyle={{
															backgroundColor: "#A1A1AA",
															color: "#000000",
															fontWeight: "600",
															backgroundSize: "100% 0px",
														}}
													>
														Make Admin
													</NavLink>
												</div>
											)}

											<button
												onClick={logOut}
												className='font-semibold text-white hover:bg-white hover:text-brand-2 block px-3  text-base w-full border-b border-brand-2 py-3'
											>
												Log Out
											</button>
											<div className='flex items-center justify-center h-8  py-6 bg-brand-1 w-full mr-5'>
												<div className='w-5 h-5 m-1 text-xl border-bra '>
													<BiUser className='text-white text-xl h-5 w-5' />
												</div>
												<p className='font-semibold text-white  py-1 transition duration-300 ease-in-out text-left pl-1 text-lg uppercase'>
													{user.displayName}
												</p>
											</div>
										</div>
									) : (
										<div className='flex items-center flex-col'>
											{" "}
											<NavLink
												to='/login'
												className='font-semibold text-white hover:bg-white hover:text-brand-2 block px-3 py-2  text-base w-full uppercase'
											>
												Login
											</NavLink>
										</div>
									)}
								</div>
							</div>
						)}
					</Transition>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
