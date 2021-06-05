import { Card } from "react-bootstrap";

function CardWrapper( {theme, title, children} ){
    return (
        <Card>
            <Card.Header className={`bg-${theme} text-center text-${theme !== 'light' && 'white'}`}>{title}</Card.Header>
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    );
}

export { CardWrapper };