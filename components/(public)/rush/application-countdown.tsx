"use client"
// builtin

// external
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"

// internal
import Div from "@/components/ui/div"
import Button from "@/components/ui/button"
import "./application-countdown.css"

const DEADLINE = new Date(2026, 8, 3, 23, 59, 59, 999).valueOf()

interface ApplicationCountdownProps {
    deadline: Date;
}


export default function ApplicationCountdown({ deadline }: ApplicationCountdownProps) {
    const pathname = usePathname();
    const [timeRemaining, setTimeRemaining] = useState<string>("")


    useEffect(() => {
        setTimeRemaining(formatTimeDiff(deadline.valueOf() - Date.now()));

        const intervalId = setInterval(() => {
            setTimeRemaining(formatTimeDiff(DEADLINE - Date.now()));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [deadline])

    return (
        <Div
            key={pathname}
            className="flex flex-col items-center justify-center py-20 space-y-12 text-center h-screen-remaining"
            animationScheme={{ type: "entryFadeIn", delayChildren: 0.3, staggerChildren: 0.5 }}
        >
            <Div animationScheme="entryFadeIn" childAnimation>
                <h1 className="text-3xl uppercase bg-neutral-3 text-neutral-1">Applications close in</h1>
            </Div>

            <Div animationScheme="entryFadeIn" childAnimation>
                <h1 className="text-9xl tracking-widest font-extrabold">{timeRemaining}</h1>
            </Div>

            <Button
                className="!text-2xl !px-4 !py-5"
                colorScheme="accent"
                animationScheme="entryFadeIn"
                childAnimation
            >
                <Link href="https://forms.gle/7NqL1rS4AQZT6khz5">Apply</Link>
            </Button>
        </Div >
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