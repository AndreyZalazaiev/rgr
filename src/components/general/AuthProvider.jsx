import { createContext } from "react";
import { useAuthProivder } from "./authHooks";

export const authContext = createContext();

function AuthProvider({ children }) {
    const auth = useAuthProivder();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export { AuthProvider };