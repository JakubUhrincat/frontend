export class Nakup{
  id?: number;
  datum: Date;
  obchod: string;
  nazov?: string;
  cena?: number;
  polozkaId: number;

  constructor(nakup: Nakup) {
    this.id = nakup.id;
    this.datum = nakup.datum;
    this.obchod = nakup.obchod;
    this.nazov = nakup.nazov;
    this.cena = nakup.cena
    this.polozkaId = nakup.polozkaId;
  }
}

export class NakupList{
  id?: number;
  datum: Date;
  obchod: string;
  nazov?: string;
  cena?: number;
  polozkaId: number;

  constructor(nakup: Nakup) {
    this.id = nakup.id;
    this.datum = nakup.datum;
    this.obchod = nakup.obchod;
    this.nazov = nakup.nazov;
    this.cena = nakup.cena
    this.polozkaId = nakup.polozkaId;
  }
}
