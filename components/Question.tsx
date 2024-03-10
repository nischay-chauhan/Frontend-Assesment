// Questions.tsx
import React, { useEffect, useState } from "react";
import { TQuestion } from "../data/questions";

interface QuestionProps {
    question: TQuestion;
    currentIndex: number;
    totalQuestions: number;
    handleAnswer: (answer: string | number) => void;
}

const Questions: React.FC<QuestionProps> = ({ question, currentIndex, totalQuestions, handleAnswer }) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);


    useEffect(() => {
        
        setSelectedOption(null);
    }, [question]);


    const handleOptionChange = (value: number) => {
        setSelectedOption(value);
        handleAnswer(value);
    };

    const renderInput = () => {
        switch (question.type) {
            case 'radio':
                return (
                    <div className="flex p-6 justify-center items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <label key={value} className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio text-indigo-600 h-8 w-8"
                                    name={`question-${question.id}`} 
                                    value={value}
                                    checked={selectedOption === value}
                                    onChange={() => handleOptionChange(value)}
                                />
                                <span className="ml-2 text-gray-900 text-lg ">
                                    {value}
                                </span>
                            </label>
                        ))}
                    </div>
                );
            case 'textarea':
                return (
                    <textarea
                        className="border rounded p-4 text-lg text-black"
                        onChange={(e) => handleAnswer(e.target.value)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-center ">
            <h2 className="text-4xl mb-6 text-black font-bold">
                {currentIndex + 1} / {totalQuestions}
            </h2>
            <p className="text-gray-900 text-2xl mb-4"> 
                {question.question}
            </p>
            {renderInput()}
        </div>
    );
};

export default Questions;
