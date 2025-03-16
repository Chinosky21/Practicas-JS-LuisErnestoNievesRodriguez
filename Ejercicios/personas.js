class Persona {
    static contador = 0;

    constructor(nombre, apellidos) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this.idpersona = ++Persona.contador;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellidos() {
        return this._apellidos;
    }

    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }


    empleadoDelMes() {
        return "Empleado del mes";
    }
}

class Empleado extends Persona {
    #sueldo;

    constructor(nombre, apellidos, departamento, puesto, sueldo) {
        super(nombre, apellidos);
        this._departamento = departamento;
        this._puesto = puesto;
        this.#sueldo = sueldo;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    get puesto() {
        return this._puesto;
    }

    set puesto(puesto) {
        this._puesto = puesto;
    }

    get sueldo() {
        return this.#sueldo;
    }

    set sueldo(sueldo) {
        this.#sueldo = sueldo;
    }
    empleadoModelo = () => "Empleado modelo";
}

const e1 = new Empleado('Carlos', 'Gómez', 'Limpieza', 'Supervisor', 10000);
console.log(`id:# ${e1.idpersona} Empleado: ${e1.nombre} ${e1.apellidos}, Departamento: ${e1.departamento}, Puesto: ${e1.puesto}, Sueldo: ${e1.sueldo}`);


console.log(e1.empleadoModelo());  
console.log(e1.empleadoDelMes());  
