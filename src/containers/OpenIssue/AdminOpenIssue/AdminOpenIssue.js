import React from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";

const AdminOpenIssue = () => {
	return (
		<div className='flex flex-col md:flex-row'>
			<div className='md:min-h-screen md:w-80 xl:w-96'>
				<Navbar></Navbar>
			</div>

			<div className='flex flex-col justify-between w-full'>
				<div>
					<h1>This is Admin Open Issue Container</h1>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default AdminOpenIssue;
