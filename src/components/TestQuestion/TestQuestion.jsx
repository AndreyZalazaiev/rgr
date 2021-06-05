import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function TestQuestion({ id, question, onNext, total }) {
    const [selected, setSelected] = useState(-1);    
    function onClick(){
        onNext(selected);
        setSelected(-1);
    }

    return (
        <>
            <h2 className="text-center">#{id}/{total ?? '??'}</h2>
            <h4>{question.question}</h4>
            <Card>
                <Card.Body>
                    {question.answers.map((a, index) => (
                        <Form.Check key={index} label={a} 
                        name="answerGroup" value={index} type="radio" 
                        onChange={(e) => setSelected(Number.parseInt(e.target.value))}
                        checked={index === selected} />
                    ))}
                </Card.Body>
            </Card>
            <Button variant="primary" className="btn-block mt-2" onClick={onClick} disabled={selected === -1}>Следующий вопрос</Button>
        </>
    );
}

export { TestQuestion };