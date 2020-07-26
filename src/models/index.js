// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const QuestionType = {
  "TURN_FOR_SONGS": "TurnForSongs",
  "TURN_FOR_CLEAN_TALBE": "TurnForCleanTalbe",
  "TURN_FOR_SET_TABLE": "TurnForSetTable"
};

const { Todo, FamilyMember, Questions } = initSchema(schema);

export {
  Todo,
  FamilyMember,
  Questions,
  QuestionType
};