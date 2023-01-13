import { Component, OnInit } from '@angular/core';
import { Tareas } from '../../../interfaces/todo.interface';
import { TodoService } from '../../../service/todo.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tareas-view',
  templateUrl: './tareas-view.component.html',
  styleUrls: ['./tareas-view.component.scss'],
})
export class TareasViewComponent implements OnInit {
  loading: boolean = false;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    if (this.listadoTareas !== null && !this.listadoTareas.length) {
      this.loading = true;
      this.stateLocal();
    }
  }

  get listadoTareas() {
    return this.todoService.dataTareas;
  }

  completado(tarea: Tareas): void {
    this.loading = true;
    setTimeout(() => {
      tarea.completado = true;
      this.todoService.updateStateTareas(tarea);
      this.loading = false;
    }, 1000);
  }

  eliminar(tarea: Tareas): void {
    Swal.fire({
      title: '¿Esta seguro que desea eliminar la tarea?',
      showDenyButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;
        setTimeout(() => {
          this.todoService.deleteTarea(tarea);
          this.loading = false;
          Swal.fire('Actualizado!', '', 'success');
        }, 1000);
      } else if (result.isDenied) {
        Swal.fire('No se efectuaron cambios.', '', 'info');
        this.loading = false;
      }
    });
  }

  //* LOCALSTORAGE
  private stateLocal(): void {
    const savedStorage = JSON.parse(localStorage.getItem('tareas')!);
    this.todoService.dataTareas = savedStorage;
    this.loading = false;
  }
}
