import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lbk-bill-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [formGroup]="parent" class="space-y-2">
      <div class="flex items-center justify-between">
        <p class="text-cyan-700 font-semibold">Bill</p>
        <i *ngIf="hasError" class="text-red-500 font-bold text-xs">Can't be smaller than zero</i>
      </div>

      <div class="relative">
        <input
          formControlName="bill"
          min="0"
          class="text-right text-2xl"
          type="number"
        />

        <div class="absolute top-1/2 -translate-y-1/2 left-3">
          <img src="/assets/images/icon-dollar.svg" alt="Dollar" />
        </div>
      </div>
    </div>
  `,
})
export class BillInputComponent {
  @Input() parent!: FormGroup;

  get bill(): FormControl {
    return this.parent.get('bill') as FormControl;
  }

  get hasError(): boolean {
    return this.bill.dirty && this.bill.hasError('min');
  }
}
