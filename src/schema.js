import { gql } from 'apollo-server';

export const schema = gql`
  type Todo {
    id: String!
    title: String!
    isActive: Boolean!
    description: String
  }

  type Query {
    allTodos: [Todo!]!
    todoById(id: String!): Todo
  }

  type Mutation {
    addTodo(title: String!, description: String): Todo!
  }
`;
