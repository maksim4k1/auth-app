import { connect } from "react-redux";
import { logoutAction } from "../redux/userAction";
import { deleteUserData, getUser } from "../utils";

const Profile = (props) => {

	const userData = getUser();

	const handleLogout = () => {
		deleteUserData();
		props.logout();
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

const dispatchToProps = {
	logout: logoutAction
}

export default connect(null, dispatchToProps)(Profile);

// normal - all users

// public - no token

// private - token 