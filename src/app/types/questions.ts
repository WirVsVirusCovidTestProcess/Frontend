export enum CATEGORIES {
  PERSONAL = 'personalinfo',
  CONTACT = 'contact',
  SYMPTOMS = 'symptoms',
  RESPIRATORY_SYMPTOMS = 'respiratorysymptoms',
  ILLNESS = 'illness',
  MEDICATION = 'medication',
}

export interface Question {
  id: QUESTION_IDS;
  category: CATEGORIES;
  xmlCode: string;
  text: string;
  comment?: string;
  inputType: 'radio' | 'date';
  options?: string[];
  nextQuestions: NextQuestionOptions | NextQuestionOptions[];
  scoreMap?: number[];
  stepNumber: number;
}

export enum FLOW_RELEVANT_IDS {
  END = 'end'
}

export type NextQuestionOptions = QUESTION_IDS | FLOW_RELEVANT_IDS;

export enum QUESTION_IDS {
  AGE = 'age',
  AGE_65 = 'age_65',
  LIVING_SITUATION = 'living_situation',
  CARING = 'caring',
  WORKSPACE = 'workspace',
  SMOKING = 'smoking',
  PREGNANCY = 'pregnancy',
  CONTACT = 'contact',
  CONTACT_DATE = 'contact_date',
  FEVER = 'fever',
  FEVER_TEMPERATURE = 'fever_temperature',
  FEVER_LAST_DAYS = 'fever_last_days',
  CHILLS = 'chills',
  LISTLESS = 'listless',
  BODY_ACHE = 'body_ache',
  DIARRHEA = 'diarrhea',
  HEAD_ACHE = 'head_ache',
  LOSS_OF_SMELL = 'loss_of_smell',
  COUGH = 'cough',
  SNIFF = 'sniff',
  SORE_THROAT = 'sore_throat',
  OUT_OF_BREATH = 'out_of_breath',
  SYMPTOMS_DATE = 'symptoms_date',
  LUNG_DISEASE = 'lung_disease',
  DIABETES = 'diabetes',
  HEART_DISEASE = 'heart_disease',
  ADIPOSITAS = 'adipositas',
  CORTISON = 'cortison',
  IMMUNE_SUPPRESSIVA = 'immune_suppressiva',
  FLU_SHOT = 'flu_shot'
}

