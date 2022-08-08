import { sampleUser } from './data';
import { createGame } from './db';

export const resolvers = {
  Query: {
    me: () => sampleUser,
  },
  Mutation: {
    createGame: async () => {
      const game = await createGame();
      return game;
    },
    deal: () => {
      const { current, finished, cardsLeft, acesLeft } = sampleUser.game;
      return { current, finished, cardsLeft, acesLeft };
    },
  },
};
