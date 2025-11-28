"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

type ReadingModeContextType = {
    isReadingMode: boolean;
    setReadingMode: (value: boolean) => void;
};

const ReadingModeContext = createContext<ReadingModeContextType | undefined>(undefined);

export function ReadingModeProvider({ children }: { children: ReactNode }) {
    const [isReadingMode, setIsReadingMode] = useState(false);

    return (
        <ReadingModeContext.Provider value={{ isReadingMode, setReadingMode: setIsReadingMode }}>
            <div
                className={`transition-colors duration-700 ${isReadingMode ? "bg-[#fcfcfc]" : ""
                    }`}
            >
                {children}
            </div>
        </ReadingModeContext.Provider>
    );
}

export function useReadingMode() {
    const context = useContext(ReadingModeContext);
    if (context === undefined) {
        throw new Error("useReadingMode must be used within a ReadingModeProvider");
    }
    return context;
}

export function ReadingModeTrigger({ children, className }: { children: ReactNode; className?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, margin: "-100px 0px -100px 0px" });
    const { setReadingMode } = useReadingMode();

    useEffect(() => {
        setReadingMode(isInView);
    }, [isInView, setReadingMode]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${className} ${isInView ? "max-w-4xl" : "max-w-2xl"
                }`}
        >
            {children}
        </div>
    );
}
