// builtin

// external

// internal
import type { RushEvent } from "@/lib/types/rush-page";
import EventCard from "./event-card";


interface EventsSectionProps {
    events: RushEvent[];
}


export default function EventsSection({ events }: EventsSectionProps) {

    return (
        <div>
            {
                events.map(event => (<EventCard key={event.name} event={event} />))
            }
        </div>
    );
}