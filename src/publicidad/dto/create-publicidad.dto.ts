import { Exclude, Expose } from "class-transformer";
import { MaxLength, MinLength } from "class-validator";

@Exclude()
export class CreatePublicidadDto {
  @Expose()
  public readonly nombre: string;

  @Expose()
  public readonly texto: string;

  @Expose()
  public readonly imagen: string;

}