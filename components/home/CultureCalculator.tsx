"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, RefreshCcw } from "lucide-react";

type Question = {
    id: number;
    text: string;
    options: string[];
};

const questions: Question[] = [
    {
        id: 1,
        text: "How many employees do you have?",
        options: ["1-10 (Startup)", "11-50 (Growth)", "51-200 (Scale)", "200+ (Enterprise)"],
    },
    {
        id: 2,
        text: "What's your biggest people challenge?",
        options: ["Retention / Turnover", "Hiring the right people", "Leadership alignment", "Culture scaling"],
    },
    {
        id: 3,
        text: "When do you need help?",
        options: ["Yesterday (Urgent)", "In the next month", "Planning for next quarter", "Just browsing"],
    },
];

export default function CultureCalculator() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);

    const handleOptionClick = (option: string) => {
        const newAnswers = [...answers, option];
        setAnswers(newAnswers);

        if (step < questions.length) {
            setTimeout(() => setStep(step + 1), 250);
        }
    };

    const resetCalculator = () => {
        setStep(0);
        setAnswers([]);
    };

    const getResult = () => {
        // Simple logic to determine output based on the second answer (Challenge)
        const challenge = answers[1];
        if (challenge?.includes("Retention")) return "Focus on Engagement & Career Pathways.";
        if (challenge?.includes("Hiring")) return "Refine your Employer Value Proposition (EVP).";
        if (challenge?.includes("Leadership")) return "Invest in Executive Coaching & Alignment.";
        return "Build a Scalable Culture Framework.";
    };

    return (
        <div className="w-full max-w-md bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(step / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            <AnimatePresence mode="wait">
                {step < questions.length ? (
                    <motion.div
                        key={`step-${step}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-serif font-medium text-foreground">
                            {questions[step].text}
                        </h3>
                        <div className="space-y-3">
                            {questions[step].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOptionClick(option)}
                                    className="w-full text-left px-5 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all duration-200 flex items-center justify-between group"
                                >
                                    <span className="text-foreground/80 group-hover:text-foreground">{option}</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-6 py-4"
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8 text-primary" />
                        </div>

                        <h3 className="text-xl font-medium text-foreground/60 uppercase tracking-widest text-sm">
                            Based on companies like yours
                        </h3>

                        <div className="text-3xl font-serif font-medium text-foreground leading-tight">
                            {getResult()}
                        </div>

                        <p className="text-foreground/60 text-sm">
                            We've helped {answers[0]} sized teams solve {answers[1]} challenges.
                        </p>

                        <button
                            onClick={resetCalculator}
                            className="inline-flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground transition-colors mt-4"
                        >
                            <RefreshCcw className="w-3 h-3" />
                            Start over
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
