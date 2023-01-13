import { Injectable } from '@angular/core';
import { Tareas } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tareas: Tareas[] = [
    {
      fecha: '2022-01-12',
      titulo: 'Organizar habitación',
      descripcion: 'Organizar todo el cuarto.',
      completado: false,
    },
  ];

  constructor() {}

  pushTareas(tarea: Tareas): void {
    if (!this.tareas.some((item) => item.titulo === tarea.titulo)) {
      this.tareas.push(tarea);
      localStorage.setItem('tareas', JSON.stringify(tarea));
    } else {
      console.warn('Ya se encuentra la tarea.');
    }
  }
}
