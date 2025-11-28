"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface TalentWizardProps {
    isOpen: boolean;
    onClose: () => void;
}

const steps = [
    {
        id: "challenge",
        question: "What’s your biggest people challenge right now?",
        type: "text",
        placeholder: "e.g. High turnover, low engagement...",
    },
    {
        id: "size",
        question: "How big is your team?",
        type: "options",
        options: ["1-10", "11-50", "51-200", "200+"],
    },
    {
        id: "timeline",
        question: "What’s your timeline?",
        type: "options",
        options: ["This quarter", "Next 6 months", "Just exploring"],
    },
];

export default function TalentWizard({ isOpen, onClose }: TalentWizardProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleNext = (value: string) => {
        setAnswers((prev) => ({ ...prev, [steps[currentStep].id]: value }));
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        } else {
            setIsSubmitted(true);
        }
    };

    const reset = () => {
        setCurrentStep(0);
        setAnswers({});
        setIsSubmitted(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-accent/95 backdrop-blur-sm p-4"
                >
                    <button
                        onClick={reset}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors"
                    >
                        <X className="w-6 h-6 text-foreground" />
                    </button>

                    <div className="w-full max-w-2xl">
                        {!isSubmitted ? (
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="text-sm font-medium text-foreground uppercase tracking-widest">
                                    Step {currentStep + 1} of {steps.length}
                                </div>
                                <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground leading-tight">
                                    {steps[currentStep].question}
                                </h2>

                                {steps[currentStep].type === "text" && (
                                    <div className="flex gap-4">
                                        <input
                                            type="text"
                                            placeholder={steps[currentStep].placeholder}
                                            className="flex-1 bg-transparent border-b-2 border-foreground/20 py-4 text-xl md:text-2xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleNext(e.currentTarget.value);
                                                }
                                            }}
                                        />
                                        <button
                                            onClick={(e) => {
                                                const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                                                handleNext(input.value);
                                            }}
                                            className="p-4 bg-foreground text-background rounded-full hover:bg-primary transition-colors"
                                        >
                                            <ArrowRight className="w-6 h-6" />
                                        </button>
                                    </div>
                                )}

                                {steps[currentStep].type === "options" && (
                                    <div className="flex flex-wrap gap-4">
                                        {steps[currentStep].options?.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => handleNext(option)}
                                                className="px-6 py-3 border-2 border-foreground/20 rounded-full text-lg md:text-xl text-foreground hover:border-primary hover:text-primary transition-colors"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-8"
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                    <Check className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
                                    Thanks! We've got the basics.
                                </h2>
                                <p className="text-xl text-foreground max-w-md mx-auto">
                                    Let's discuss how we can help you build a better business through your people.
                                </p>
                                <a
                                    href="/contact"
                                    className="inline-block px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
                                >
                                    Book a Consultation
                                </a>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

