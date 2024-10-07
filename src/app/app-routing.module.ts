import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { SolicitudAdopcionComponent } from './solicitud-adopcion/solicitud-adopcion.component';
import { AgregarSolicitudComponent } from './agregar-solicitud/agregar-solicitud.component';
import { ListaAdoptantesComponent } from './lista-adoptantes/lista-adoptantes.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';

const routes: Routes = [
  {path: 'mascotas', component: ListaMascotasComponent},
  {path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent},
  {path: 'mascotas/agregar', component: EditarMascotasComponent},
  {path: 'solicitudes', component: SolicitudAdopcionComponent},
  {path: 'solicitudes/agregar/:idMascota', component: AgregarSolicitudComponent},
  {path: 'adoptantes', component: ListaAdoptantesComponent},
  {path: 'adoptantes/editar/:idAdoptante', component: ListaAdoptantesComponent},
  {path: 'lista', component: ListaSolicitudesComponent},
  {path: 'lista/editar/:idAdoptante', component: ListaSolicitudesComponent},
  {path: '**', redirectTo: '/solicitudes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
