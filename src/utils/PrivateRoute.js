import { Redirect, Route } from "react-router"
import { getToken } from "."

const PrivateRoute = ({component: Component, ...rest}) => {

	return(
		<Route
			{...rest}
			render={(props)=> getToken() ? 
				<Component {...props}/> :
				<Redirect to={{pathname: "/login", state: {from: props.location}}} />
			
		}
		/>
	)
}

export default PrivateRoute;