import { useContext, useState } from "react";
import * as auth from "../../services/authService";
import { authContext } from "./AuthProvider";

function useAuthProvider() {
    const [user, setUser] = useState(null);

    const login = (user) => {
        if (user) {
            auth.storeAuthInfo(user);
            setUser(user);
        }
    };

    const logout = () => {
        auth.cleanAuthInfo();
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

export { useAuthProvider, useAuth };