import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../components/Footer/Footer";
import IssueCard from "../../../components/IssueCard/IssueCard";
import Navbar from "../../../components/Navbar/Navbar";
import { userIssue } from "../../../redux/slices/issueSlice";

const UserActiveIssue = () => {
	const user = useSelector((state) => state.data.user);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(userIssue({ email: user.email, status: "active" }));
	}, []);

	const activeIssues = useSelector((state) => state.issue.activeIssue);
	return (
		<div className='flex flex-col md:flex-row'>
			<div className='md:min-h-screen md:w-80 xl:w-96'>
				<Navbar></Navbar>
			</div>

			<div className='flex flex-col justify-between w-full'>
				<div>
					{activeIssues.length &&
						activeIssues.map((issue) => <IssueCard issue={issue}></IssueCard>)}
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default UserActiveIssue;
