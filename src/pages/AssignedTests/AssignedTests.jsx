import {useHistory} from "react-router";
import {useAuth} from "../../components/general/authHooks";
import {CardWrapper} from "../../components/general/CardWrapper";
import {AssignedTestItem} from "./AssignedTestItem";
import useFetch from "../../hooks/useFetch";
import {API_BASE_URL} from "../../config/consts";

function AssignedTests() {
    const {user} = useAuth();
    const history = useHistory();

    const {data: tests, error, loading} = useFetch(`${API_BASE_URL}assignments?username=${user.username}`)

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error.message}</h1>
    }
    return (
        <CardWrapper theme="warning" title="Назначенные тесты">
            {tests && tests.map((t) => (
                <AssignedTestItem test={t} onClick={(id) => history.push('/tests/' + id)}/>
            ))}
        </CardWrapper>
    );
}

export {AssignedTests};