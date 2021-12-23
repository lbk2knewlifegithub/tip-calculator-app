import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components';
import { AppComponent } from './containers/app.component';

const COMPONENTS = [FooterComponent];
const CONTAINERS = [AppComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CoreModule {}
