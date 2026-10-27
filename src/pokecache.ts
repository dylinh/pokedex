export type CacheEntry<T> = {
    createdAt: number,
    val: T
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number) {
        this.#interval = interval
        this.#startReapLoop()
    }

    add<T>(key: string, val: T): void {
        this.#cache.set(key, {createdAt: Date.now(), val})
    }

    get<T>(key: string): T | undefined{
        const obj = this.#cache.get(key)

        if (!obj){
            return undefined
        }

        return obj.val
    }

    #reap(){
        for (const [key, value] of this.#cache){
            if (value.createdAt < (Date.now() - this.#interval)) {
                this.#cache.delete(key)
            }
        }
    }

    #startReapLoop(){
        let val = setInterval(() => {
            this.#reap()
        }
        , this.#interval)
        this.#reapIntervalId = val;
    }

    stopReapLoop(){
        clearInterval(this.#reapIntervalId)
        this.#reapIntervalId = undefined
    }

}
