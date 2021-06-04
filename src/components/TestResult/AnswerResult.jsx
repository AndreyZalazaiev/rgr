import './AnswerResult.scss';

function AnswerResult({ isCorrect, number, onClick }) {
    return (
        <div className={"shadow answer " + (isCorrect ? "correct" : "wrong")}
        onClick={() => onClick(number)}>
            {number}
        </div>
        );
}

export { AnswerResult };