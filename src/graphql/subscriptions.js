/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFamilyMember = /* GraphQL */ `
  subscription OnCreateFamilyMember {
    onCreateFamilyMember {
      id
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFamilyMember = /* GraphQL */ `
  subscription OnUpdateFamilyMember {
    onUpdateFamilyMember {
      id
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFamilyMember = /* GraphQL */ `
  subscription OnDeleteFamilyMember {
    onDeleteFamilyMember {
      id
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestions = /* GraphQL */ `
  subscription OnCreateQuestions {
    onCreateQuestions {
      id
      questionType
      questionDescription
      familyMembers {
        id
        firstName
        lastName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestions = /* GraphQL */ `
  subscription OnUpdateQuestions {
    onUpdateQuestions {
      id
      questionType
      questionDescription
      familyMembers {
        id
        firstName
        lastName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestions = /* GraphQL */ `
  subscription OnDeleteQuestions {
    onDeleteQuestions {
      id
      questionType
      questionDescription
      familyMembers {
        id
        firstName
        lastName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
