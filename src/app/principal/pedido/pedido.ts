import { Cliente } from "../cliente/cliente";
import { Produto } from "../produto/produto";

export class Pedido{
    id: number | undefined
    quantidade!: number | undefined
    observacao!: string | undefined
    total!: boolean | undefined
    data!: Date | undefined
    cliente!: Cliente | undefined
    produto!: Produto | undefined


  constructor(id?: number, quantidade?: number, observacao?: string, total?: boolean, data?: Date, cliente?: Cliente, produto?: Produto) {
    this.id = id;
    this.quantidade = quantidade;
    this.observacao = observacao;
    this.total = total;
    this.data = data;
    this.cliente = cliente;
    this.produto = produto;
  }
}
