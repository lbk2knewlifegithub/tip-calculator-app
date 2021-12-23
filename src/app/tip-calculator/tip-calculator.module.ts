import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BillInputComponent, TipCalculatorComponent } from './components';
import { TipCalculatorPageComponent } from './containers';
import { TipCalculatorRoutingModule } from './tip-calculator-routing.module';

const COMPONENTS = [TipCalculatorComponent, BillInputComponent];
const CONTAINERS = [TipCalculatorPageComponent];

@NgModule({
  imports: [CommonModule, TipCalculatorRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class TipCalculatorModule {}
