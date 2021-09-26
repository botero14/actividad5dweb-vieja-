"use strict";
class Fabricante {
    constructor(id, nombre, cif, domicilio) {
        this.id = id;
        this.nombre = nombre;
        this.cif = cif;
        this.domicilio = domicilio;
    }
}
class Componente {
    constructor(id, nombre, especificaciones, precio) {
        this.id = id,
            this.nombre = nombre,
            this.especificaciones = especificaciones,
            this.precio = precio;
    }
}
class Aparato {
    constructor(id, nombre, descripcion) {
        this.id = id,
            this.nombre = nombre,
            this.descripcion = descripcion;
    }
}
class Tipo {
    constructor(id, nombre, caracteristicas) {
        this.id = id,
            this.nombre = nombre,
            this.caracteristicas = caracteristicas;
    }
}
//# sourceMappingURL=app.js.map