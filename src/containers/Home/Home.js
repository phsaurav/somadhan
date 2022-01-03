import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Home = () => {
	const { logOut } = useFirebase();
	return (
		<div>
			<h1>This is Home Container</h1>
			<div
				onClick={logOut}
				className='cursor-default font-semibold text-brand-1 px-2 py-2 transition duration-300 ease-in-out hover:bg-brand-1 hover:text-white bg-white mb-10 uppercase border-2 shadow-xl mt-5 border-white'
			>
				Sign Out
			</div>
		</div>
	);
};

export default Home;
