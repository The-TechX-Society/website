// builtin

// external
import { Suspense } from "react";

// internal

async function ErrorContent({
	searchParams,
}: {
	searchParams: Promise<{ error: string }>;
}) {
	const params = await searchParams;

	return (
		<>
			{params?.error ? (
				<p className="text-sm text-muted-foreground">
					Code error: {params.error}
				</p>
			) : (
				<p className="text-sm text-muted-foreground">
					An unspecified error occurred.
				</p>
			)}
		</>
	);
}

export default function Page({
	searchParams,
}: {
	searchParams: Promise<{ error: string }>;
}) {
	return (
		<div>
			<div className="text-2xl">Sorry, something went wrong.</div>
			<div>
				<Suspense>
					<ErrorContent searchParams={searchParams} />
				</Suspense>
			</div>
		</div>
	);
}
