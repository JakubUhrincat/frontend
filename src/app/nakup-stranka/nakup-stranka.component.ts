import {Component, OnInit} from '@angular/core';
import {Nakup} from "../models/nakup.model";
import {Router} from "@angular/router";
import {NakupService} from "../../nakup.service";

@Component({
  selector: 'app-nakup-stranka',
  templateUrl: './nakup-stranka.component.html',
  styleUrls: ['./nakup-stranka.component.css']
})
export class NakupStrankaComponent {

  nakupy: Nakup[] = []
  actNakup?: Nakup;

  constructor(private router: Router, private nakupService: NakupService) {

  }

  ngOnInit(): void {
    this.refreshNakupy();
  }

  private refreshNakupy() {
    this.nakupService.getNakupy().subscribe(data => {
      this.nakupy = [];
      for (const d of data) {
        this.nakupy.push({
          id: d.id,
          datum: d.datum,
          obchod: d.obchod,
          nazov: d.nazov,
          polozkaId: d.polozkaId,
          cena: d.cena
        });
      }
    });
  }

  add(nakup: Nakup): void {
    this.nakupService.createNakup(nakup).subscribe(data => {
      this.refreshNakupy();
    });
  }

  edit(nakup: Nakup): void {
    this.nakupService.updateNakup(nakup.id, nakup).subscribe(data => {
      this.refreshNakupy();
    });
  }

  editNakupFromList(nakup: Nakup): void {
    this.actNakup = nakup;
  }

  removeNakupFromList(nakup: Nakup): void {
    this.nakupService.deleteNakup(nakup.id).subscribe(data => {
      this.refreshNakupy();
    });
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
