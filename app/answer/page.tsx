"use client";
import { getAnswers } from "@/utils/localStorage";
import React from "react";

const SurveyAnswersPage: React.FC = () => {
  const surveyAnswers = getAnswers(); 
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl  font-bold mb-4">Survey Answers</h1>
      <div className="bg-white rounded shadow p-4">
        {Object.entries(surveyAnswers).map(([questionId, answer], index) => (
          <div key={questionId} className="mb-4 border-b border-black">
            <h2 className="text-lg text-black font-semibold">{`Question ${index + 1}:`}</h2>
            <p className="text-gray-700">{`Answer: ${answer}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveyAnswersPage;
