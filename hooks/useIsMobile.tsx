// builtin

// external
import { useEffect, useState } from "react"

// internal


export function useIsMobile(widthOverride: number = 640) {
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < widthOverride) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // biome-ignore lint/correctness/useExhaustiveDependencies: incorrect. Run on mount
    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return window.removeEventListener("resize", handleResize)
    }, [])

    return isMobile;
}