import { useContext, useState } from "react";
import * as auth from "../../services/fakeAuthService";
import { authContext } from "./AuthProvider";

function useAuthProivder() {
    const [user, setUser] = useState(null);

    const login = (user) => {
        if (user) {
            auth.authLogin(user);
            setUser(user);
        }
    };

    const logout = () => {
        auth.authLogout();
        setUser(null);
    };

    if (!user) {
        const storageUser = auth.getUser();
        if (storageUser) {
            login(storageUser);
        }
    }

    return {
        user,
        login,
        logout
    };
}

function useAuth() {
    return useContext(authContext);
}

export { useAuthProivder, useAuth };