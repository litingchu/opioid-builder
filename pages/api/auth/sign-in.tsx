import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'db';
import bcrypt from 'bcrypt';
import { user as UserType } from '@prisma/client';

type SignInResponseData =
  | {
      username: string;
      firstName: string;
      lastName: string;
      userId: number;
    }
  | { error: string };

export default async function signInHandler(
  req: NextApiRequest,
  res: NextApiResponse<SignInResponseData>
) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const user: UserType | null = await prisma.user.findUnique({
      where: {
        username
      }
    });
    if (user) {
      const { password: hashPassword } = user;
      bcrypt.compare(password, hashPassword, (err, result) => {
        if (result) {
          const { username, firstName, lastName, userId } = user;
          res.status(200).json({ username, firstName, lastName, userId });
        } else {
          res.status(400).json({ error: 'Incorrect password' });
        }
      });
    } else {
      res.status(403).json({ error: 'No user with matching username' });
    }
  } else {
    res.status(400).json({ error: 'Endpoint only has post method' });
  }
}
