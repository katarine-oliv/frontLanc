export class Cliente{
  id: number | undefined;
  nome!: string | undefined;
  telefone!: string | undefined;
  email!: string | undefined;
  cpf!: string | undefined;


  constructor(id?: number, nome?: string, telefone?: string, email?: string, cpf?: string) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.cpf = cpf;
  }
}
