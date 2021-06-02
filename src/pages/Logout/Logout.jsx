import { useEffect } from "react";
import { Redirect } from "react-router";
import { useAuth } from "../../components/AuthProvider/authHooks";

function Logout() {
    const auth = useAuth();
    
    useEffect(() =>{
        auth.logout();
    }, [])

    return <Redirect to="/login" />
}

export { Logout };