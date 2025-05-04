//El servicio es el encargado de gestionar las temáticas y direcciones. El componente padre(app.component) se conectará con este servicio para recibir y actualizar los datos.
import { Injectable } from '@angular/core';
import { ElementoTematica } from '../model/ElementoTematica';
//Cuando agrego una nueva temática, el servicio debe avisar a los componentes suscritos, sirve para compartir datos entre varios componentes o partes de una aplicación y para avisar si hay una actualizacion.
//Usando .next(valor) se actualiza el valor y se notifica a todos los suscriptores.
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TematicasService {
  // Array que almacena las temáticas y direcciones
  private datosTematicas: ElementoTematica[] = [
    { tematica: 'deportes', direccion: 'http://www.marca.es/' },
    { tematica: 'libros', direccion: 'http://www.puntolibro.es/' },
    { tematica: 'deportes', direccion: 'http://www.todofutbol.com/' },
    { tematica: 'libros', direccion: 'http://www.fnac.es/' },
    { tematica: 'cocina', direccion: 'http://www.fogones.es/' },
    { tematica: 'juegos', direccion: 'http://www.game.es/' }
  ];

  //Emite cuando hay una nueva actualizacion, nueva tematica
  private tematicasActualizacion = new BehaviorSubject<void>(undefined);
  public cambios = this.tematicasActualizacion.asObservable();

  // Función para obtener todas las temáticas disponibles
  getTematicasDisponibles(): string[] {
    //Utilizando map me devuelve un array con las tematicas que hay en mi array de objeto
    let tematicas = this.datosTematicas.map(t => t.tematica);
    return [...new Set(tematicas)]; // Filtra duplicados y me devuelve un nuevo array gracias a [...]
  }

  // Función para obtener las direcciones filtradas por temática
  getDirecciones(tematica: string): string[] {
    return this.datosTematicas
      .filter(t => t.tematica === tematica || tematica === 'todos')
      .map(t => t.direccion);
  }

  // Función para agregar una nueva temática y dirección
  agregarNuevaTematica(tematica: string, direccion: string): void {
    this.datosTematicas.push({ tematica, direccion });
    //se actualiza el valor y se notifica a todos los suscriptores.
    this.tematicasActualizacion.next();
  }
}
