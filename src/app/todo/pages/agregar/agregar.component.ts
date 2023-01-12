import { Component, OnInit } from '@angular/core';
import { Tareas } from '../../interfaces/todo.interface';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  tarea: Tareas = {
    titulo: '',
    fecha: '',
    descripcion: '',
    completado: false,
  };

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.todoService.pushTareas(this.tarea);
  }
}
