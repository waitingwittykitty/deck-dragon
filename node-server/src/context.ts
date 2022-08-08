import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import { verify } from 'jsonwebtoken';

const prisma = new PrismaClient();

// eslint-disable-next-line
export function createContext(req: any) {
  return {
    ...req,
    prisma,
  };
}

export const APP_SECRET = process.env.APP_SECRET ?? 'appsecret321';

interface Token {
  id: number;
  username: string;
  game: string;
}

const context = ({ req }: { req: Request }) => {
  const newContext = { user: null, prisma };
  const authHeader = req.get('Authorization');
  if (authHeader) {
    try {
      const token = authHeader.replace('Bearer ', '');
      const verifiedToken = verify(token, APP_SECRET) as Token;
      return { user: verifiedToken, prisma };
    } catch {
      return newContext;
    }
  }
  return newContext;
};

export default context;
