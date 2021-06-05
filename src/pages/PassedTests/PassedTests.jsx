import { useEffect, useState } from "react";
import { userApi } from "../../api/userApi";
import { useAuth } from "../../components/AuthProvider/authHooks";
import { CardWrapper } from "../../components/CardWrapper/CardWrapper";
import { PassedTestList } from "../../components/PassedTestList/PassedTestsList";

function PassedTests() {
    const auth = useAuth();
    const [userInfo, setUserInfo] = useState(null);

    // get data from the backend
    useEffect(() => {
        const ui = userApi.find(u => u.username === auth.user.username);
        if (ui) {
            setUserInfo(ui);
        }
    }, [auth]);

    return (
        <CardWrapper theme="success" title="Пройденные тесты">
            {userInfo && <PassedTestList user={auth.user} userInfo={userInfo} />}
        </CardWrapper>
    );
}

export { PassedTests };