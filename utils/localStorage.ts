import { Questionsabc, TQuestion } from "@/data/questions";

const QUESTIONS_KEY = 'Survey-Questions';
const ANSWERS_KEY = 'Survey-Answers';

const QUESTIONS_FALLBACK: TQuestion[] = Questionsabc;

export const getQuestions = () : TQuestion[] => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedQuestions = window.localStorage.getItem(QUESTIONS_KEY);
        return storedQuestions ? JSON.parse(storedQuestions) : Questionsabc;
    } else {
        return QUESTIONS_FALLBACK; 
    }
};

export const saveAnswer = (questionId: number, answer: string | number) => {
    if (typeof window !== 'undefined') {
        const storedAnswers = localStorage.getItem(ANSWERS_KEY);
        const answers = storedAnswers ? JSON.parse(storedAnswers) : {};
        answers[questionId] = answer;
        localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
    } else {
        console.error('Cannot access localStorage on the server.');
    }
};


export const getAnswers = () => {
    if (typeof window !== 'undefined') {
        const storedAnswers = localStorage.getItem(ANSWERS_KEY);
        return storedAnswers ? JSON.parse(storedAnswers) : {};
    } else {
        console.error('Cannot access localStorage on the server.');
        return {};
    }
};
