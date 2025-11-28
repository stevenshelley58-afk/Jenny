export function HandArrow({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M10,50 Q50,10 90,50" />
            <path d="M90,50 L70,40" />
            <path d="M90,50 L75,65" />
        </svg>
    );
}

export function HandUnderline({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5,15 Q100,5 195,15" />
        </svg>
    );
}

export function HandCircle({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M50,10 A40,40 0 1,1 40,90 A40,40 0 0,1 50,10" />
        </svg>
    );
}
