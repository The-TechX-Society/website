"use client"
// builtin 

// external

// internal
import type { RushEvent } from "@/lib/types/rush-page";
import { useEffect, useState } from "react";


const HOUR_MS: number = 1000 * 60 * 60;

interface EventCardProps {
    event: RushEvent;
}

export default function EventCard({ event }: EventCardProps) {

    const [status, setStatus] = useState<"upcoming" | "happening" | "over">("upcoming");

    useEffect(() => {
        const eventTime = event.time.valueOf()
        const now = Date.now()
        const status = (eventTime > now) ? "upcoming" :
            (eventTime + HOUR_MS > now) ? "happening" :
                "over";
        setStatus(status);
    }, [event.time])

    const statusStyles = (status === "over") ? "text-neutral-4 line-through" :
        (status === "happening") ? "text-primary-1" : "";

    return (
        <div className={`text-center text-2xl ${statusStyles}`}>
            {event.name} @ {formatDate(event.time)} @ {event.location}
        </div>
    )
}

function formatDate(date: Date): string {
    const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    const half = date.getHours() > 12 ? "PM" : "AM"
    return `${date.getMonth() + 1}/${date.getDate()}, ${hour}:${date.getMinutes()} ${half}`;
}