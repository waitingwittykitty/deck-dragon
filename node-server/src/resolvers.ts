import { PrismaClient } from '@prisma/client';
import { compare, hash } from 'bcryptjs';
import { IResolvers } from 'graphql-tools';
import { sign } from 'jsonwebtoken';
import { APP_SECRET } from './context';
import { createGame, deal, getGame, resetGame } from './db';

export const resolvers: IResolvers = {
  Query: {
    me: (_parent, _args, context) => {
      return context.user;
    },
    game: (_parent, _args, context) => {
      const gameId = context?.user?.game;
      return getGame(gameId);
    },
  },
  Mutation: {
    login: async (
      _parent,
      { password, username }: { password: string; username: string },
      { prisma }: { prisma: PrismaClient }
    ) => {
      let user = await prisma.user.findUnique({ where: { username } });

      if (!user) {
        const hashedPassword = await hash(password, 10);

        user = await prisma.user.create({
          data: {
            username,
            password: hashedPassword,
          },
        });

        const game = await createGame(user.id);

        return {
          token: sign({ id: user.id, username: user.username, game: game.id }, APP_SECRET),
          user,
        };
      }

      const passwordValid = await compare(password, user.password);

      if (!passwordValid) {
        return {
          errors: { email: 'Invalid credentials' },
        };
      }

      const game = await createGame(user.id);

      return {
        token: sign({ id: user.id, username: user.username, game: game.id }, APP_SECRET),
        user,
        game: game.id,
      };
    },
    createGame: async (_parent, _args, context) => {
      const userId = context?.user?.id;

      if (!userId) {
        throw new Error('Forbidden action detected');
      }

      const game = await createGame(userId);
      return game;
    },
    reset: (_parent, _args, context) => {
      const gameId = context?.user?.game;
      return resetGame(gameId);
    },
    deal: (_parent, _args, context) => {
      const gameId = context?.user?.game;
      return deal(gameId);
    },
  },
};
