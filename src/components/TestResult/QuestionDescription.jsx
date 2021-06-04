import { Card } from "react-bootstrap";

function QuestionDescription({ question, answer }) {
    if (!question) {
        return null;
    }

    const isCorrect = question.correctAnswer === answer;

    return (
        <Card>
            <Card.Body>
                <h4 className={`bg-${isCorrect ? 'success' : 'danger'} m-1 p-1 text-white text-center`}>
                    {isCorrect ? 'Вы ответили правильно' : 'Вы ответили неправильно'}
                </h4>
                <p><strong>Вопрос: </strong>{question.question}</p>
                <p><strong>Ответ: </strong>{question.answers[question.correctAnswer]}</p>
                <p><strong>Ваш ответ: </strong>{question.answers[answer]}</p>
            </Card.Body>
        </Card>
    );
}

export { QuestionDescription };