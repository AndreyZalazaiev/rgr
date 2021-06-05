import { Card } from "react-bootstrap";
import './PassedTestItem.scss';

function PassedTestItem({ test, onClick }) {
    return (
        <Card className="user-test-item" onClick={() => onClick(test.id)}>
            <Card.Body>
                <Card.Title>{test.title}</Card.Title>
                <Card.Text>Оценка: {test.score}%</Card.Text>
            </Card.Body>
            <Card.Footer>Категория: {test.category}</Card.Footer>
        </Card>
    );
}

export { PassedTestItem };