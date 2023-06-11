import { Cliente } from "../cliente/cliente";
import { Produto } from "../produto/produto";

export class Pedido{
    id: number | undefined;
    quantidade!: number | undefined;
    cliente!: Cliente | undefined;
    produto!: Produto | undefined;

    constructor(id?: number, quantidade?: number, cliente?: Cliente, produto?: Produto){
        this.id = id;
        this.quantidade = quantidade;
        this.cliente = cliente;
        this.produto = produto;
    }
}