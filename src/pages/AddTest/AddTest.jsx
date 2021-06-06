import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { CardWrapper } from '../../components/general/CardWrapper';
import './AddTest.scss';
import { Question } from './Question';

function AddTest() {
    const [questions, setQuestions] = useState([]);

    function handleAddQuestion() {
        const q = questions.slice();
        q.push(<Question id={q.length} key={q.length}/>);
        setQuestions(q);
    }

    return (
        <CardWrapper theme="success" title="Новый тест">
            <Form.Group>
                <Form.Label>Название:</Form.Label>
                <Form.Control placeholder="Введите название теста" />
            </Form.Group>
            <Form.Check className="my-2">
                <Form.Check.Input />
                <Form.Check.Label>Приватный?</Form.Check.Label>
            </Form.Check>
            <CardWrapper theme="light" title="Вопросы">
                {questions}
                <Button variant="primary" className="mt-2" onClick={handleAddQuestion}>Добавить вопрос</Button>
            </CardWrapper>
            <Button variant="success" className="my-2">Создать</Button>
        </CardWrapper>
    );
}

export { AddTest };