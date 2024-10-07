import { Component } from '@angular/core';
import { AdoptanteModel } from '../shared/adoptante.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudModel } from '../shared/solicitud.model';
import { MascotaModel } from '../shared/mascota.model';
import { SolicitudService } from '../shared/solicitud.service';
import { AdoptanteService } from '../shared/adoptante.service';

@Component({
  selector: 'app-agregar-solicitud',
  templateUrl: './agregar-solicitud.component.html',
  styleUrl: './agregar-solicitud.component.css'
})
export class AgregarSolicitudComponent {
  idMascota = '';
  mascota = new MascotaModel('','','','','');
  adoptante = new AdoptanteModel('','','','','');
  solicitud = new SolicitudModel('','','','');
  constructor (private solicitudService: SolicitudService,private adoptanteService: AdoptanteService, private route: ActivatedRoute, private router: Router ){
  }

  onSubmit(){
    if(this.adoptante.cedula) {
      this.solicitud.adoptante_id = this.adoptante.cedula;
      this.solicitud.mascota_id= this.idMascota;
      this.solicitudService.agregarsolicitud(this.solicitud).subscribe({
        next: data=> {
          console.log(data);
          this.router.navigate(['/mascotas']);
        },
        error: err=>{
          console.log(`Error al agregar si no existe ${err}`);
        }
      })
    }
  }
}
