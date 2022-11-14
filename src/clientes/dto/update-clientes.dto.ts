import { Exclude } from "class-transformer";
import { CreateClientesDto } from "./create-clientes.dto";

@Exclude()
export class UpdateClientesDto extends CreateClientesDto { }