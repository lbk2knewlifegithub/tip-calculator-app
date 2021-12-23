import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-tip-calculator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-white p-6 rounded-xl">
      <!-- bill input -->
      <lbk-bill-input></lbk-bill-input>
      <!-- end bill input -->


    </div>
  `,
})
export class TipCalculatorComponent {}
