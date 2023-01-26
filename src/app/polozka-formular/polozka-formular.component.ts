import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Polozka} from "../models/polozka.model";

@Component({
  selector: 'app-polozka-formular',
  templateUrl: './polozka-formular.component.html',
  styleUrls: ['./polozka-formular.component.css']
})
export class PolozkaFormularComponent{

  @Input()
  set polozka(data: Polozka){
    if(data) {
      this.fillForm(data);
    }
  }

  @Output()
  addPolozka = new EventEmitter<Polozka>();

  @Output()
  editPolozka = new EventEmitter<Polozka>();

  // @Output()
  // removeCustomer = new EventEmitter<Customer>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      nazov: new FormControl(null),
      cena: new FormControl(null),
    });
    this.createForm();
  }

  private createForm(): void{

  }

  private fillForm(polozka: Polozka): void{
     //this.form.setValue({
     //  id: polozka.id,
     //  nazov: polozka.nazov,
     //  cena: polozka.cena,
    // })
   this.form.controls['id'].setValue(polozka.id);
    this.form.controls['nazov'].setValue(polozka.nazov);
     this.form.controls['cena'].setValue(polozka.cena);
  }

  public add(): void{
    this.addPolozka.emit({
      nazov: this.form.value.nazov,
      cena: this.form.value.cena,
    });
    this.form.reset();
  }

  public edit(): void{
    this.editPolozka.emit(this.form.value);
    this.form.reset();
  }

  public remove(): void{
    this.polozka = undefined!;
    this.form.reset();
  }

}
