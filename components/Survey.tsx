// Survey.tsx
import React, { useState } from "react";
import { saveAnswer, getQuestions } from "@/utils/localStorage";
import { TQuestion } from "@/data/questions";
import Questions from "./Question";

interface SurveyProps {
    onComplete: () => void;
}

const Survey: React.FC<SurveyProps> = ({ onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const questions: TQuestion[] = getQuestions();
    const totalQuestions = questions.length;

    const handleAnswer = (answer: string | number) => {
        saveAnswer(questions[currentIndex].id, answer);
    };

    const handleNextQuestion = () => {
        if (currentIndex < totalQuestions - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevQuestion = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleSkipQuestion = () => {
        if (currentIndex < totalQuestions - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleSubmitSurvey = () => {
        onComplete(); 
    };

    return (
        <div className="w-full h-full flex flex-col box-shadow">
            <Questions
                question={questions[currentIndex]}
                currentIndex={currentIndex}
                totalQuestions={totalQuestions}
                handleAnswer={handleAnswer}
            />
            <div className="flex justify-center space-x-9 mt-8">
                {currentIndex > 0 && (
                    <button
                        className="bg-green-500 text-white px-6 py-3 rounded text-lg"
                        onClick={handlePrevQuestion}
                    >
                        Prev
                    </button>
                )}
                {currentIndex < totalQuestions - 1 && (
                    <button
                        className="bg-blue-500 text-white px-6 py-3 rounded text-lg" 
                        onClick={handleNextQuestion}
                    >
                        Next
                    </button>
                )}
                {currentIndex < totalQuestions - 1 && (
                    <button
                        className="bg-red-500 text-white px-6 py-3 rounded text-lg" 
                        onClick={handleSkipQuestion}
                    >
                        Skip
                    </button>
                )}
                {currentIndex === totalQuestions - 1 && (
                    <button
                        className="bg-red-500 text-white px-6 py-3 rounded text-lg" 
                        onClick={handleSubmitSurvey}
                    >
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
};

export default Survey;
