
export class Funcionario{
  id: number | undefined;
  nome!: string | undefined;
  email!: string | undefined;
  senha!: string | undefined;
  cargo!: string | undefined;

  constructor(id?: number, nome?: string, email?: string, senha?: string, cargo?: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.cargo = cargo;
  }


}
