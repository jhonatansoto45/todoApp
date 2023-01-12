import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../service/todo.service';

@Component({
  selector: 'app-tareas-view',
  templateUrl: './tareas-view.component.html',
  styleUrls: ['./tareas-view.component.scss'],
})
export class TareasViewComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  get listadoTareas() {
    return this.todoService.tareas;
  }
}
