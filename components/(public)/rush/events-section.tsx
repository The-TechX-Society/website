// builtin

// external

// internal
import type { RushEvent } from "@/lib/types/rush-page";


interface EventsSectionProps {
    events: RushEvent[];
}


export default function EventsSection({ events }: EventsSectionProps) {

    return (
        <div>
            {
                events.map(event => (<EventCard event={event} />))
            }
        </div>
    );
}