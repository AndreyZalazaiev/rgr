import { Col, Form, Row } from "react-bootstrap";

function UserSummary( {user} ) {
    return (
        <Form>
            <Form.Group as={Row} controlId="formPlaintextUsername">
                <Form.Label column lg="3">
                    Имя пользователя:
                    </Form.Label>
                <Col>
                    <Form.Control readOnly defaultValue={user.username} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column lg="3">
                    Email:
                    </Form.Label>
                <Col>
                    <Form.Control readOnly defaultValue={user.email} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column lg="3">
                    Роль:
                    </Form.Label>
                <Col>
                    <Form.Control readOnly defaultValue={user.role === 'student' ? 'студент' : 'преподаватель'} />
                </Col>
            </Form.Group>
        </Form>
    );
}

export { UserSummary };