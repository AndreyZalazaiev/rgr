import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import * as homeApi from '../../api/homeApi';

function Home() {
    const [newTests, setNewTests] = useState([]);
    const [popularTests, setPopularTests] = useState([]);
    const [news, setNews] = useState([]);
    const history = useHistory();


    function handleClick(id){
        history.push("/tests/" + id);
    }

    useEffect(() => {
        setNewTests(homeApi.newTests);
        setPopularTests(homeApi.popularTests);
        setNews(homeApi.news);
    }, []);

    return (
        <Container className="p-2">
            <h2 className="text-center bg-light rounded shadow-sm p-2">Система онлайн тестирования</h2>
            <Row>
                <Col sm={3}>
                    <ListGroup>
                        {newTests.map((n, index) => (
                            <ListGroup.Item key={index} style={{cursor: "pointer"}} onClick={() => handleClick(index)}>{n}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            {news.map((n, id) => (
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
                        {popularTests.map((n, index) => (
                            <ListGroup.Item key={index} style={{cursor: "pointer"}} onClick={() => handleClick(index)}>{n}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export { Home };