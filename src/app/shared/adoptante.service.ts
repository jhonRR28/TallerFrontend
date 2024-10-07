import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdoptanteModel } from './adoptante.model';

@Injectable({
  providedIn: 'root'
})
export class AdoptanteService {

  BASE_URL='http://localhost:4000';
  constructor(private http: HttpClient) {
  }

  //Lista completa de adoptantes
  obteneradoptantes(){
    return this.http.get<AdoptanteModel[]>(`${this.BASE_URL}/adoptantes/buscar`);
  }

  //Buscar una adoptante por ID
  obteneradoptante(cedula:string){
    return this.http.get<AdoptanteModel>(`${this.BASE_URL}/adoptantes/buscarId/${cedula}`);
  }

  //Crear una adoptante
  agregaradoptante(adoptante: AdoptanteModel){
    return this.http.post<string>(`${this.BASE_URL}/adoptantes/crear`,adoptante);
  }

  //Actualizar una adoptante
  actualizaradoptante(adoptante: AdoptanteModel){
    return this.http.put<string>(`${this.BASE_URL}/adoptantes/actualizar/${adoptante.cedula}`,adoptante);
  }

  //ELiminar una adoptante
  borraradoptante(cedula: string){
    return this.http.delete<string>(`${this.BASE_URL}/adoptantes/eliminar/${cedula}`);
  }
}
