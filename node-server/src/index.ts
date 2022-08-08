import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import context from './context';
import { resolvers } from './resolvers';

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');

const server = new ApolloServer({
  typeDefs,
  // @ts-ignore
  resolvers,
  context,
});

const app = express();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 8000;

app.listen({ port: PORT }, () =>
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
