import { v4 as uuid } from 'uuid';
import { todos } from './data.js';

export const resolvers = {
  Query: {
    allTodos: () => {
      console.log('Get todos    ');
      return todos;
    },
    todoById: (_ctx, { id }) => {

    },
  },
  Mutation: {
    addTodo: (_cxt, variables) => {
      const { title, description } = variables;

      const newTodo = {
        id: uuid(),
        title,
        isActive: false,
        description,
      };

      todos.push(newTodo);

      return newTodo;
    },
  },
};
