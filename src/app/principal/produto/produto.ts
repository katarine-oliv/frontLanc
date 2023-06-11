export class Produto{
    id: number | undefined
    nome!: string | undefined
    valor!: number | undefined
    descricao!: string | undefined


  constructor(id?: number, nome?: string, valor?: number, descricao?: string) {
    this.id = id;
    this.nome = nome;
    this.valor = valor;
    this.descricao = descricao;
  }
}
