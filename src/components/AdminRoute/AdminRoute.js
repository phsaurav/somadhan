import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import "./AdminRoute.css";

const AdminRoute = ({ children, ...rest }) => {
	const user = useSelector((state) => state.data.user);
	const admin = useSelector((state) => state.data.admin);
	const isLoading = useSelector((state) => state.data.isLoading);
	const location = useLocation();

	if (isLoading) {
		return (
			<div className=' flex justify-center items-center min-h-screen mb-40'>
				<div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32'></div>
			</div>
		);
	}
	return user?.email && admin ? (
		children
	) : (
		<Navigate to='/login' replace state={{ path: location.pathname }} />
	);
};

export default AdminRoute;
