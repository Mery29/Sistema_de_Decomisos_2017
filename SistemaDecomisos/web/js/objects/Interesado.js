function Interesado(idInteresado, fechaNacimiento, domicilio, identificacion, nombre, apellido1, apellido2, direccionExacta, fotografia) {
    this.Interesado(idInteresado, fechaNacimiento, domicilio, identificacion, nombre, apellido1, apellido2, direccionExacta, fotografia);
}

Interesado.prototype = {
    idInteresado: 0, 
    fechaNacimiento: "",
    domicilio : "",
    identificacion : "", 
    nombre : "", 
    apellido1 : "",
    apellido2 : "", 
    direccionExacta : "",
    fotografia : "",
    Interesado: function (idInteresado, fechaNacimiento, domicilio, identificacion, nombre, apellido1, apellido2, direccionExacta, fotografia) {
        this.idInteresado = idInteresado;
        this.fechaNacimiento = fechaNacimiento;
        this.domicilio = domicilio;
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2; 
        this.direccionExacta = direccionExacta;
        this.fotografia = fotografia;
    }
};

Interesado.from = function (plain) {
    interesado = new Interesado(
    plain.idInteresado, 
    plain.fechaNacimiento,
    plain.domicilio,
    plain.identificacion, 
    plain.nombre, 
    plain.apellido1, 
    plain.apellido2, 
    plain.direccionExacta,
    plain.fotografia);
    return interesado;
};

Interesado.to = function (interesado) {
    return {
        _class: 'Interesado',
        idInteresado: interesado.idInteresado, 
        fechaNacimiento : interesado.fechaNacimiento,
        domicilio : interesado.domicilio,
        identificacion : interesado.identificacion, 
        nombre : interesado.nombre, 
        apellido1 : interesado.apellido1, 
        apellido2 : interesado.apellido2, 
        direccionExacta : interesado.direccionExacta,
        fotografia : interesado.fotografia
    };
};
 