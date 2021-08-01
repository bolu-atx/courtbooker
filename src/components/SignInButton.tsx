import firebase from "firebase/app";
import { Button } from 'antd';
import AuthContext from "../context/AuthContext";
import { useEffect, useContext } from 'react';
import { LoginOutlined, DownloadOutlined,LogoutOutlined } from "@ant-design/icons";
import { auth } from "../api/firebase"

const SignInOrOutButton = () => {
  const { user } = useContext(AuthContext);

	const login = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	}

	const logout = () => {
		firebase.auth().signOut();
	}

	const signedIn = false;
	if (user === null) {
		return (
			<Button
				type="primary" shape="round" icon={<LoginOutlined />}
				onClick={login}
			>
				Sign in with Google
			</Button>
		);
	}
	else {
		return (
			<Button
				type="primary" danger shape="round" icon={<LogoutOutlined/>}
				onClick={logout}
			>
				Sign Out
			</Button>
		);
	};
}

export default SignInOrOutButton;