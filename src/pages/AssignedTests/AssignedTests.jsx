import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { assignedTestsApi } from "../../api/assignedTestsApi";
import { useAuth } from "../../components/general/authHooks";
import { CardWrapper } from "../../components/general/CardWrapper";
import { AssignedTestItem } from "./AssignedTestItem";

function AssignedTests() {
    const { user } = useAuth();
    const [tests, setTests] = useState([]);
    const history = useHistory();

    // get data from the backend
    useEffect(() => {
        const tests = assignedTestsApi.find(a => a.username === user.username);
        if (tests){
            setTests(tests.tests);
        }
    }, [user]);

    return (
        <CardWrapper theme="warning" title="Назначенные тесты">
            {tests && tests.map((t) => (
                <AssignedTestItem test={t} onClick={(id) => history.push('/tests/' + id)}/>
            ))}
        </CardWrapper>
    );
}

export { AssignedTests };