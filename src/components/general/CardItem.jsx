import { Card } from 'react-bootstrap';
import './CardItem.scss';

function CardItem({title, body, footer, onClick}){
    return (
        <Card className="card-item" onClick={onClick}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {body}
                </Card.Text>
            </Card.Body>
            <Card.Footer>{footer}</Card.Footer>
        </Card>
    );
}

export { CardItem };