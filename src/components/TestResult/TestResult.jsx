import { useState } from "react";
import { AnswerResult } from "./AnswerResult";
import { QuestionDescription } from "./QuestionDescription";

function TestResult({ test, answers }) {
    const [selectedQuestion, setSelectedQuestion] = useState(-1);
    const totalAnswers = test.questions.length;

    let maxScore = 0;
    let score = 0;
    let correctAnswers = 0;
    test.questions.forEach((q, index) => {
        if (q.correctAnswer === answers[index]) {
            correctAnswers++;
            score += q.score;
        }
        maxScore += q.score;
    });

    function handleClick(id) {
        --id;
        if (id === selectedQuestion) {
            setSelectedQuestion(-1);
        }
        else {
            setSelectedQuestion(id);
        }
    }

    return (
        <>
            <h3 className="text-center">Вы прошли тест "{test.name}"</h3>
            <h4 className="text-center">Ваш результат {score}/{maxScore}</h4>
            <p>{test.desc}</p>
            <p>Автор: {test.author}</p>
            <h4>Вы ответели на {correctAnswers}/{totalAnswers} вопросов правильно</h4>
            <div className="row justify-content-center p-2">
                {test.questions?.map((q, index) => {
                    const isCorrect = q.correctAnswer === answers[index];
                    return <AnswerResult key={index} isCorrect={isCorrect} number={index + 1} onClick={handleClick}/>
                })}
            </div>
            <QuestionDescription
                question={selectedQuestion >= 0 ? test.questions[selectedQuestion] : null}
                answer={selectedQuestion >= 0? answers[selectedQuestion] : 0} />
        </>
    );
}

export { TestResult };