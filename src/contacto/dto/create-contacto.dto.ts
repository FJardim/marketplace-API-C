import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateContactoDto {

  @Expose()
  public readonly nombre: string;

  @Expose()
  public readonly asunto: string;

  @Expose()
  public readonly correo: string;

  @Expose()
  public readonly descripcion: string;
}
