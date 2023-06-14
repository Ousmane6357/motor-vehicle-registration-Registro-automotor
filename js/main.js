function Automovil(marca, modelo, color, anio, titular) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let automovil1 = new Automovil('BMW', 'deo', 'Azul', '2018', 'Ousmane');
let automovil2 = new Automovil('Chevrolet', 'Camaro', 'Amarillo', 2020, 'Marina');
let automovil3 = new Automovil('Corola', 'Toyota', 'Blanco', 2021, 'Fisu');
let automoviles = [automovil1, automovil2, automovil3];

Automovil.prototype.venderAutomovil = function(nuevoTitular) {
    this.titular = nuevoTitular;
};

Automovil.prototype.encender = function() {
    alert('El auto fue encendido');
};

Automovil.prototype.verAutomovil = function() {
    return `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`;
};

function mostrarAutomoviles() {
    let lista = document.getElementById('listaAutomoviles');
    lista.innerHTML = ''; // Limpiar la lista antes de mostrar los automóviles
    for (let automovil of automoviles) {
        let item = document.createElement('li');
        item.innerText = automovil.verAutomovil();
        lista.appendChild(item);
    }
}
