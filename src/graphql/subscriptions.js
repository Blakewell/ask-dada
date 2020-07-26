/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
export const onCreateFamilyMember = /* GraphQL */ `
  subscription OnCreateFamilyMember {
    onCreateFamilyMember {
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
export const onUpdateFamilyMember = /* GraphQL */ `
  subscription OnUpdateFamilyMember {
    onUpdateFamilyMember {
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
export const onDeleteFamilyMember = /* GraphQL */ `
  subscription OnDeleteFamilyMember {
    onDeleteFamilyMember {
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
export const onCreateQuestions = /* GraphQL */ `
  subscription OnCreateQuestions {
    onCreateQuestions {
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
export const onUpdateQuestions = /* GraphQL */ `
  subscription OnUpdateQuestions {
    onUpdateQuestions {
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
export const onDeleteQuestions = /* GraphQL */ `
  subscription OnDeleteQuestions {
    onDeleteQuestions {
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
