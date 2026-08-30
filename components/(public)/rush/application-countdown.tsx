"use client";
// builtin

// external
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

// internal
import Div from "@/components/ui/div";
import Button from "@/components/ui/button";
import type { Time } from "@/lib/types/rush-page";
import { useIsMobile } from "@/hooks/useIsMobile";
import "./application-countdown.css";

interface ApplicationCountdownProps {
    deadline: Date;
}

export default function ApplicationCountdown({ deadline }: ApplicationCountdownProps) {
    const pathname = usePathname();
    const isMobile = useIsMobile();
    const [isClosed, setIsClosed] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState<string>("");
    const [mobileTimeRemaining, setMobileTimeRemaining] = useState<Time | undefined>(undefined);

    useEffect(() => {
        const now = Date.now();
        setIsClosed(deadline.valueOf() < now);
        setTimeRemaining(formatTimeDiff(deadline.valueOf() - now));
        setMobileTimeRemaining(formatTimeDiffMobile(deadline.valueOf() - now));

        const intervalId = setInterval(() => {
            const now = Date.now();
            setIsClosed(deadline.valueOf() < now);
            setTimeRemaining(formatTimeDiff(deadline.valueOf() - now));
            setMobileTimeRemaining(formatTimeDiffMobile(deadline.valueOf() - now));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [deadline]);

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
                {isMobile ? (
                    <div className="font-extrabold text-8xl space-y-3">
                        <div>{`${mobileTimeRemaining?.[0].value}:${mobileTimeRemaining?.[1].value}`}</div>
                        <div>{`${mobileTimeRemaining?.[2].value}:${mobileTimeRemaining?.[3].value}`}</div>
                    </div>
                ) : (
                    <h1 className="text-8xl lg:text-9xl tracking-widest font-extrabold">{timeRemaining}</h1>
                )}
            </Div>

            <Button
                className="!text-2xl !px-4 !py-5"
                colorScheme="accent"
                animationScheme="entryFadeIn"
                childAnimation
                disabled={isClosed}
            >
                {isClosed ? "Closed" :
                    <Link href="https://forms.gle/7NqL1rS4AQZT6khz5">Apply</Link>
                }
            </Button>
        </Div>
    );
}

function formatTimeDiff(timeMs: number): string {
    if (timeMs < 0) {
        return "00:00:00:00";
    }

    let remaining: number = timeMs;

    const days = Math.trunc(remaining / (1000 * 60 * 60 * 24));
    remaining -= days * 1000 * 60 * 60 * 24;

    const hours = Math.trunc(remaining / (1000 * 60 * 60));
    remaining -= hours * 1000 * 60 * 60;

    const minutes = Math.trunc(remaining / (1000 * 60));
    remaining -= minutes * 1000 * 60;

    const seconds = Math.trunc(remaining / 1000);
    remaining -= minutes * 1000;

    return `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function formatTimeDiffMobile(timeMs: number): Time {
    if (timeMs < 0) {
        return [
            { key: "day", value: "00" },
            { key: "hour", value: "00" },
            { key: "minute", value: "00" },
            { key: "second", value: "00 " }
        ]
    }

    let remaining: number = timeMs;

    const days = Math.trunc(remaining / (1000 * 60 * 60 * 24));
    remaining -= days * 1000 * 60 * 60 * 24;

    const hours = Math.trunc(remaining / (1000 * 60 * 60));
    remaining -= hours * 1000 * 60 * 60;

    const minutes = Math.trunc(remaining / (1000 * 60));
    remaining -= minutes * 1000 * 60;

    const seconds = Math.trunc(remaining / 1000);
    remaining -= minutes * 1000;

    return [
        { key: "day", value: String(days).padStart(2, "0") },
        { key: "hour", value: String(hours).padStart(2, "0") },
        { key: "minute", value: String(minutes).padStart(2, "0") },
        { key: "second", value: String(seconds).padStart(2, "0") },
    ];
}
