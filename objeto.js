var miAuto = {
    marca: "Toyota",
    modelo: "Corola Híbrido",
    año: "2021",
    detalleAuto: function () {
        console.log(`Auto: ${this.modelo} ${this.año}`);
    }
}

miAuto.detalleAuto();