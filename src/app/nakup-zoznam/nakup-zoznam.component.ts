import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Nakup} from "../models/nakup.model";


@Component({
  selector: 'app-nakup-zoznam',
  templateUrl: './nakup-zoznam.component.html',
  styleUrls: ['./nakup-zoznam.component.css']
})
export class NakupZoznamComponent{

  @Input()
  nakupy: Nakup[] = [];

  @Output()
  editNakup: EventEmitter<Nakup> = new EventEmitter<Nakup>();

  @Output()
  removeNakup: EventEmitter<Nakup> = new EventEmitter<Nakup>();

  edit(nakup: Nakup): void{
    this.editNakup.emit(nakup);
  }

  remove(nakup: Nakup): void{
    this.removeNakup.emit(nakup);
  }

}
