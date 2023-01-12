import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HomeViewComponent } from './pages/components/home-view/home-view.component';
import { HomeComponent } from './pages/home/home.component';
import { TareasComponent } from './pages/tareas/tareas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'about',
        component: HomeViewComponent,
      },
      {
        path: 'agregar',
        component: AgregarComponent,
      },
      {
        path: 'ver',
        component: TareasComponent,
      },
      {
        path: '**',
        redirectTo: 'about',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
