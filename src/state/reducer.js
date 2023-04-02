import { ACTIONS } from "./action";

export const initialState = {
  questionCount: 0,
  totalQuestion: 15,
  correctAnswer: 0,
  selectedOption: false,
  disabletNextBtn: true,
  question: {
    _id: 0,
    code: "",
    correctOption: 1,
    option: [],
    question: "",
  },
  previousIndex: [],
  questions: [],
};

const randomQuestion = (state) => {
  let index = Math.floor(Math.random() * state.previousIndex.length);
  let randomIndex = state.previousIndex[index];

  return {
    ...state,
    questionCount: state.questionCount + 1,
    previousIndex: state.previousIndex.filter((i) => i !== index),
    question: {
      _id: state.questions[randomIndex]._id,
      code: state.questions[randomIndex].code,
      correctOption: state.questions[randomIndex].correctOption,
      option: [...state.questions[randomIndex].option],
      question: state.questions[randomIndex].question,
    },
  };
};

const rand = (state) => {
  let i = Math.floor(Math.random() * state.questions.length);
  return {
    ...state,
    questionCount: state.questionCount + 1,
    question: {
      _id: state.questions[i]._id,
      code: state.questions[i].code,
      correctOption: state.questions[i].correctOption,
      option: [...state.questions[i].option],
      question: state.questions[i].question,
    },
  };
};

const reducer = (state, action) => {
  //console.log({ action });
  switch (action.type) {
    case ACTIONS.CHANGE_QUESTION:
      return randomQuestion(state);

    case ACTIONS.REMOVE_CURRENT_INDEX:
      return {
        ...state,
        previousIndex: state.previousIndex.filter(
          (index) => index !== action.payload.index
        ),
      };

    case ACTIONS.ENABLE_NEXT_BUTTON:
      return { ...state, disabletNextBtn: false };

    case ACTIONS.DISABLE_NEXT_BUTTON:
      return { ...state, disabletNextBtn: true };

    case ACTIONS.INCREASE_CORRECT_ANSWER:
      return { ...state, correctAnswer: state.correctAnswer + 1 };

    case ACTIONS.SET_ARRAY:
      return { ...state, previousIndex: action.payload };

    case ACTIONS.SELECT_OPTION:
      return { ...state, selectedOption: action.payload };

    case ACTIONS.SET_QUESTIONS:
      return { ...state, questions: [...state.questions, ...action.payload] };

    case ACTIONS.RESET:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
