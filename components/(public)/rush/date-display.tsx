"use client"

import { useEffect, useState } from "react"

// builtin

// external

// internal


export default function DateDisplay() {
    const [timeRemaining, setTimeRemaining] = useState<string>("")

    const deadline = new Date(2026, 8, 3, 23, 59, 59, 999).valueOf()

    // biome-ignore lint/correctness/useExhaustiveDependencies: Run on interval
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(formatTimeDiff(deadline - Date.now()));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            Formal Rush Applications close in {timeRemaining}.
        </div>
    )
}

function formatTimeDiff(timeMs: number): string {

    let remaining: number = timeMs;

    const days = Math.trunc(remaining / (1000 * 60 * 60 * 24));
    remaining -= days * 1000 * 60 * 60 * 24;

    const hours = Math.trunc(remaining / (1000 * 60 * 60));
    remaining -= hours * 1000 * 60 * 60;

    const minutes = Math.trunc(remaining / (1000 * 60));
    remaining -= minutes * 1000 * 60;

    const seconds = Math.trunc(remaining / 1000);
    remaining -= minutes * 1000;

    return `${days}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}