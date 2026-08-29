// builtin

// external
import DateDisplay from "@/components/(public)/rush/date-display"
import { Suspense } from "react"

// internal



export default function RushPage() {

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <DateDisplay />
            </Suspense>
        </div>
    )
}
