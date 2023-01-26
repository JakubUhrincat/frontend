import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Polozka} from "../models/polozka.model";
import {PolozkaService} from "../../polozka.service";

@Component({
  selector: 'app-polozka-stranka',
  templateUrl: './polozka-stranka.component.html',
  styleUrls: ['./polozka-stranka.component.css']
})
export class PolozkaStrankaComponent implements OnInit {

  polozky: Polozka[] = [];
  actPolozka?: Polozka;

  constructor(private router: Router, private polozkaService: PolozkaService) { }

  ngOnInit(): void {
    // httpclient kniznica
    // this.customerService.getCustomers().subscribe(data => {
    //   this.customers = data;
    //   console.log('Prislo: ' + data);
    // });
    this.refreshPolozky();
  }

  refreshPolozky(): void{
    this.polozkaService.getPolozky().subscribe(data => {
      this.polozky = [];
      for (const d of data){
        this.polozky.push({id: d.id, nazov: d.nazov, cena: d.cena});
      }
    });
  }

  goBack(): void{
    this.router.navigate(['']);
  }

  add(polozka: Polozka): void{
    this.polozkaService.createPolozka(polozka).subscribe(data => {
      this.refreshPolozky();
    });
    // this.customers.push(customer);
  }

  edit(polozka: Polozka): void{
    // const index = this.customers.findIndex(customerFromList => customerFromList.id === customer.id);
    // if(index !== -1){
    //   this.customers[index] = customer;
    // }

    this.polozkaService.updatePolozka(polozka.id, polozka).subscribe(data => {
      this.refreshPolozky();
    });

  }

  editPolozkaFromList(polozka: Polozka): void{
    this.actPolozka = polozka;
  }

  removePolozkaFromList(polozka: Polozka): void{

    this.polozkaService.deletePolozka(polozka.id).subscribe(data => {
      this.refreshPolozky();
    });

  }
}
