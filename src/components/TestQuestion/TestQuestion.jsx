import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function TestQuestion({ id, question, onNext }) {
    const [selected, setSelected] = useState(-1);    
    return (
        <>
            <h2 className="text-center">#{id}</h2>
            <h4>{question.question}</h4>
            <Card>
                <Card.Body>
                    {question.answers.map((a, index) => (
                        <Form.Check key={index} label={a} 
                        name="answerGroup" value={index} type="radio" 
                        onChange={(e) => setSelected(e.target.value)} />
                    ))}
                </Card.Body>
            </Card>
            <Button variant="primary" className="btn-block mt-2" onClick={() => onNext(selected)} disabled={selected === -1}>Следующий вопрос</Button>
        </>
    );
}

export { TestQuestion };