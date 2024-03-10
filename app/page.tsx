'use client'
import React, { useState } from "react";
import Survey from "@/components/Survey";
import ThankYouScreen from "@/components/ThankYou";

const HomePage: React.FC = () => {
  const [completed, setCompleted] = useState(false);

  const handleSurveyCompletion = () => {
    const confirmSubmit = window.confirm("Are you sure you want to submit the survey?");
    if (confirmSubmit) {
      setCompleted(true);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full md:w-1/2 p-6 md:p-8">
        <div className="h-full bg-white rounded shadow-lg">
          <div className="p-6">
            {completed ? (
              <ThankYouScreen />
            ) : (
              <Survey onComplete={handleSurveyCompletion} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
