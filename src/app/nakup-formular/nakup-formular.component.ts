import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Nakup} from "../models/nakup.model";
import {FormControl, FormGroup} from "@angular/forms";
import {PolozkaService} from "../../polozka.service";
import {Subscription} from "rxjs";
import {Polozka} from "../models/polozka.model";

@Component({
  selector: 'app-nakup-formular',
  templateUrl: './nakup-formular.component.html',
  styleUrls: ['./nakup-formular.component.css']
})
export class NakupFormularComponent{

  form: FormGroup;
  polozky: Polozka[] = [];
  private subscription = new Subscription();
  @Input()
  set nakup(data: Nakup){
    if(data){
      this.fillForm(data);
    }
  }

  ngOnInit() {
    this.refreshNakup();
  }

  @Output()
  addNakup = new EventEmitter<Nakup>();

  @Output()
  editNakup = new EventEmitter<Nakup>();

  constructor(private polozkaService: PolozkaService) {
    this.form = new FormGroup({
      id: new FormControl(null),
      datum: new FormControl(null),
      obchod: new FormControl(null),
      nazov: new FormControl(null),
      polozkaId: new FormControl(null),
      cena: new FormControl(null)
    });
    this.createForm();
  }

  refreshNakup(): void{
    this.subscription.add(this.polozkaService.getPolozky().subscribe(data => {
      this.polozky = data;
    }));
  }

  private createForm(): void {
  }

  private fillForm(nakup: Nakup): void {
    this.form.controls['id'].setValue(nakup.id);
    this.form.controls['datum'].setValue(nakup.datum);
    this.form.controls['obchod'].setValue(nakup.obchod);
    this.form.controls['nazov'].setValue(nakup.nazov);
    this.form.controls['polozkaId'].setValue(nakup.polozkaId);
    this.form.controls['cena'].setValue(nakup.cena);
  }

  public add(): void{
    this.addNakup.emit({
      datum: this.form.value.datum,
      obchod: this.form.value.obchod,
      polozkaId: this.form.value.polozkaId,
    });
    this.form.reset();
  }

  public edit(): void{
    this.editNakup.emit(this.form.value);
    this.form.reset();
  }

  public remove(): void{
    this.nakup = undefined!;
    this.form.reset();
  }

}

