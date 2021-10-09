import axios from "axios";
import { useState } from "react";
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
		axios.post("http://localhost:1718/login", {
			username: username.value,
			password: password.value
		}).then(response => {
			setLoading(false);
			console.log(response)
			saveUserData(response.data.token, response.data.data);
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
					{...password}
				/>
				<input
					type="text"
					placeholder="enter your first name"
					{...firstName} 
				/>
				<input
					type="text"
					placeholder="enter your age"
					{...age} 
				/>
				<br/>
				{error && <><small style={{color: "red"}}>{error}</small></>}
				<br/>
				<input
					type='button'
					value={loading ? "Loading.." : "Login"}
					disabled={loading}
					onClick={handleSignUp}
				/>
			</form>
		</div>
	)
}

export default SignUp;


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