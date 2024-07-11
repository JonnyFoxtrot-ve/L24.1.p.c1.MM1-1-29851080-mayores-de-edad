export default class contador {
  constructor() {
    this.cont = 0;
    this.contMayoresE = 0;
  }

  cantTotal() {
    return this.cont;
  }

  cantidadM() {
    return this.contMayoresE;
  }

  porcPerMayoresEdad() {
    return (this.contMayoresE / this.cont) * 100;
  }

  procesarp(p) {
    this.cont++;

    if (p.edad >= 18) {
      this.contMayoresE++;
    }
  }
}
