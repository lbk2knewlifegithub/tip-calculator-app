import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tip-calculator',
    loadChildren: () =>
      import('./tip-calculator/tip-calculator.module').then(
        (m) => m.TipCalculatorModule
      ),
  },
  {
    path: '',
    redirectTo: '/tip-calculator',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
