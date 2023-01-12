import { Component, OnInit } from '@angular/core';
import { Tareas } from '../../interfaces/todo.interface';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  mdFecha: string = '';
  mdTitulo: string = '';
  mdDescripcion: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const tarea: Tareas = {
      fecha: this.mdFecha,
      titulo: this.mdTitulo,
      descripcion: this.mdDescripcion,
      completado: false,
    };
    this.todoService.pushTareas(tarea);
  }
}
