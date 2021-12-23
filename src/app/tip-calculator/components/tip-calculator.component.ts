import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Result } from '../models';

@Component({
  selector: 'lbk-tip-calculator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form [formGroup]="formGroup" class="bg-white p-6 rounded-2xl grid gap-4">
      <!-- bill input -->
      <lbk-bill-input [parent]="formGroup"></lbk-bill-input>
      <!-- end bill input -->

      <lbk-select-tip formControlName="tip"></lbk-select-tip>

      <!-- number of people -->
      <lbk-number-of-people [parent]="formGroup"></lbk-number-of-people>
      <!-- end number of people -->

      <lbk-result
        (reset)="onReset()"
        [result]="(result$ | async)!"
        [valid]="(valid$ | async)!"
      ></lbk-result>
    </form>
  `,
})
export class TipCalculatorComponent implements OnInit {
  formGroup!: FormGroup;
  result$!: Observable<Result>;
  valid$!: Observable<boolean>;

  constructor(private readonly _fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this._fb.group({
      bill: [0, [Validators.min(0), Validators.required]],
      tip: [0, [Validators.min(0), Validators.required]],
      numberOfPeople: [1, [Validators.min(1), Validators.required]],
    });
    this.result$ = this.formGroup.valueChanges;

    this.valid$ = this.formGroup.statusChanges.pipe(
      map((status) => status === 'VALID')
    );
  }

  onReset() {
    this.formGroup.reset({
      bill: 0,
      tip: 0,
      numberOfPeople: 1,
    });
  }
}
