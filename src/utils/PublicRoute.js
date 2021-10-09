import { Redirect, Route } from "react-router"
import { getToken } from "."

const PublicRoute = ({component: Component, ...rest}) => {
	return (
		<Route
			{...rest}
			render={(props)=> !getToken() ? 
				<Component {...props}/> :
				<Redirect to={{pathname: "/profile"}} />
			
		}
		/>
	)
}

export default PublicRoute;