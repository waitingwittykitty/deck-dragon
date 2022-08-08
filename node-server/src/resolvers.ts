import { sampleUser } from './data';

export const resolvers = {
  Query: {
    me: () => sampleUser,
  },
  Mutation: {
    deal: () => {
      const { current, finished, cardsLeft, acesLeft } = sampleUser.game;
      return { current, finished, cardsLeft, acesLeft };
    },
  },
};
