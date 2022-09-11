import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db';
import bcrypt from 'bcrypt';

type Data =
  | {
      userId: number;
    }
  | { error: string };

export default async function signUpHandler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { method } = req;
  if (method === 'POST') {
    const { username, password, firstName, lastName } = req.body;

    bcrypt.hash(password, 10, async (err, hash) => {
      // Store hash in your password DB.
      const newUser = await prisma.user.create({
        data: { username, password: hash, firstName, lastName }
      });

      const { userId } = newUser;
      res.status(201).json({ userId });
    });
  } else {
    res.status(400).json({ error: 'Endpoint only has post method' });
  }
}
