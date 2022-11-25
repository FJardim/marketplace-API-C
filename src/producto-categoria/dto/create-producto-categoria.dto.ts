import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateProductoCategoriaDto {
    @Expose()
    public readonly producto_id: number;

    @Expose()
    public readonly categoria_id: number;

}