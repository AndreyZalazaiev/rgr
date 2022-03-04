import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useAuth } from '../../components/general/authHooks';
import { CardWrapper } from '../../components/general/CardWrapper';
import './UserProfile.scss';
import { MenuNavBar } from '../../components/MenuNavBar/MenuNavBar';
import { UserSummary } from './UserSummary';
import { PassedTestList } from '../../components/PassedTestList/PassedTestsList';
import useFetch from "../../hooks/useFetch";
import {API_BASE_URL} from "../../config/consts";

function UserProfile() {
    const auth = useAuth();
    const [category, setCategory] = useState('general');
    const {data,error,loading} = useFetch(`${API_BASE_URL}completed?username=${auth.user.username}`)

    if (loading){
        return <h1>Loading...</h1>
    }
    if (error){
        return <h1>Something went wrong</h1>
    }

    return (
        <CardWrapper theme="primary" title={`Профиль пользователя ${auth.user.username}`}>
            <Row>
                <Col sm="3">
                    <MenuNavBar selected={category} menuButtons={[{
                        id: 'general',
                        name: 'Общие'
                    },
                    {
                        id: 'tests',
                        name: 'Тесты'
                    }]}
                        onClick={setCategory} />
                </Col>
                <Col>
                    { category === 'general' && <UserSummary user={auth.user}/>}
                    { category === 'tests' && <PassedTestList user={auth.user} testResults={data} />}
                </Col>
            </Row>
        </CardWrapper>
    );
}

export { UserProfile };