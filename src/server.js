import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers.js';
import { schema } from './schema.js';

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  csrfPrevention: true,
});

const port = 4001;

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at URL ${url} 🚀🚀🚀`);
});
