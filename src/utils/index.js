export const getUser = () => {
	const userData = localStorage.getItem("userData");
	if(userData) {
		return JSON.parse(userData)
	} else {
		return null;
	}
}

export const getToken = () => {
	return localStorage.getItem("token") || null;
}

export const deleteUserData = () => {
	// удалить 2 сущности
	localStorage.removeItem("token");
	localStorage.removeItem("userData");
}

export const saveUserData = (token, userData) => {
	localStorage.setItem("token", token);
	localStorage.setItem("userData", JSON.stringify(userData));
}