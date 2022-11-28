import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";

@Entity({ name: 'metodos_pagos' })
export class MetodosPagos {
    @PrimaryGeneratedColumn({ name: 'codigo' })
    public readonly codigo: string;

    @Column({ name: 'nombre' })
    public nombre: string

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<MetodosPagos>) {
        Object.assign(this, data);
    }

}