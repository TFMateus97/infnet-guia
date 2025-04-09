import { NextApiRequest, NextApiResponse } from 'next';
import client from 'prom-client';

// Coleta as métricas padrão (tempo de processo, memória etc.)
client.collectDefaultMetrics();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', client.register.contentType);
  const metrics = await client.register.metrics();
  res.status(200).send(metrics);
}