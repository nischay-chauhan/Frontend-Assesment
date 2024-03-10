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

export const saveAnswer = (questionId : number , answer : string | number) => {
    const answers = JSON.parse(localStorage.getItem(ANSWERS_KEY) || '{}');
    answers[questionId] = answer;
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
}

export const getAnswers = (): Record<string, string | number> => {
    const storedAnswers = localStorage.getItem(ANSWERS_KEY);
    return storedAnswers ? JSON.parse(storedAnswers) : {};
};
