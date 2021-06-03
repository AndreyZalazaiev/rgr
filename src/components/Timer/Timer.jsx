import { useEffect, useState } from "react";

function Timer({ minutes, onTick }) {
    const [seconds, setSeconds] = useState(minutes * 60);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => {
                    if (seconds === 0 && isActive) {
                        onTick();
                        setIsActive(false);
                        return 0;
                    }
                    return seconds - 1;
                })
            }, 1000);
        } else if (!isActive) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, onTick]);

    let displayMinutes = Math.floor(seconds / 60);
    if (displayMinutes < 10) {
        displayMinutes = '0' + displayMinutes;
    }
    let displaySeconds = seconds % 60;
    if (displaySeconds < 10) {
        displaySeconds = '0' + displaySeconds;
    }

    return <span className={seconds < 60 ? 'text-danger' : null}>{displayMinutes}:{displaySeconds}</span>
}

export { Timer };