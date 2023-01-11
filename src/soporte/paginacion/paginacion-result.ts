import { ClassConstructor, plainToInstance } from "class-transformer";

export class PaginacionResult<T> {
    public numberOfPages: number;

    constructor(public results: T[], public total: number, private size: number) {
        this.numberOfPages = Math.ceil(total / size);
    }

    toClass<V>(dtoClass: ClassConstructor<V>): PaginacionResult<V> {
        return new PaginacionResult(plainToInstance(dtoClass, this.results), this.total, this.size);
    }
}