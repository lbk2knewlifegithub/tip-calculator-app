import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { listAnimation } from '@lbk/shared/animations';

const SELECT_TIP_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectTipComponent),
  multi: true,
};

@Component({
  selector: 'lbk-select-tip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SELECT_TIP_ACCESSOR],
  template: `
    <div class="space-y-4">
      <p class="text-cyan-700 font-black">Select Tip %</p>

      <div @listAnimation class="grid gap-4 grid-cols-2 sm:grid-cols-3">
        <ng-container *ngFor="let tip of tips">
          <button
            type="button"
            (click)="onTipSelected(tip)"
            [ngClass]="{ 'text-cyan-900 bg-cyan-800': tip === selectedTip }"
            class="bg-cyan-900 font-black py-2 rounded-md text-center text-2xl hover:opacity-50"
          >
            <p>{{ tip * 100 }}%</p>
          </button>
        </ng-container>

        <!-- custom -->
        <input
          #customTip
          (keyup)="onCustomTip()"
          class="bg-cyan-500 text-cyan-900 text-center font-black text-2xl focus:text-right focus:placeholder-transparent"
          placeholder="Custom"
          type="number"
        />
        <!-- end custom -->
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        &.ng-invalid.ng-dirty input {
          border: 2px solid red;
        }
      }
    `,
  ],
  animations: [listAnimation()],
})
export class SelectTipComponent implements ControlValueAccessor {
  @Input() tips: number[] = [0.05, 0.1, 0.15, 0.25, 0.5];
  onValue!: (value: number) => void;
  onTouch!: () => void;
  @ViewChild('customTip', { static: true })
  customTipRef!: ElementRef<HTMLInputElement>;

  selectedTip = 0;

  constructor(private cd: ChangeDetectorRef) {}

  writeValue(obj: number): void {
    this.selectedTip = obj;
    if (obj === 0) {
      this.cd.markForCheck();
    }
  }
  registerOnChange(fn: any): void {
    this.onValue = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onCustomTip() {
    this.updateNewTip(this.customTip);
  }

  onTipSelected(newTip: number) {
    this.updateNewTip(newTip);

    if (this.customTip !== 0) {
      this.customTipRef.nativeElement.value = '';
    }
  }

  get customTip(): number {
    return parseFloat(this.customTipRef.nativeElement.value) / 100;
  }

  updateNewTip(newTip: number) {
    if (newTip === this.selectedTip) newTip = 0;

    this.selectedTip = newTip;
    this.onValue(isNaN(newTip) ? 0 : newTip);
    this.onTouch();
  }

  get active() {
    return { background: 'red' };
  }
}
