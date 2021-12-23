import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipCalculatorPageComponent } from './containers';

const routes: Routes = [{ path: '', component: TipCalculatorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipCalculatorRoutingModule {}
