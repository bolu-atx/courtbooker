import firebase from "firebase/app";
import { Button } from 'antd';
import AuthContext from "../context/AuthContext";
import { useEffect, useContext } from 'react';
import { DownloadOutlined } from "@ant-design/icons";
import { auth } from "../api/firebase"

const SignInOrOutButton = () => {
  const { user } = useContext(AuthContext);

	const login = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithRedirect(provider);
	}

	const logout = () => {
		firebase.auth().signOut();
	}

	const signedIn = false;
	if (user === null) {
		return (
			<Button
				type="primary" shape="round" icon={<DownloadOutlined />}
				onClick={login}
			>
				Sign in with Google
			</Button>
		);
	}
	else {
		return (
			<Button
				type="primary" danger shape="round" icon={<DownloadOutlined />}
				onClick={logout}
			>
				Sign Out
			</Button>
		);
	};
}

export default SignInOrOutButton;