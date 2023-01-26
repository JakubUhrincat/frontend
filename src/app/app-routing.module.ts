import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MenuComponent} from "./menu/menu.component";
import {PolozkaStrankaComponent} from "./polozka-stranka/polozka-stranka.component";
import {NakupStrankaComponent} from "./nakup-stranka/nakup-stranka.component";

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'polozky',
    component: PolozkaStrankaComponent
  },
  {
    path: 'nakupy',
    component: NakupStrankaComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
