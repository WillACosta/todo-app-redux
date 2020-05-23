export class Todo {
  public id: number;
  public texto: string;
  public concluido: boolean;

  constructor(texto: string) {
    this.texto = texto;

    // this.id = new Date().getTime();
    this.id = Math.random();
    this.concluido = false;
  }
}
