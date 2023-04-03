export type QuestionType =
  | {
      question: string;
      code: null;
      options: string[];
      correctOptionIndex: number;
    }
  | {
      question: string;
      code: string;
      options: (string | null)[];
      correctOptionIndex: number;
    };
