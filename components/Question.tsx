import React from "react";
import { TQuestion } from "../data/questions";

interface QuestionProps {
    question: TQuestion;
    currentIndex: number;
    totalQuestions: number;
    handleAnswer: (answer: string | number) => void;
}

const Questions: React.FC<QuestionProps> = ({ question, currentIndex, totalQuestions, handleAnswer }) => {
    const renderInput = () => {
        switch (question.type) {
            case 'radio':
                return (
                    <input
                        type="radio"
                        min={question.min}
                        max={question.max}
                        onChange={(e) => handleAnswer(parseInt(e.target.value))}
                    />
                );
            case 'textarea':
                return (
                    <textarea
                        onChange={(e) => handleAnswer(e.target.value)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-center ">
            <h2 className="text-2xl font-bold">
                {currentIndex + 1} / {totalQuestions}
            </h2>
            <p>
                {question.question}
            </p>
            {renderInput()}
        </div>
    );
};

export default Questions;
