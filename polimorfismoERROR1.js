
class Figura {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  get nombre() {
    return this.#nombre;
  }

  get area() {
    return this.calcularArea();
  }

  get perimetro() {
    return this.calcularPerimetro();
  }

  calcularArea() {
    return 0;
  }

  calcularPerimetro() {
    return 0;
  }
}

class Rectangulo extends Figura {
  #base;
  #altura;

  constructor(base, altura) {
    super("Rectangulo");
    this.#base = base;
    this.#altura = altura;
  }

  calcularArea() {
    return this.#base * this.#altura;
  }

  calcularPerimetro() {
    return 2 * (this.#base + this.#altura);
  }
}

class Circulo extends Figura {
  #radio;

  constructor(radio) {
    super("Circulo");
    this.#radio = parseFloat(radio);
  }

  calcularArea() {
    return Math.PI * this.#radio ** 2;
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.#radio;
  }
}

class Triangulo extends Figura {
  #base;
  #altura;
  #lado1;
  #lado2;
  #lado3;

  constructor(base, altura, lado1, lado2, lado3) {
    super("Triangulo");
    this.#base = base;
    this.#altura = altura;
    this.#lado1 = lado1;
    this.#lado2 = lado2;
    this.#lado3 = lado3;
  }

  calcularArea() {
    return (this.#base * this.#altura) / 2;
  }

  calcularPerimetro() {
    return this.#lado1 + this.#lado2 + this.#lado3;
  }
}

class Trapecio extends Figura {
  #baseMayor;
  #baseMenor;
  #altura;
  #lado1;
  #lado2;

  constructor(baseMayor, baseMenor, altura, lado1, lado2) {
    super("Trapecio");
    this.#baseMayor = baseMayor;
    this.#baseMenor = baseMenor;
    this.#altura = altura;
    this.#lado1 = lado1;
    this.#lado2 = lado2;
  }

  calcularArea() {
    return ((this.#baseMayor + this.#baseMenor) * this.#altura) / 2;
  }

  calcularPerimetro() {
    return this.#baseMayor + this.#baseMenor + this.#lado1 + this.#lado2;
  }
}

let r = new Rectangulo(5, 3);
let c = new Circulo(4);
let t = new Triangulo(6, 4, 5, 5, 6);
let trapecio1 = new Trapecio(10, 6, 4, 5, 5);
let trapecio2 = new Trapecio(12, 8, 5, 6, 7);

let figuras = [r, c, t, trapecio1, trapecio2];

let resultado = document.getElementById("resultado");

figuras.forEach(function (figura) {
  resultado.innerHTML += `
    <h2>${figura.nombre}</h2>
    <p>Área: ${figura.area.toFixed(2)}</p>
    <p>Perímetro: ${figura.perimetro.toFixed(2)}</p>
    <hr>
  `;
});
