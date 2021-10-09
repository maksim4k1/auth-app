import { deleteUserData, getUser } from "../utils";

const Profile = (props) => {

	const userData = getUser();

	const handleLogout = () => {
		deleteUserData();
		props.history.push("/login");
	}

	return(
		<div>
			<h1>Welcome {userData.username}! </h1>
			<button onClick={handleLogout}>
				Log out
			</button>
		</div>
	)
}

export default Profile;

// normal - all users

// public - no token

// private - token 