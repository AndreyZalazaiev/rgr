import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CardWrapper } from '../../components/general/CardWrapper';
import { Test } from '../../components/Test/Test';
import './TestViewer.scss';
import useFetch from "../../hooks/useFetch"
import {API_BASE_URL} from "../../config/consts";

function TestViewer() {
    const { id } = useParams();
    const [test, setTest] = useState(null);
    const {data:tests,loading} = useFetch(`${API_BASE_URL}tests`)

    useEffect(() => {
        if(!loading && tests)
        setTest(tests.find(t => t._id === id));
    },[tests,id,loading])

    if (loading){
        return <h1>Loading...</h1>
    }

    return (
        <CardWrapper theme="secondary" title="Прохождение теста">
            <Test test={test}/>
        </CardWrapper>
    );
}

export { TestViewer };