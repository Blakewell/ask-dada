import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum QuestionType {
  TURN_FOR_SONGS = "TurnForSongs",
  TURN_FOR_CLEAN_TALBE = "TurnForCleanTalbe",
  TURN_FOR_SET_TABLE = "TurnForSetTable"
}



export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

export declare class FamilyMember {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  constructor(init: ModelInit<FamilyMember>);
  static copyOf(source: FamilyMember, mutator: (draft: MutableModel<FamilyMember>) => MutableModel<FamilyMember> | void): FamilyMember;
}

export declare class Questions {
  readonly id: string;
  readonly questionType: QuestionType | keyof typeof QuestionType;
  readonly questionDescription: string;
  constructor(init: ModelInit<Questions>);
  static copyOf(source: Questions, mutator: (draft: MutableModel<Questions>) => MutableModel<Questions> | void): Questions;
}