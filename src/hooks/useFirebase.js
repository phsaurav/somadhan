import { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setAdmin, setIsLoading, setToken, setUser } from "../redux/slices/firebaseSlice";

initializeAuthentication();

const useFirebase = () => {
	const auth = getAuth();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.data.user);

	const signInUsingGoogle = () => {
		dispatch(setIsLoading(true));
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		dispatch(setIsLoading(true));
		signOut(auth)
			.then(() => {
				dispatch(setUser({}));
			})
			.finally(() => dispatch(setIsLoading(false)));
	};

	const processLogin = (email, password) => {
		dispatch(setIsLoading(true));
		return signInWithEmailAndPassword(auth, email, password);
	};

	const createNewUser = (email, password) => {
		dispatch(setIsLoading(true));
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// const saveUser = (email, displayName, photoURL, admin = "", method) => {
	// 	const user = { email, displayName, photoURL, role: admin };
	// 	fetch("https://somadhanapp.herokuapp.com/users", {
	// 		method: method,
	// 		headers: {
	// 			"content-type": "application/json",
	// 		},
	// 		body: JSON.stringify(user),
	// 	}).then();
	// };

	useEffect(() => {
		fetch(`https://somadhanapp.herokuapp.com/users/${user?.email}`)
			.then((res) => res.json())
			.then((data) => {
				dispatch(setAdmin(data.admin));
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user?.email]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setUser(user));
				getIdToken(user).then((idToken) => {
					dispatch(setToken(idToken));
				});
			} else {
				dispatch(setUser({}));
			}
			dispatch(setIsLoading(false));
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		auth,
		processLogin,
		logOut,
		signInUsingGoogle,
		createNewUser,
		// saveUser,
		updateProfile,
	};
};

export default useFirebase;
