import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { PaginacionOpcion } from "./paginacion-opcion";

@Injectable()
export class PaginacionPipe implements PipeTransform {
    transform(value: Record<string, string>, metadata: ArgumentMetadata) {
        return PaginacionOpcion.fromQueryObject(value);
    }
}