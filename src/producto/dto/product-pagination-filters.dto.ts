import { Exclude, Expose, Transform, Type } from 'class-transformer';

@Exclude()
export class ProductPaginationFiltersDto {
    @Expose()
    @Type(() => Number)
    @Transform(({ value }) => typeof value === 'undefined' ? 1 : value)
    public page: number;

    @Expose()
    @Type(() => Number)
    @Transform(({ value }) => typeof value === 'undefined' ? 10 : value)
    public perPage: number;

    @Expose()
    @Type(() => Number)
    public tiendaId: number;

    @Expose()
    public descuento: string;

    @Expose()
    @Type(() => Number)
    public maxPrecio: number;
}