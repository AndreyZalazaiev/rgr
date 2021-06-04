import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { testsApi } from '../../api/testApi';
import { CardWrapper } from '../../components/CardWrapper/CardWrapper';
import { Test } from '../../components/Test/Test';
import './TestViewer.scss';

function TestViewer() {
    const { id } = useParams();
    const [test, setTest] = useState(null); 

    useEffect(() => {
        // get test from back (fake)
        const intId = Number.parseInt(id);
        if (intId){
            setTest(testsApi.find(t => t.id === intId));
        }
    }, [id]);
    
    return (
        <CardWrapper theme="secondary" title="Прохождение теста">
            <Test test={test}/>
        </CardWrapper>
    );
}

export { TestViewer };