import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const IssueDetails = () => {
	const { _id } = useParams();

	const openIssue = useSelector((state) => state.issue.openIssue);

	console.log(openIssue);
	const singleIssue = openIssue.find((issue) => issue._id === _id);
	console.log(singleIssue);
	return (
		<div className='flex flex-col md:flex-row'>
			<div className='md:min-h-screen md:w-80 xl:w-96'>
				<Navbar></Navbar>
			</div>

			<div className='flex flex-col justify-between w-full'>
				<div className=' h-full container mx-auto mt-20 '>
					<div className='xl:flex  block justify-around mt-10'>
						<div className='  w-2/5 mx-auto text-gray-600 text-center  '>
							<h2 className='text-2xl font-bold uppercase'>{singleIssue?.date}</h2>
							<h2 className='text-2xl'> {singleIssue?.time}</h2>
							<h2 className='text-4xl  uppercase font-bold text-orange-400'>
								{singleIssue?.title}
							</h2>
							<h2 className='text-gray-400  '>{singleIssue?.description}</h2>
							<div className='flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-evenly px-2 py-4 mx-auto lg:px-0'>
								<button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-2'>
									Delete
								</button>

								<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2'>
									Resolving
								</button>
							</div>
						</div>
						<div className='bg-blue-200 w-2/5  ml-auto text-center text-2xl font-bold uppercase mx-auto'>
							{" "}
							chat screen
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default IssueDetails;
