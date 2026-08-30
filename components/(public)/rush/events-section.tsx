"use client";
// builtin

// external

// internal
import type { RushEvent } from "@/lib/types/rush-page";
import EventCard from "./event-card";
import Div from "@/components/ui/div";

interface EventsSectionProps {
	events: RushEvent[];
}

export default function EventsSection({ events }: EventsSectionProps) {
	return (
		<Div className="space-y-12 pt-8 pb-52 px-4" animationScheme="scrollFadeIn">
			{events.map((event) => (
				<EventCard key={event.name} event={event} />
			))}
		</Div>
	);
}
