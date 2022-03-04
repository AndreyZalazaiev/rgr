
import { useAuth } from "../../components/general/authHooks";
import { CardWrapper } from "../../components/general/CardWrapper";
import { PassedTestList } from "../../components/PassedTestList/PassedTestsList";
import useFetch from "../../hooks/useFetch";
import {API_BASE_URL} from "../../config/consts";

function PassedTests() {
    const auth = useAuth();
    const {data,error,loading} = useFetch(`${API_BASE_URL}completed?username=${auth.user.username}`)

    if (loading){
        return <h1>Loading...</h1>
    }
    if (error){
        return <h1>{error.message}</h1>
    }

    return (
        <CardWrapper theme="success" title="Пройденные тесты">
            {data && <PassedTestList user={auth.user} testResults={data}/>}
        </CardWrapper>
    );
}

export { PassedTests };