import { Exclude, Expose } from "class-transformer";
import { MaxLength, MinLength } from "class-validator";

@Exclude()
export class CreatePublicidadDto {
  @Expose()
  @MaxLength(250)
  @MinLength(2)
  public readonly nombre: string;

  @Expose()
  @MaxLength(250)
  @MinLength(15)
  public readonly texto: string;

  @Expose()
  public readonly imagen: string;

}