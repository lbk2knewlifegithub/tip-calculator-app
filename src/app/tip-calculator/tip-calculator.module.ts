import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TipCalculatorComponent } from './components';
import { TipCalculatorPageComponent } from './containers';

const COMPONENTS = [TipCalculatorComponent];
const CONTAINERS = [TipCalculatorPageComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class TipCalculatorModule {}
