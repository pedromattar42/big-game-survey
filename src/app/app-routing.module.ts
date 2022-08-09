import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficosComponent } from './components/graficos/graficos.component';
import { HomeComponent } from './views/home/home.component';
import { RecordsComponent } from './views/records/records.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "records",
    component: RecordsComponent
  },
  {
    path: "charts",
    component: GraficosComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
