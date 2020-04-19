import { Action, createReducer, on } from '@ngrx/store';
import * as QuestionActions from './questions.actions';

export const questionFeatureKey = 'questions';

export interface State {
  answers: Map<string, string>;
  complete: boolean;
  user_id?: string;
  risk_score?: number;
}

export const initialState: State = {
  answers: new Map<string, string>(),
  complete: false,
  user_id: undefined,
  risk_score: undefined
};

const questionsReducer = createReducer(initialState,
  on(QuestionActions.saveAnswer, (state, answer) => {
    const newAnswers = { ...state.answers };
    newAnswers[answer.key] = answer.value;
    return {
      ...state,
      answers: newAnswers
    };
  }),
  on(QuestionActions.resetQuestionnaire, () => initialState),
  on(QuestionActions.setQuestionnaireComplete, (state) => ({ ...state, complete: true })),
  on(QuestionActions.setUserId, (state, { id }) => ({ ...state, user_id: id })),
  on(QuestionActions.setRiskScore, (state, { riskScore }) => ({ ...state, risk_score: riskScore }))
);

export function reducer(state: State | undefined, action: Action) {
  return questionsReducer(state, action);
}
