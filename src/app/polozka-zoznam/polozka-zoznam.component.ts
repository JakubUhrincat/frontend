import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Polozka} from "../models/polozka.model";

@Component({
  selector: 'app-polozka-zoznam',
  templateUrl: './polozka-zoznam.component.html',
  styleUrls: ['./polozka-zoznam.component.css']
})
export class PolozkaZoznamComponent {

  @Input()
  polozky: Polozka[] = [];

  @Output()
  editPolozka: EventEmitter<Polozka> = new EventEmitter<Polozka>();

  @Output()
  removePolozka: EventEmitter<Polozka> = new EventEmitter<Polozka>();

  edit(polozka: Polozka): void{
    this.editPolozka.emit(polozka);
  }

  remove(polozka: Polozka): void{
    this.removePolozka.emit(polozka);
  }

}
