export class Polozka {
  id?: number;
  nazov?: string;
  cena?: number;


  constructor(polozka: Polozka) {
    this.id = polozka.id;
    this.nazov = polozka.nazov;
    this.cena = polozka.cena;
  }
}

export class PolozkaList{
  id?: number;
  nazov?: string;
  cena?: number;


  constructor(polozka: Polozka) {
    this.id = polozka.id;
    this.nazov = polozka.nazov;
    this.cena = polozka.cena;
  }
}

