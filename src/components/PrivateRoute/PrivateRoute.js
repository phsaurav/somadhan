import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./PrivateRoute.css";

const PrivateRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useFirebase();
	const location = useLocation();
	if (isLoading) {
		return (
			<div className=' flex justify-center items-center min-h-screen mb-40'>
				<div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32'></div>
			</div>
		);
	}
	return user.email ? (
		children
	) : (
		<Navigate to='/login' replace state={{ path: location.pathname }} />
	);
};

export default PrivateRoute;
