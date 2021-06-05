import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useAuth } from '../../components/AuthProvider/authHooks';
import { CardWrapper } from '../../components/CardWrapper/CardWrapper';
import { userApi } from '../../api/userApi';
import './UserProfile.scss';
import { MenuNavBar } from '../../components/MenuNavBar/MenuNavBar';
import { UserSummary } from './UserSummary';
import { UserTestList } from './UserTestsList';

function UserProfile() {
    const auth = useAuth();
    const [userInfo, setUserInfo] = useState(null);
    const [category, setCategory] = useState('general');

    // get data from the backend
    useEffect(() => {
        const ui = userApi.find(u => u.username === auth.user.username);
        if (ui) {
            setUserInfo(ui);
        }
    }, [auth]);

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
                    { category === 'tests' && <UserTestList user={auth.user} userInfo={userInfo} />}
                </Col>
            </Row>
        </CardWrapper>
    );
}

export { UserProfile };