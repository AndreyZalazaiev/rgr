import { Col, Form, Row } from "react-bootstrap";

function Answer({ id }) {
    return (
        <Form.Group as={Row} controlId="formPlaintextUsername">
            <Form.Label column lg="2">
                Ответ №{id + 1}:
            </Form.Label>
            <Col>
                <Form.Control placeholder="Введите ответ" />
            </Col>
        </Form.Group>
    );
}

export { Answer };