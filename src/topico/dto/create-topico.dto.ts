import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateTopicoDto {
    @Expose()
    public readonly nombre: string;

    @Expose()
    public readonly logo: string;

}
