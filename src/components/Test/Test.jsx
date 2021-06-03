import { useState } from "react";
import { TestDescription } from "../TestDescription/TestDescription";
import { TestError } from "../TestError/TestError";
import { TestQuestion } from "../TestQuestion/TestQuestion";
import { TestResult } from "../TestResult/TestResult";
import { Timer } from "../Timer/Timer";

function Test({ test }) {
    const [currentQuestion, setQuestion] = useState(-1);
    const [answers, setAnswers] = useState([]);
    const [timeOff, setTimeOff] = useState(false);

    function onNext(answer) {
        const newAnswers = answers.slice();
        newAnswers.push(answer);

        setAnswers(newAnswers);
        setQuestion(currentQuestion + 1);
    }

    if (!test) {
        return <TestError />
    }
    else if (test && currentQuestion === -1) {
        return <TestDescription test={test} onStart={() => setQuestion(currentQuestion + 1)} />
    }
    else if (timeOff || currentQuestion >= test.questions.length){
        return <TestResult answers={answers} test={test}/>
    } 
    else {
        return (
            <>
                <h4 className="text-right text-large">Время: <Timer minutes={test.time} onTick={() => setTimeOff(true)} /></h4>
                <TestQuestion question={test.questions[currentQuestion]}
                    id={currentQuestion + 1} onNext={onNext}
                    total={test.questions.length} />
            </>
        )
    }
}

export { Test };