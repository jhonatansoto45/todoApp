import { Component } from '@angular/core';
import { Tareas } from '../../interfaces/todo.interface';
import { TodoService } from '../../service/todo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent {
  loading: boolean = false;
  tarea: Tareas = {
    titulo: '',
    fecha: '',
    descripcion: '',
    completado: false,
  };

  constructor(private todoService: TodoService) {}

  onSubmit(): void {
    const msg: string = this.valideProperty();

    if (msg !== '') {
      this.popupError(msg);
      return;
    }
    this.loading = true;

    setTimeout(() => {
      this.todoService.pushTareas(this.tarea);
      this.popupSuccess();
      this.resetModel();
      this.loading = false;
    }, 1000);
  }

  //* UTILIDADES
  private popupSuccess(): void {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Guardado exitosamente.',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  private popupError(msg: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${msg}`,
    });
  }

  private valideProperty(): string {
    let msg: string = '';

    if (this.tarea.fecha.length <= 0)
      msg = msg.concat('Fecha no puede estar vacío.\n');
    if (this.tarea.titulo.length <= 0)
      msg = msg.concat('Titulo no puede estar vacío.\n');
    if (this.tarea.descripcion.length <= 0)
      msg = msg.concat('Descripción no puede estar vacío.\n');

    return msg;
  }

  private resetModel(): void {
    this.tarea = {
      titulo: '',
      fecha: '',
      descripcion: '',
      completado: false,
    };
  }
}
