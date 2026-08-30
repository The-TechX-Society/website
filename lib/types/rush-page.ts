// builtin

// external

// internal

export interface RushEvent {
	name: string;
	location: string;
	time: Date;
}

export interface TimeComponent {
	key: string;
	value: string;
}

export type Time = [TimeComponent, TimeComponent, TimeComponent, TimeComponent];
