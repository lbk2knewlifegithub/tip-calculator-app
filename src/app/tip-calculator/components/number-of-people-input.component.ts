import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lbk-number-of-people',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [formGroup]="parent" class="space-y-2">
      <div class="flex items-center justify-between">
        <p class="text-cyan-700 font-semibold">Number of People</p>
        <i *ngIf="hasError" class="text-red-500 font-bold text-xs"
          >Can't be zero</i
        >
      </div>

      <div class="relative">
        <input
          formControlName="numberOfPeople"
          value="5"
          min="1"
          type="number"
          class="text-right text-2xl"
        />

        <!-- icon person -->
        <div class="absolute top-1/2 -translate-y-1/2 left-3">
          <img src="/assets/images/icon-person.svg" alt="Person" />
        </div>
        <!-- end icon person -->
      </div>
    </div>
  `,
})
export class NumberOfPeopleComponent {
  @Input() parent!: FormGroup;

  get numberOfPeople(): FormControl {
    return this.parent.get('numberOfPeople') as FormControl;
  }

  get hasError(): boolean {
    return this.numberOfPeople.dirty && this.numberOfPeople.hasError('min');
  }
}
