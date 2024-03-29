
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import useFetch from "../../hooks/useFetch";
import {API_BASE_URL} from "../../config/consts";

function Home() {
    const history = useHistory();
    const {data,loading,error} = useFetch(`${API_BASE_URL}home`)

    function handleClick(id){
        history.push("/tests/" + id);
    }

    if(loading){
        return <h1>Loading...</h1>
    }
    if (error){
        return <h1>{error.message}</h1>
    }

    return (
        <Container className="p-2">
            <h2 className="text-center bg-light rounded shadow-sm p-2">Система онлайн тестирования</h2>
            <Row>
                <Col sm={3}>
                    <ListGroup>
                        <ListGroup.Item id="title">Новые тесты:</ListGroup.Item>
                        {data.tests.map((n) => (
                            <ListGroup.Item key={n._id} style={{cursor: "pointer"}} onClick={() => handleClick(n._id)}>{n.name}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            {data.news.map((n, id) => (
                                <div key={id} className="my-2 border p-2 rounded news" style={{cursor: "pointer"}}>
                                    <h5>{n.title}</h5>
                                    <p>{n.desc}</p>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                <ListGroup>
                    <ListGroup.Item id="titleid">Лучшие тесты:</ListGroup.Item>
                        {data.topTests.map((n) => (
                            <ListGroup.Item key={n._id} style={{cursor: "pointer"}} onClick={() => handleClick(n._id)}>{n.name}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export { Home };