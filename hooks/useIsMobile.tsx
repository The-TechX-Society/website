// builtin

// external
import { useSyncExternalStore } from "react"

// internal


export function useIsMobile(widthOverride: number = 640) {
    const query = `(max-width: ${widthOverride}px)`

    return useSyncExternalStore(
        (subscribe) => {
            const matchMedia = window.matchMedia(query)
            matchMedia.addEventListener("change", subscribe)
            return () => matchMedia.removeEventListener("change", subscribe)
        },
        () => window.matchMedia(query).matches,
        () => false
    )
}