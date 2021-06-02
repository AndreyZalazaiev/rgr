import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { testsApi } from '../../api/testApi';
import { TestError } from '../../components/TestError/TestError';
import './TestViewer.scss';

function TestViewer() {
    const { id } = useParams();

    const intId = Number.parseInt(id);
    const test = testsApi.find(t => t.id === intId)
    
    let body;
    if (!test)
        body = <TestError />

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