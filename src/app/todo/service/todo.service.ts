import { Injectable } from '@angular/core';
import { Tareas } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  dataTareas: Tareas[] = [];

  constructor() {}

  private localStorage(tarea: Tareas): void {
    this.dataTareas.unshift(tarea);
    localStorage.setItem('tareas', JSON.stringify(this.dataTareas));
  }

  pushTareas(tarea: Tareas): void {
    if (this.dataTareas === null) this.dataTareas = []; //* EL LINT ME RECONOCE ESTO COMO NULL ENTONCES LO IGUALO A UN ARRAY

    if (!this.dataTareas.some((item) => item.titulo === tarea.titulo))
      this.localStorage(tarea);
    else console.warn('Ya se encuentra la tarea.');
  }

  updateStateTareas(item: Tareas): void {
    const index = this.dataTareas.findIndex(
      (tarea) => tarea.titulo === item.titulo
    );
    this.dataTareas.splice(index, 1);
    this.dataTareas.push(item);
    localStorage.setItem('tareas', JSON.stringify(this.dataTareas));
  }

  deleteTarea(item: Tareas): void {
    const index = this.dataTareas.findIndex(
      (tarea) => tarea.titulo === item.titulo
    );
    this.dataTareas.splice(index, 1);
    localStorage.setItem('tareas', JSON.stringify(this.dataTareas));
  }
}
