import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { testsApi } from '../../api/testApi';
import { TestDescription } from '../../components/TestDescription/TestDescription';
import { TestError } from '../../components/TestError/TestError';
import { TestQuestion } from '../../components/TestQuestion/TestQuestion';
import './TestViewer.scss';

function TestViewer() {
    const { id } = useParams();
    const [ currentQuestion, setQuestion ] = useState(-1);

    const intId = Number.parseInt(id);
    const test = testsApi.find(t => t.id === intId)

    function handleClick(){
        setQuestion(currentQuestion + 1);
    }

    function onNext(answer){
        setQuestion(currentQuestion + 1);
    }

    let body;
    if (!test) {
        body = <TestError />
    }
    else if (test && currentQuestion === -1) {
        body = <TestDescription test={test} onStart={handleClick}/>
    } else {
        body = <TestQuestion question={test.questions[currentQuestion]} id={currentQuestion + 1} onNext={onNext}/>
    }

    return (
        <Card>
            <Card.Header className="bg-secondary text-center text-white">Прохождение теста</Card.Header>
            <Card.Body>
                {body}
            </Card.Body>
        </Card>
    );
}

export { TestViewer };