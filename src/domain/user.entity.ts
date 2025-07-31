export interface UserProps {
  id?: string;
  correo: string;
}

export class User {
  id?: string;
  correo: string;

  constructor({ id, correo }: UserProps) {
    this.id = id;
    this.correo = correo;
  }
}
