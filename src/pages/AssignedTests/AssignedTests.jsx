import { useAuth } from "../../components/general/authHooks";

function AssignedTests() {
    const { user } = useAuth();
    return <h1>{user.username}</h1>;
}

export { AssignedTests };