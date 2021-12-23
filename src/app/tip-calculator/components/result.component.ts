import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Result } from '../models';

@Component({
  selector: 'lbk-result',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col gap-6 bg-cyan-900 px-6 py-8 rounded-xl  lg:h-full md:justify-between lg:p-10 lg:pt-8">
      <div class="grid gap-4 lg:gap-12">
        <!-- tip amount person -->
        <div class="flex justify-between">
          <div class="font-black">
            <p class="text-white lg:text-lg">Tip Amount</p>
            <p class="text-cyan-600">/ person</p>
          </div>

          <p class="text-cyan-800 text-3xl font-black lg:text-4xl">
            {{ tipPerPerson | currency }}
          </p>
        </div>
        <!-- end tip amount person -->

        <!-- total -->
        <div class="flex justify-between">
          <div class="font-black">
            <p class="text-white lg:text-lg">Total</p>
            <p class="text-cyan-600">/ person</p>
          </div>

          <p class="text-cyan-800 text-3xl font-black lg:text-4xl">
            {{ totalPerPerson | currency }}
          </p>
        </div>
        <!-- end total -->
      </div>

      <!-- reset button -->
      <button
        [disabled]="disabled"
        (click)="reset.emit()"
        class="btn btn-primary w-full text-xl tracking-wider"
      >
        RESET
      </button>
      <!-- end reset button -->
    </div>
  `,
})
export class ResultComponent {
  @Input() result!: Result;
  @Input() valid!: boolean;
  @Output() reset = new EventEmitter<void>();

  get tipPerPerson(): number {
    if (this.disabled) return 0;

    const { bill, numberOfPeople, tip } = this.result;
    const perPerson = bill / numberOfPeople;
    return perPerson * tip;
  }

  get totalPerPerson(): number {
    if (this.disabled) return 0;

    const { bill, numberOfPeople, tip } = this.result;
    const perPerson = bill / numberOfPeople;
    return perPerson + perPerson * tip;
  }

  get disabled(): boolean {
    if (!this.result) return true;
    if (!this.valid) return true;

    const { bill, numberOfPeople, tip } = this.result;

    if (!numberOfPeople) return true;
    if (!bill) return true;

    return false;
  }
}