export const questions: Question[] = [
  {
    id: QUESTION_IDS.AGE,
    category: CATEGORIES.PERSONAL,
    xmlCode: 'P0',
    inputType: 'radio',
    text: 'questions.texts.age',
    options: [
      'questions.answers.age_0',
      'questions.answers.age_1',
      'questions.answers.age_2',
      'questions.answers.age_3',
      'questions.answers.age_4',
      'questions.answers.age_5',
    ],
    stepNumber: 0,
    nextQuestions: [
      QUESTION_IDS.LIVING_SITUATION,
      QUESTION_IDS.LIVING_SITUATION,
      QUESTION_IDS.LIVING_SITUATION,
      QUESTION_IDS.AGE_65,
      QUESTION_IDS.LIVING_SITUATION,
      QUESTION_IDS.LIVING_SITUATION]
  },
  {
    id: QUESTION_IDS.AGE_65,
    category: CATEGORIES.PERSONAL,
    xmlCode: 'P1',
    inputType: 'radio',
    text: 'questions.texts.age_65',
    options: [
      'questions.answers.yes',
      'questions.answers.no',
    ],
    stepNumber: 1,
    nextQuestions: QUESTION_IDS.LIVING_SITUATION
  },
  {
    id: QUESTION_IDS.LIVING_SITUATION,
    category: CATEGORIES.PERSONAL,
    xmlCode: 'P2',
    inputType: 'radio',
    text: 'questions.texts.living_situation',
    options: [
      'questions.answers.living_situation_0',
      'questions.answers.living_situation_1',
    ],
    stepNumber: 2,
    nextQuestions: QUESTION_IDS.CARING
  },
  {
    id: QUESTION_IDS.CARING,
    category: CATEGORIES.PERSONAL,
    xmlCode: 'P3',
    inputType: 'radio',
    text: 'questions.texts.caring',
    comment: 'questions.comments.caring',
    options: [
      'questions.answers.yes',
      'questions.answers.no',
    ],
    stepNumber: 3,
    nextQuestions: QUESTION_IDS.WORKSPACE
  },
  {
    id: QUESTION_IDS.WORKSPACE,
    category: CATEGORIES.PERSONAL,
    xmlCode: 'P4',
    inputType: 'radio',
    text: 'questions.texts.workspace',
    options: [
      'questions.answers.workspace_0',
      'questions.answers.workspace_1',
      'questions.answers.workspace_2',
    ],
    stepNumber: 4,
    nextQuestions: QUESTION_IDS.SMOKING
  },
  {
    id: QUESTION_IDS.SMOKING,
    category: CATEGORIES.PERSONAL,
    xmlCode: 'P5',
    inputType: 'radio',
    text: 'questions.texts.smoking',
    options: [
      'questions.answers.yes',
      'questions.answers.no',
    ],
    stepNumber: 5,
    nextQuestions: QUESTION_IDS.PREGNANCY
  },
  {
    id: QUESTION_IDS.PREGNANCY,
    category: CATEGORIES.PERSONAL,
    xmlCode: 'P6',
    inputType: 'radio',
    text: 'questions.texts.pregnancy',
    options: [
      'questions.answers.yes',
      'questions.answers.no',
      'questions.answers.unkown'
    ],
    stepNumber: 6,
    nextQuestions: QUESTION_IDS.CONTACT,
  },
  {
    id: QUESTION_IDS.CONTACT,
    category: CATEGORIES.CONTACT,
    xmlCode: 'C0',
    inputType: 'radio',
    text: 'questions.texts.contact',
    comment: 'questions.comments.contact',
    options: [
      'questions.answers.yes',
      'questions.answers.no'
    ],
    scoreMap: [1, 0],
    stepNumber: 7,
    nextQuestions: [QUESTION_IDS.CONTACT_DATE, QUESTION_IDS.FEVER]
  },
  {
    id: QUESTION_IDS.CONTACT_DATE,
    category: CATEGORIES.CONTACT,
    xmlCode: 'CZ',
    inputType: 'date',
    text: 'questions.texts.contact_date',
    stepNumber: 7,
    nextQuestions: QUESTION_IDS.FEVER
  },
  {
    id: QUESTION_IDS.FEVER,
    category: CATEGORIES.SYMPTOMS,
    xmlCode: 'S0',
    inputType: 'radio',
    text: 'questions.texts.fever',
    options: [
      'questions.answers.yes',
      'questions.answers.no'
    ],
    scoreMap: [1, 0],
    stepNumber: 8,
    nextQuestions: [QUESTION_IDS.FEVER_TEMPERATURE, QUESTION_IDS.FEVER_LAST_DAYS]
  },
  {
    id: QUESTION_IDS.FEVER_TEMPERATURE,
    category: CATEGORIES.SYMPTOMS,
    xmlCode: 'S2',
    inputType: 'radio',
    text: 'questions.texts.fever_temperature',
    options: [
      'questions.answers.fever_temperature_0',
      'questions.answers.fever_temperature_1',
      'questions.answers.fever_temperature_2',
      'questions.answers.fever_temperature_3',
      'questions.answers.fever_temperature_4',
      'questions.answers.fever_temperature_5',
      'questions.answers.fever_temperature_6',
    ],
    scoreMap: [1, 2, 3, 4, 5, 6, 7],
    nextQuestions: QUESTION_IDS.CHILLS,
    stepNumber: 8
  },
  {
    id: QUESTION_IDS.FEVER_LAST_DAYS,
    category: CATEGORIES.SYMPTOMS,
    xmlCode: 'S1',
    inputType: 'radio',
    text: 'questions.texts.fever_last_days',
    options: [
      'questions.answers.yes',
      'questions.answers.no'
    ],
    scoreMap: [1, 0],
    nextQuestions: [QUESTION_IDS.FEVER_TEMPERATURE, QUESTION_IDS.CHILLS],
    stepNumber: 8
  },
  {
    id: QUESTION_IDS.CHILLS,
    category: CATEGORIES.SYMPTOMS,
    xmlCode: 'S3',
    inputType: 'radio',
    text: 'questions.texts.chills',
    options: [
      'questions.answers.yes',
      'questions.answers.no'
    ],
    scoreMap: [1, 0],
    nextQuestions: QUESTION_IDS.LISTLESS,
    stepNumber: 9
  },
  {
    id: QUESTION_IDS.LISTLESS,
    category: CATEGORIES.SYMPTOMS,
    xmlCode: 'S4',
    inputType: 'radio',
    text: 'questions.texts.listless',
    options: [
      'questions.answers.yes',
      'questions.answers.no'
    ],
    scoreMap: [1, 0],
    nextQuestions: QUESTION_IDS.BODY_ACHE,
    stepNumber: 10
  },
  {
    id: QUESTION_IDS.BODY_ACHE,
    category: CATEGORIES.SYMPTOMS,
    xmlCode: 'S5',
    inputType: 'radio',
    text: 'questions.texts.body_ache',
    options: [
      'questions.answers.yes',
      'questions.answers.no'
    ],
    scoreMap: [1, 0],
    nextQuestions: QUESTION_IDS.DIARRHEA,
    stepNumber: 11
  },
  {
    id: QUESTION_IDS.DIARRHEA,
    category: CATEGORIES.SYMPTOMS,
    xmlCode: 'S8',
    inputType: 'radio',
    text: 'questions.texts.diarrhea',
    options: [
      'questions.answers.yes',
      'questions.answers.no'
    ],
    scoreMap: [1, 0],
    nextQuestions: QUESTION_IDS.HEAD_ACHE,
    stepNumber: 12
  },
  {
    id: QUESTION_IDS.HEAD_ACHE,
    category: CATEGORIES.SYMPTOMS,
    xmlCode: 'SA',
    inputType: 'radio',
    text: 'questions.texts.head_ache',
    options: [
      'questions.answers.yes',
      'questions.answers.no'
    ],
    scoreMap: [1, 0],
    nextQuestions: QUESTION_IDS.LOSS_OF_SMELL,
    stepNumber: 13
  },
  {
    id: QUESTION_IDS.LOSS_OF_SMELL,
    category: CATEGORIES.SYMPTOMS,
    xmlCode: 'SC',
    inputType: 'radio',
    text: 'questions.texts.loss_of_smell',
    options: [
      'questions.answers.yes',
      'questions.answers.no'
    ],
    scoreMap: [1, 0],
    nextQuestions: QUESTION_IDS.COUGH,
    stepNumber: 14
  },
  {
    id: QUESTION_IDS.COUGH,
    category: CATEGORIES.RESPIRATORY_SYMPTOMS,
    xmlCode: 'S6',
    inputType: 'radio',
    text: 'questions.texts.cough',
    comment: 'questions.comments.cough',
    options: [
      'questions.answers.yes',
      'questions.answers.no'
    ],
    scoreMap: [1, 0],
    nextQuestions: QUESTION_IDS.SNIFF,
    stepNumber: 15
  },
  {
    id: QUESTION_IDS.SNIFF,
    category: CATEGORIES.RESPIRATORY_SYMPTOMS,
    xmlCode: 'S7',
    inputType: 'radio',
    text: 'questions.texts.sniff',
    comment: 'questions.comments.sniff',
    options: [
      'questions.answers.yes',
      'questions.answers.no'
    ],
    scoreMap: [1, 0],
    nextQuestions: QUESTION_IDS.SORE_THROAT,
    stepNumber: 16
  },
  {
    id: QUESTION_IDS.SORE_THROAT,
    category: CATEGORIES.RESPIRATORY_SYMPTOMS,
    xmlCode: 'S9',
    inputType: 'radio',
    text: 'questions.texts.sore_throat',
    options: [
      'questions.answers.yes',
      'questions.answers.no'
    ],
    scoreMap: [1, 0],
    nextQuestions: QUESTION_IDS.OUT_OF_BREATH,
    stepNumber: 17
  },
  {
    id: QUESTION_IDS.OUT_OF_BREATH,
    category: CATEGORIES.RESPIRATORY_SYMPTOMS,
    xmlCode: 'SB',
    inputType: 'radio',
    text: 'questions.texts.out_of_breath',
    comment: 'questions.comments.out_of_breath',
    options: [
      'questions.answers.yes',
      'questions.answers.no'
    ],
    scoreMap: [1, 0],
    nextQuestions: QUESTION_IDS.SYMPTOMS_DATE,
    stepNumber: 18
  },
  {
    id: QUESTION_IDS.SYMPTOMS_DATE,
    category: CATEGORIES.SYMPTOMS,
    xmlCode: 'SZ',
    inputType: 'date',
    text: 'questions.texts.symptoms_date',
    stepNumber: 19,
    nextQuestions: QUESTION_IDS.LUNG_DISEASE
  },
  {
    id: QUESTION_IDS.LUNG_DISEASE,
    category: CATEGORIES.ILLNESS,
    xmlCode: 'D0',
    inputType: 'radio',
    text: 'questions.texts.lung_disease',
    options: [
      'questions.answers.yes',
      'questions.answers.no',
      'questions.answers.unkown'
    ],
    scoreMap: [1, 0, 0],
    nextQuestions: QUESTION_IDS.DIABETES,
    stepNumber: 20
  },
  {
    id: QUESTION_IDS.DIABETES,
    category: CATEGORIES.ILLNESS,
    xmlCode: 'D1',
    inputType: 'radio',
    text: 'questions.texts.diabetes',
    options: [
      'questions.answers.yes',
      'questions.answers.no',
      'questions.answers.unkown'
    ],
    scoreMap: [1, 0, 0],
    nextQuestions: QUESTION_IDS.HEART_DISEASE,
    stepNumber: 21
  },
  {
    id: QUESTION_IDS.HEART_DISEASE,
    category: CATEGORIES.ILLNESS,
    xmlCode: 'D2',
    inputType: 'radio',
    text: 'questions.texts.heart_disease',
    options: [
      'questions.answers.yes',
      'questions.answers.no',
      'questions.answers.unkown'
    ],
    scoreMap: [1, 0, 0],
    nextQuestions: QUESTION_IDS.ADIPOSITAS,
    stepNumber: 22
  },
  {
    id: QUESTION_IDS.ADIPOSITAS,
    category: CATEGORIES.ILLNESS,
    xmlCode: 'D3',
    inputType: 'radio',
    text: 'questions.texts.adipositas',
    options: [
      'questions.answers.yes',
      'questions.answers.no',
      'questions.answers.unkown'
    ],
    scoreMap: [1, 0, 0],
    nextQuestions: QUESTION_IDS.CORTISON,
    stepNumber: 23
  },
  {
    id: QUESTION_IDS.CORTISON,
    category: CATEGORIES.MEDICATION,
    xmlCode: 'M0',
    inputType: 'radio',
    text: 'questions.texts.cortison',
    options: [
      'questions.answers.yes',
      'questions.answers.no',
      'questions.answers.unkown'
    ],
    scoreMap: [1, 0, 0],
    nextQuestions: QUESTION_IDS.IMMUNE_SUPPRESSIVA,
    stepNumber: 24
  },
  {
    id: QUESTION_IDS.IMMUNE_SUPPRESSIVA,
    category: CATEGORIES.MEDICATION,
    xmlCode: 'M1',
    inputType: 'radio',
    text: 'questions.texts.immune_suppressiva',
    options: [
      'questions.answers.yes',
      'questions.answers.no',
      'questions.answers.unkown'
    ],
    scoreMap: [1, 0, 0],
    nextQuestions: QUESTION_IDS.FLU_SHOT,
    stepNumber: 25
  },
  {
    id: QUESTION_IDS.FLU_SHOT,
    category: CATEGORIES.MEDICATION,
    xmlCode: 'M2',
    inputType: 'radio',
    text: 'questions.texts.flu_shot',
    options: [
      'questions.answers.yes',
      'questions.answers.no',
      'questions.answers.unkown'
    ],
    scoreMap: [1, 0, 0],
    nextQuestions: FLOW_RELEVANT_IDS.END,
    stepNumber: 26
  }
];

export const MAX_STEP_NUMBER = questions.reduce((max, question) => {
  return question.stepNumber > max ? question.stepNumber : max;
}, 0);

export const QUESTION_XML_MAP = new Map<string, string>(questions.map((question) => [question.id, question.xmlCode]));
