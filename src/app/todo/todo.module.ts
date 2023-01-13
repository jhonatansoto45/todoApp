import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { AsideComponent } from './pages/components/aside/aside.component';
import { BannerComponent } from './pages/components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeViewComponent } from './pages/components/home-view/home-view.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { TareasViewComponent } from './pages/components/tareas-view/tareas-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    TareasComponent,
    AgregarComponent,
    AsideComponent,
    BannerComponent,
    HomeViewComponent,
    TareasViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    SharedModule
  ],
})
export class TodoModule {}
