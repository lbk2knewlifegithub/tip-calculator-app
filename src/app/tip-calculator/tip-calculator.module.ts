import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BillInputComponent,
  NumberOfPeopleComponent,
  ResultComponent,
  SelectTipComponent,
  TipCalculatorComponent
} from './components';
import { TipCalculatorPageComponent } from './containers';
import { TipCalculatorRoutingModule } from './tip-calculator-routing.module';

const COMPONENTS = [
  TipCalculatorComponent,
  BillInputComponent,
  SelectTipComponent,
  NumberOfPeopleComponent,
  ResultComponent,
];

const DIRECTIVES = [];
const CONTAINERS = [TipCalculatorPageComponent];

@NgModule({
  imports: [
    CommonModule,
    TipCalculatorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class TipCalculatorModule {}
