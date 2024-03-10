interface IQuestion {
    id: number;
    question: string;
    type: 'radio' | 'textarea';
    min?: number;
    max?: number
}

export type TQuestion = IQuestion;

export const Questionsabc: IQuestion[] = [
    {
        id: 1,
        question: "How satisfied are you with our products?",
        type: "radio",
        min: 1,
        max: 5
    },
    {
        id: 2,
        question: "How fair are the prices compared to similar retailers? ",
        type: "radio",
        min: 1,
        max: 5

    },
    {
        id: 3,
        question: "How satisfied are you with the value for money of your purchase?",
        type: "radio",
        min: 1,
        max: 5
    },
    {
        id: 4,
        question: "On a scale of 1-10 how would you recommend us to your friends and family?",
        type: "radio",
        min: 1,
        max: 10
    },
    {
        id: 5,
        question: "What could we do to improve our service?",
        type: "textarea"
    }
];
