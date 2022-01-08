import React from "react";
// import useFirebase from "../../hooks/useFirebase";
// import { doc, onSnapshot } from "firebase/firestore";

const Chat = () => {
	// const [messages, setMessages] = useState();
	// const { db } = useFirebase();

	// useEffect(() => {
	// 	const unsub = onSnapshot(doc(db, "/messages"), (doc) => {
	// 		console.log("Current data: ", doc.data());
	// 	});
	// 	db.collection("messages")
	// 		.get()
	// 		.then((snapshot) => {
	// 			const data = snapshot.docs.map((doc) => ({
	// 				id: doc.id,
	// 				...doc.data(),
	// 			}));
	// 			console.log(data);
	// 			// setMessages(snapshot.docs.map((doc) => doc.data()));
	// 		});
	// 	db.collection("messages")
	// 		.orderBy("createdAt")
	// 		.limit(50)
	// 		.onSnapshot((snapshot) => {
	// 			console.log(snapshot);
	// 			// setMessages(snapshot.docs.map((doc) => doc.data()));
	// 		});
	// }, []);
	return (
		<div>
			{/* {messages.map((message) => (
				<div>{message}</div>
			))} */}
		</div>
	);
};

export default Chat;
