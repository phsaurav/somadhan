import React, { useEffect, useRef, useState } from "react";
import "firebase/compat/firestore";
import useFirebase from "../../hooks/useFirebase";
import "./Chat.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Chat = ({ reciverEmail }) => {
	return (
		<div className='Chat'>
			<section>
				<ChatRoom reciverEmail={reciverEmail} />
			</section>
		</div>
	);
};

function ChatRoom({ reciverEmail }) {
	const user = useSelector((state) => state.data.user);
	const dummy = useRef();
	const { db, firebase } = useFirebase();
	const [messages, setMessages] = useState([]);
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = async (data) => {
		await db.collection("messages").add({
			text: data.message,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			email: user.email,
			photoURL: user.photoURL,
			email2: reciverEmail,
		});
		reset();
	};

	useEffect(() => {
		db.collection("messages")
			.orderBy("createdAt")
			.limit(25)
			.onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
	}, []);

	return (
		<div className='container'>
			<main>
				{messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

				<span ref={dummy}></span>
			</main>

			<form className='msg-form' onSubmit={handleSubmit(onSubmit)}>
				<input
					required
					type='text'
					className='msg-input'
					placeholder='say something nice'
					{...register("message")}
				/>

				<button className='send-btn text-white hover:bg-bluegray-700' type='submit'>
					Send 🕊️
				</button>
			</form>
		</div>
	);
}

function ChatMessage(props) {
	const user = useSelector((state) => state.data.user);
	const { text, email, email2, photoURL } = props.message;

	const messageClass = email === user.email ? "sent" : "received";

	return (
		<>
			{(email === user.email || email2 === user.email) && (
				<div className={`message ${messageClass}`}>
					<img className='user-img' alt='' src={photoURL || "https://i.ibb.co/VmSVPNR/male.png"} />
					<p className='msg-p'>{text}</p>
				</div>
			)}
		</>
	);
}

export default Chat;
