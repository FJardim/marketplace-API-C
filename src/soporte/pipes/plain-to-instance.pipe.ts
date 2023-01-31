import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { ClassConstructor, plainToInstance } from 'class-transformer';

@Injectable()
export class PlainToInstancePipe<T> implements PipeTransform {
    constructor(private readonly classConstructor: ClassConstructor<T>) { }

    transform(value: Object) {
        return plainToInstance(this.classConstructor, value);
    }
}