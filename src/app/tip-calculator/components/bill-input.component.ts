import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-bill-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-2">
      <p class="text-cyan-800 font-semibold">Bill</p>

      <div class="relative">
        <input value="142.55" class="text-right text-2xl" type="number" />

        <div class="absolute top-1/2 -translate-y-1/2 left-3">
          <img src="/assets/images/icon-dollar.svg" alt="Dollar" />
        </div>
      </div>
    </div>
  `,
})
export class BillInputComponent {}
