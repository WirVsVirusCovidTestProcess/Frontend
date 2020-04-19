import { createAction, props } from '@ngrx/store';
import { QuestionnaireAnswer } from '../../types/questionnaireAnswer';

export const saveAnswer = createAction('[Question] Save Answer', props<QuestionnaireAnswer>());
export const setQuestionnaireComplete = createAction('[Question] Set Questionnaire complete');
export const resetQuestionnaire = createAction('[Question] Reset Questionnaire');
export const setUserId = createAction('[Question] Set User ID', props<{ id: string }>());
export const setRiskScore = createAction('[Question] Set Risk Score', props<{ riskScore: number }>());
