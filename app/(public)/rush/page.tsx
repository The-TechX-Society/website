// builtin

// external
import ApplicationCountdown from "@/components/(public)/rush/application-countdown"
import { Suspense } from "react"

// internal


const DEADLINE = new Date(2026, 8, 3, 23, 59, 59, 999)


export default function RushPage() {

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <ApplicationCountdown deadline={DEADLINE} />
            </Suspense>
        </div>
    )
}
