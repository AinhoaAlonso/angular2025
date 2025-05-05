//Interfaz que va a definir mi objeto
interface ElementoTematica{
  tematica:string;
  direccion:string;
}

export class DatosTematicas{
  //Declaramos la propiedad
  elementos:ElementoTematica[];
  constructor(){
    //Asignamos los datos al constructor
    this.elementos=[
      {tematica:"deportes", direccion:"http://www.marca.es/"},
      {tematica:"libros", direccion:"http://www.puntolibro.es/"},
      {tematica:"deportes", direccion:"http://www.todofutbol.com/"},
      {tematica:"libros", direccion:"http://www.fnac.es/"},
      {tematica:"cocina", direccion:"http://www.fogones.es/"},
      {tematica:"juegos", direccion:"http://www.game.es/"}
    ]
  }
}
