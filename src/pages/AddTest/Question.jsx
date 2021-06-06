import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CardWrapper } from "../../components/general/CardWrapper";
import { Answer } from "./Answer";

function Question( { id } ) {
    const [answers, setAnswers] = useState([]);

    function handleAddAnswer(){
        const a = answers.slice();
        a.push(<Answer id={a.length} key={a.length}/>);
        setAnswers(a);
    }
    
    return (
        <CardWrapper theme="light" title={`Вопрос №${id + 1}`}>
            <Form.Group>
                <Form.Label>Вопрос:</Form.Label>
                <Form.Control placeholder="Введите вопрос"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Правильный ответ</Form.Label>
                <Form.Control as="select" defaultValue={-1}>
                    <option value="-1" disabled>Выберите правильный ответ</option>
                    {answers.map((a, index) => <option key={index} value={index}>{index}</option>)}
                </Form.Control>
            </Form.Group>
            <div className="mt-2">
                {answers}
            </div>
            <Button variant="outline-primary" onClick={handleAddAnswer}>Добавить ответ</Button>
        </CardWrapper>
    );
}

export { Question };