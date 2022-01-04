import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const AddIssue = () => {
	return (
		<div className='flex flex-col md:flex-row'>
			<div className='md:min-h-screen md:w-80 xl:w-96'>
				<Navbar></Navbar>
			</div>

			<div className='flex flex-col justify-between w-full'>
				<div className="mx-auto mt-8">
					<h1 className="font-bold uppercase leading-10 text-5xl">Add an issue</h1>
				</div>
				
				<Footer></Footer>
			</div>
		</div>
	);
};

export default AddIssue;
