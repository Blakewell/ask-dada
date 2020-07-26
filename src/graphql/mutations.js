/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createFamilyMember = /* GraphQL */ `
  mutation CreateFamilyMember(
    $input: CreateFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    createFamilyMember(input: $input, condition: $condition) {
      firstName
      lastName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateFamilyMember = /* GraphQL */ `
  mutation UpdateFamilyMember(
    $input: UpdateFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    updateFamilyMember(input: $input, condition: $condition) {
      firstName
      lastName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteFamilyMember = /* GraphQL */ `
  mutation DeleteFamilyMember(
    $input: DeleteFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    deleteFamilyMember(input: $input, condition: $condition) {
      firstName
      lastName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createQuestions = /* GraphQL */ `
  mutation CreateQuestions(
    $input: CreateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    createQuestions(input: $input, condition: $condition) {
      questionType
      questionDescription
      familyMembers {
        firstName
        lastName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestions = /* GraphQL */ `
  mutation UpdateQuestions(
    $input: UpdateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    updateQuestions(input: $input, condition: $condition) {
      questionType
      questionDescription
      familyMembers {
        firstName
        lastName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestions = /* GraphQL */ `
  mutation DeleteQuestions(
    $input: DeleteQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    deleteQuestions(input: $input, condition: $condition) {
      questionType
      questionDescription
      familyMembers {
        firstName
        lastName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
