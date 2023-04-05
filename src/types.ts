export type QuestionType = {
  question: string;
  code: string;
  options: string[];
  correctOptionIndex: number;
};
export type SovedQuestionType = {
  question: string;
  code: string;
  options: string[];
  correctOptionIndex: number;
  userChoosenOptionIndex: number | null;
};
