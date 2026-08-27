import RateCache from "../Modules/RateCache.js";

function RateLimiter(req: any, res: any, next: any) {
    const existingIp = RateCache.get(req.ip);

    if (!existingIp) {
        RateCache.set(req.ip, 1);
        return next();
    }

    if (existingIp && existingIp >= 60) {
        return res.status(429).json({ error: "Too many requests from this IP per minute" });
    }

    RateCache.set(req.ip, existingIp + 1);
    return next();
}

export default RateLimiter;