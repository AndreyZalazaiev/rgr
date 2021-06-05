import { Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { CardWrapper } from "../general/CardWrapper";
import { PassedTestItem } from "./PassedTestItem";

function PassedTestList({ user, userInfo }) {
    const history = useHistory();
    return (
        user.role === 'student'
            ? (
                <>
                    <Form.Group as={Row} controlId="formPlaintextTests">
                        <Form.Label column lg="3">
                            Пройденно тестов:
                    </Form.Label>
                        <Col>
                            <Form.Control readOnly defaultValue={userInfo.testPassed} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextScore">
                        <Form.Label column lg="3">
                            Средний бал:
                    </Form.Label>
                        <Col>
                            <Form.Control readOnly defaultValue={userInfo.avgScore + '%'} />
                        </Col>
                    </Form.Group>
                    <CardWrapper theme="light" title="Пройденные тесты:">
                        { userInfo.tests.map((test, index) => <PassedTestItem test={test} key={index} onClick={(id) => history.push('/tests/' + id)}/>)}
                    </CardWrapper>
                </>
            )
            : (
                <>
                    TODO: add teacher test list menu
                    <h1>Here it's empty...</h1>
                </>
            )
    );
}

export { PassedTestList };