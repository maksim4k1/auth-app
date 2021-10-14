import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginAction } from "../redux/userAction";
import { saveUserData } from "../utils";

const SignUp = (props) => {
	const username = useFormInput("");
	const password = useFormInput("");
	const firstName = useFormInput("");
	const age = useFormInput("");

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	// to finish:
	const handleSignUp = () => {
		setError(null);
		setLoading(true);
		axios.post("http://localhost:1717/signin", {
			username: username.value,
			password: password.value,
			firstName: firstName.value,
			age: age.value
		}).then(response => {
			setLoading(false);
			console.log(response)
			saveUserData(response.data.token, response.data.data);

			props.login();

			props.history.push("/profile");
		}).catch(error=> {
			setLoading(false);
			setError("An error occured!");
		})
	}

	return(
		<div>
			<h2>Sign up</h2>
			<form>
				<input
					type="text"
					placeholder="enter your username"
					{...username} 
				/>
				<br/>
				<input
					type="password"
					placeholder="enter password"
					{...password}
				/>
				<input
					type="text"
					placeholder="enter your first name"
					{...firstName} 
				/>
				<input
					type="number"
					placeholder="enter your age"
					{...age} 
				/>
				<br/>
				{error && <><small style={{color: "red"}}>{error}</small></>}
				<br/>
				<input
					type='button'
					value={loading ? "Loading.." : "Sign up"}
					disabled={loading}
					onClick={handleSignUp}
				/>
				<div><NavLink to="/login">Login</NavLink></div>
			</form>
		</div>
	)
}

const dispatchToProps = {
	login: loginAction
};

export default connect(null, dispatchToProps)(SignUp);


const useFormInput = (initValue) => {
	const [value, setValue] = useState(initValue);

	const handleChange = (e) => {
		setValue(e.target.value)
	}

	return {
		value,
		onChange: handleChange
	}
}