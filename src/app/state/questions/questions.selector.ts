import { createSelector } from '@ngrx/store';
import { State as AppState } from '../';
import { State as QuestionState, featureKey } from './questions.reducer';
import { QuestionnaireAnswer } from '../../types/questionnaireAnswer';

const getQuestionsState = (state: AppState) => state[featureKey];

export const selectQuestionnaireComplete = createSelector(getQuestionsState, (state: QuestionState) => state.complete);
export const selectUserId = createSelector(getQuestionsState, (state: QuestionState) => state.user_id);
export const selectRiskScore = createSelector(getQuestionsState, (state: QuestionState) => state.risk_score);
export const selectAllAnswers = createSelector(getQuestionsState, (state: QuestionState) => {
  const result: QuestionnaireAnswer[] = [];
  Object.entries(state.answers).forEach(([key, value]) => {
    result.push({
      key,
      value
    });
  });
  return result;
});
