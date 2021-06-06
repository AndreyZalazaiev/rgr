import { Card } from "react-bootstrap";
import './AssignedTestItem.scss';

function AssignedTestItem({ test, onClick }) {
    return (
        <Card onClick={() => onClick(test.id)} className="assigned-test-item">
            <Card.Header>{test.name}</Card.Header>
            <Card.Body>
                <Card.Text>Назначенно: {test.assignedBy}</Card.Text>
                <Card.Text>Дата: {test.date}</Card.Text>
            </Card.Body>
            <Card.Footer>Категория: {test.category}</Card.Footer>
        </Card>
    );
}

export { AssignedTestItem };