import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateMetodosPagosDto {
    @Expose()
    public readonly nombre: string;

}