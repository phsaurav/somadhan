import React from "react";
import "./Chat.css";
const Chat = () => {
	function sendbtn() {
		var printtext = document.getElementById("chatmsg");
		var copytext = document.getElementById("typemsg");
		var currentdate = new Date();
		console.log("hey");
		var copiedtext = copytext.value;

		var printnow =
			'<div className="flex justify-end pt-2 pl-10">' +
			'<span className="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-1 items-end flex justify-end overflow-hidden " style="font-size: 10px;">' +
			copiedtext +
			'<span className="text-gray-400 pl-1" style="font-size: 8px;">' +
			currentdate.getHours() +
			":" +
			currentdate.getMinutes() +
			"</span>" +
			"</span>" +
			"</div>";

		printtext.insertAdjacentHTML("beforeend", printnow);

		var box = document.getElementById("journal-scroll");
		box.scrollTop = box.scrollHeight;
	}

	return (
		<div>
			<div className='h-screen '>
				<div className='flex justify-center items-center h-screen '>
					<div className='w-full  bg-white rounded shadow-2xl'>
						<nav className='w-full h-10 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center'>
							<div className='flex justify-center items-center'>
								{" "}
								<i className='mdi mdi-arrow-left font-normal text-gray-300 ml-1'></i>{" "}
								<img
									src='https://i.ibb.co/VmSVPNR/male.png'
									className='rounded-full ml-1'
									width='25'
									height='25'
									alt=''
								/>{" "}
								<span className='text-xs font-medium text-gray-300 ml-1'>Alex cairo</span>{" "}
							</div>
							<div className='flex items-center'>
								{" "}
								<i className='mdi mdi-video text-gray-300 mr-4'></i>{" "}
								<i className='mdi mdi-phone text-gray-300 mr-2'></i>{" "}
								<i className='mdi mdi-dots-vertical text-gray-300 mr-2'></i>{" "}
							</div>
						</nav>
						<div
							className='overflow-auto px-1 py-1'
							style={{ height: "19rem" }}
							id='journal-scroll'
						>
							<div className='flex items-center pr-10'>
								{" "}
								<img
									src='https://i.ibb.co/VmSVPNR/male.png'
									className='rounded-full shadow-xl'
									width='15'
									height='15'
									//   style="box-shadow: "
									alt=''
								/>{" "}
								<span
									className='flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end'
									style={{ fontSize: "10px" }}
								>
									Hi tell me more about the issue?{" "}
									<span className='text-gray-400 pl-1' style={{ fontSize: "8px" }}>
										01:25am
									</span>
								</span>{" "}
							</div>

							<div className=' text-black' id='chatmsg'>
								{" "}
							</div>
						</div>
						<div className='flex justify-between items-center p-1  '>
							<div className='relative'>
								{" "}
								<i
									className='mdi mdi-emoticon-excited-outline absolute top-1 left-1 text-gray-400'
									style={{ fontSize: "17px !important", fontWeight: "bold" }}
								></i>
								<input
									type='text'
									className='rounded pl-6 pr-12 py-2 focus:outline-none h-auto placeholder-gray-100 bg-gray-900 text-white'
									style={{ fontSize: " 11px", width: "250px" }}
									placeholder='Type a message...'
									id='typemsg'
								/>{" "}
								<i className='mdi mdi-paperclip absolute right-8 top-1 transform -rotate-45 text-gray-400'></i>{" "}
								<i className='mdi mdi-camera absolute right-2 top-1 text-gray-400'></i>{" "}
							</div>
							<button className='px-2  h-auto bg-blue-400 rounded' onClick={sendbtn}>
								send
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chat;
