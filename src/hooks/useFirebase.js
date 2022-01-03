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

	//* Google Sign In handler
	const signInUsingGoogle = () => {
		setIsLoading(true);
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};

	//* Logout handler
	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.finally(() => setIsLoading(false));
	};

	//* Email Password Login handler
	const processLogin = (email, password) => {
		setIsLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	//*Sign Up handler
	const createNewUser = (email, password) => {
		setIsLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	//*Save New User to backend
	const saveUser = (email, displayName, photoURL, isAdmin = "user", method) => {
		const user = { email, displayName, photoURL, isAdmin };
		fetch("https://specssphere.herokuapp.com/user", {
			method: method,
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		}).then();
	};

	//*Load User Information from backend
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

	//* Firebase state change monitor
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
		setAdmin,
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
