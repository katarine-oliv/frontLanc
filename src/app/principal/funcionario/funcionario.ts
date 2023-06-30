
export class Funcionario{
  id: number | undefined
  nome!: string | undefined
  email!: string | undefined
  senha!: string | undefined
  cargo!: string | undefined
  token!: boolean | undefined

  constructor(id?: number, nome?: string, email?: string, senha?: string, cargo?: string, token?: boolean) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.cargo = cargo;
    this.token = token;
  }


}
