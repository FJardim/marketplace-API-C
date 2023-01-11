const MAX_PER_PAGE = 300;

export class PaginacionOpcion {
    constructor(public page: number, protected _perPage: number) { }

    get perPage(): number {
        return this._perPage > MAX_PER_PAGE ? MAX_PER_PAGE : this._perPage;
    }

    get offset(): number {
        return (this.page - 1) * this.perPage;
    }

    static fromQueryObject(query: Record<string, string>): PaginacionOpcion {
        const { page = 1, perPage = 10 } = query;

        return new PaginacionOpcion(+page, +perPage);
    }
}