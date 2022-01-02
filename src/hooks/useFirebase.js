import { useEffect, useState } from "react";
import initializeAuthentication from "../services/Firebase/firebase.init";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	updateProfile,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	getIdToken,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [name, setName] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [admin, setAdmin] = useState(false);
	const [token, setToken] = useState("");
	const auth = getAuth();

	const signInUsingGoogle = () => {
		setIsLoading(true);
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.finally(() => setIsLoading(false));
	};

	const processLogin = (email, password) => {
		setIsLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const createNewUser = (email, password) => {
		setIsLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const saveUser = (email, displayName, photoURL, method) => {
		const user = { email, displayName, photoURL };
		fetch("https://specssphere.herokuapp.com/users", {
			method: method,
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		}).then();
	};

	// useEffect(() => {
	// 	fetch(`https://specssphere.herokuapp.com/users/${user?.email}`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setAdmin(data.admin);
	// 			const newAdmin = data.admin;
	// 			if (user.email) {
	// 				sessionStorage.setItem("admin", newAdmin.toString());
	// 			}
	// 		});
	// }, [user?.email]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				getIdToken(user).then((idToken) => {
					setToken(idToken);
				});
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		auth,
		user,
		admin,
		name,
		token,
		error,
		isLoading,
		setUser,
		setError,
		setIsLoading,
		processLogin,
		logOut,
		signInUsingGoogle,
		createNewUser,
		saveUser,
		setName,
		updateProfile,
	};
};

export default useFirebase;
