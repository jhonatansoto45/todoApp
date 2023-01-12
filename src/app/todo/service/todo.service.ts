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
}
