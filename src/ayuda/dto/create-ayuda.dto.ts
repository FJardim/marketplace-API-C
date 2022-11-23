import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateAyudaDto {
    @Expose()
    public readonly titulo: string;

    @Expose()
    public readonly descripcion: string;

    @Expose()
    public readonly id_topico: number;

}