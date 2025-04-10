import { NextApiRequest, NextApiResponse } from 'next';
import client from 'prom-client';

client.collectDefaultMetrics();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', client.register.contentType);
  const metrics = await client.register.metrics();
  res.status(200).send(metrics);
}