export interface TaskProps {
  id?: string;
  titulo: string;
  descripcion: string;
  estado?: string;
  fechaRegistro: Date;
  userId: string;
  tipo: string;
}

export class Task {
  id?: string;
  titulo: string;
  descripcion: string;
  estado: string;
  fechaRegistro: Date;
  userId: string;
  tipo: string;

  constructor({
    id,
    titulo,
    descripcion,
    estado = "P",
    fechaRegistro = new Date(),
    userId,
    tipo,
  }: TaskProps) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.fechaRegistro = fechaRegistro;
    this.userId = userId;
    this.tipo = tipo;
  }
}
