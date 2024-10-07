import { Component, OnInit } from '@angular/core';
import { AdoptanteService } from '../shared/adoptante.service';
import { AdoptanteModel } from '../shared/adoptante.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-adoptantes',
  templateUrl: './lista-adoptantes.component.html',
  styleUrl: './lista-adoptantes.component.css'
})
export class ListaAdoptantesComponent implements OnInit{
  adoptantes: Observable<AdoptanteModel[]> | undefined;
  constructor(private adoptanteService: AdoptanteService){}
  ngOnInit() {
    // this.adoptantes=this.adoptanteService.obteneradoptantes();
  }

  borrarAdoptante(idAdoptante:string){
    this.adoptanteService.borraradoptante(idAdoptante).subscribe({
      next: data=>{
        console.log(`Registro Eliminado`);
        this.ngOnInit();
      },
      error: err=>{
        console.log(`Error al eliminar Registro ${err}`);
      }
    });
  }
}
