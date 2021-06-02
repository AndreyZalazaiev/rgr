import { Redirect } from "react-router";
import { useAuth } from "../../components/AuthProvider/authHooks";

function Logout() {
    const auth = useAuth();
    auth.logout();
    return <Redirect to="/login" />
}

export { Logout };