import { Redirect, Route } from "react-router";
import { useAuth } from "../general/authHooks";

function PrivateRoute({ children, ...rest }) {
    const auth = useAuth();
    return (
        <Route {...rest} render={({ location }) =>
            !auth.user
                ? <Redirect to="/login" />
                : children} />
    );
}

export { PrivateRoute };