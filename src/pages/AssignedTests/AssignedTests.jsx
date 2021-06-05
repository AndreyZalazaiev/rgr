import { useEffect, useState } from "react";
import { useAuth } from "../../components/general/authHooks";

function AssignedTests() {
    const { user } = useAuth();
    const [tests, setTests] = useState([]);

    // get data from the backend
    useEffect(() => {
        
    }, [user]);

    return <h1>{user.username}</h1>;
}

export { AssignedTests };