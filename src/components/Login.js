import axios from "axios";
import { useState } from "react";
import { saveUserData } from "../utils";

const Login = (props) => {
	const username = useFormInput("");
	const password = useFormInput("");

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleLogin = () => {
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
			<h2>Log in</h2>
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
				<br/>
				{error && <><small style={{color: "red"}}>{error}</small></>}
				<br/>
				<input
					type='button'
					value={loading ? "Loading.." : "Login"}
					disabled={loading}
					onClick={handleLogin}
				/>
			</form>
		</div>
	)
}

export default Login;


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