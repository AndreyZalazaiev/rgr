import { createContext } from "react";
import { useAuthProvider } from "./authHooks";

export const authContext = createContext();

function AuthProvider({ children }) {
    const auth = useAuthProvider();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export { AuthProvider };