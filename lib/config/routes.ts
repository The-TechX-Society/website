// builtin

// external

// internal

const ALLOWED_PREFIXES = ["/auth"];
const ALLOWED_ROUTES = ["/"];

export function isProtectedRoute(pathname: string): boolean {
    if (ALLOWED_ROUTES.includes(pathname)) {
        return false;
    }

    const isAllowedPrefix = ALLOWED_PREFIXES.some(
        (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
    );
    if (isAllowedPrefix) {
        return false;
    }

    return true;
}
