import config from "@/lib/config";
import { Redis } from "@upstash/redis";

const redis = new Redis({
    url: config.env.redisUrl,
    token: config.env.redisToken
})

export default redis;