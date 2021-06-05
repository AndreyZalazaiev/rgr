import { Button } from "react-bootstrap";

function TestDescription({ test, onStart }){
    return (
        <>
            <h2 className="text-center">Тест - {test.name}</h2>
            <div className="m-2 text-center">{test.desc}</div>
            <div>Автор: {test.author}</div>
            <div>Вопросов: {test.questions.length}</div>
            <Button variant="success" onClick={onStart} className="m-2 btn-block">Начать тест</Button>
        </>
    )
}

export { TestDescription };