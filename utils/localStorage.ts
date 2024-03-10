import { Questionsabc, TQuestion } from "@/data/questions";

const QUESTIONS_KEY = 'Survey-Questions';
const ANSWERS_KEY = 'Survey-Answers';

export const getQuestions = () : TQuestion[] => {
    const storedQuestions = localStorage.getItem(QUESTIONS_KEY);
    return storedQuestions ? JSON.parse(storedQuestions) : Questionsabc;
};

export const saveAnswer = (questionId : number , answer : string | number) => {
    const answers = JSON.parse(localStorage.getItem(ANSWERS_KEY) || '{}');
    answers[questionId] = answer;
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
}