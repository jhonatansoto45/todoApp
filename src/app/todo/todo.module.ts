import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { AsideComponent } from './pages/components/aside/aside.component';
import { BannerComponent } from './pages/components/banner/banner.component';


@NgModule({
  declarations: [
    HomeComponent,
    TareasComponent,
    AgregarComponent,
    AsideComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
