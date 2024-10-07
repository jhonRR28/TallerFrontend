import { Component, OnInit } from '@angular/core';
import { MascotaModel } from '../shared/mascota.model';
import { Observable } from 'rxjs';
import { MascotaService } from '../shared/mascotas.service';

@Component({
  selector: 'app-solicitud-adopcion',
  templateUrl: './solicitud-adopcion.component.html',
  styleUrl: './solicitud-adopcion.component.css'
})
export class SolicitudAdopcionComponent implements OnInit{
  mascotas: Observable<MascotaModel[]> | undefined;
  constructor(private mascotaService: MascotaService){}
  ngOnInit(): void {
    this.mascotas=this.mascotaService.obtenerMascotas();
  }

}
