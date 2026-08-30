// builtin

// external
import ApplicationCountdown from "@/components/(public)/rush/application-countdown";
import EventsSection from "@/components/(public)/rush/events-section";
import type { RushEvent } from "@/lib/types/rush-page";
import { Suspense } from "react";

// internal

const DEADLINE: Date = new Date(2026, 8, 3, 23, 59, 59, 999);

const EVENTS: RushEvent[] = [
	{
		name: "Over event",
		location: "SN011",
		time: new Date(2026, 7, 27, 19, 30),
	},
	{
		name: "Happening event",
		location: "MUR116",
		time: new Date(),
	},
	{
		name: "Upcoming event",
		location: "TBD",
		time: new Date(2027, 0, 1),
	},
];

export default function RushPage() {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<ApplicationCountdown deadline={DEADLINE} />
				<EventsSection events={EVENTS} />
			</Suspense>
		</div>
	);
}
