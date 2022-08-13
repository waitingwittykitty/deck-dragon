import type { RedisClientType } from '@redis/client';
import { createClient } from 'redis';

const redisClient: RedisClientType = createClient();

redisClient.on('error', (error) => console.error(`Error : ${error}`));

(async () => {
  await redisClient.connect();
})();

export default redisClient;
