import { Request } from 'express';
import { verify } from 'jsonwebtoken';

export const APP_SECRET = process.env.APP_SECRET ?? 'appsecret321';

interface Token {
  userId: number;
  username: string;
}

const context = ({ req }: { req: Request }) => {
  const authHeader = req.get('Authorization');
  if (authHeader) {
    try {
      const token = authHeader.replace('Bearer ', '');
      const verifiedToken = verify(token, APP_SECRET) as Token;
      return { user: verifiedToken && Number(verifiedToken.userId) };
    } catch {
      return { user: null };
    }
  }
  return { user: null };
};

export default context;
