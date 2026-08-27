import { LRUCache } from "lru-cache";

const ReqCache = new LRUCache<string, number>({
    ttl: 1000 * 60 * 1,
    max: 100000
});

export default ReqCache;
