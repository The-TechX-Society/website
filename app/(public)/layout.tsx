// builtin

// external

// internal
import Navigation from "@/components/ui/navigation";


export default function PublicLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navigation colorScheme="primary" />
            {children}
        </>
    )
}