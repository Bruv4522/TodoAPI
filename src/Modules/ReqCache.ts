import { LRUCache } from "lru-cache";

type info = {
    ip: string,
    dateTime: Date
};

const ReqCache = new LRUCache<string, info>({
    ttl: 1000 * 60 * 1,
    max: 100000
});

export default ReqCache;
