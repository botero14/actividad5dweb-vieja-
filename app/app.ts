"use strict";
//Interfaces 

interface FabricanteI{
    id: number,
    nombre:string,
    cif:string,
    domicilio: string,
}

interface ComponenteI{
    id:number,
    nombre:string,
    especificaciones:string,
    precio:number
}

interface AparatoI{
    id: number,
    nombre:string,
    descripcion:string
}

interface TipoI{
    id:number,
    nombre:string,
    caracteristicas:string
}
//Clases 
class Fabricante implements FabricanteI{
    id: number;
    nombre: string;
    cif: string;
    domicilio: string;

    constructor(
        id:number,
        nombre: string,
        cif: string,
        domicilio: string
    ){
        this.id = id;
        this.nombre = nombre;
        this.cif = cif;
        this.domicilio = domicilio;
    }
}
class Componente implements ComponenteI{
    id:number;
    nombre:string;
    especificaciones:string;
    precio:number;

    constructor(
        id:number,
        nombre:string,
        especificaciones:string,
        precio:number
    ){
        this.id = id,
        this.nombre = nombre,
        this.especificaciones = especificaciones,
        this.precio = precio
    }
}

class Aparato implements AparatoI{
    id: number;
    nombre:string;
    descripcion:string;

    constructor(
        id: number,
        nombre:string,
        descripcion:string
    ){
        this.id = id,
        this.nombre = nombre,
        this.descripcion = descripcion
    }
}

class Tipo implements TipoI{
    id:number;
    nombre:string;
    caracteristicas:string;
    
    constructor(
        id:number,
        nombre:string,
        caracteristicas:string
    ){
        this.id= id,
        this.nombre = nombre,
        this.caracteristicas = caracteristicas
    }
}


