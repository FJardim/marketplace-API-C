import { Exclude, Expose, Transform } from "class-transformer";
import { ValidateIf } from "class-validator";
import { FavoritoType } from '../enum/favorito-type.enum';
import { Clientes } from '../../clientes/entities/clientes.entity';
import { Producto } from '../../producto/entities/producto.entity';
import { Exists } from "src/validacion/exists..constrain";

@Exclude()
export class CreateFavoritoDto {
    @Expose()
    @Transform(({ obj, value }) => obj.type === FavoritoType.PRODUCTO ? value : null)
    @ValidateIf((obj) => obj.type === FavoritoType.PRODUCTO)
    @Exists(Producto)
    public readonly producto_id: number;

    @Expose()
    @Transform(({ obj, value }) => obj.type === FavoritoType.CLIENTE ? value : null)
    @ValidateIf((obj) => obj.type === FavoritoType.CLIENTE)
    @Exists(Clientes)
    public readonly cliente_id: number;

}