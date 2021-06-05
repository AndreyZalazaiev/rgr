import { Card } from "react-bootstrap";

function UserTestItem({ test }) {
    return (
        <Card className="user-test-item">
            <Card.Body>
                <Card.Title>{test.title}</Card.Title>
                <Card.Text>Оценка: {test.score}%</Card.Text>
            </Card.Body>
            <Card.Footer>Категория: {test.category}</Card.Footer>
        </Card>
    );
}

export { UserTestItem };