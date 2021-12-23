import { ChangeDetectionStrategy, Component } from '@angular/core';
import { slideInBottom, slideInTop } from '@lbk/shared/animations';

@Component({
  selector: 'lbk-tip-calculator-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-14"
    >
      <nav @slideInTop class="my-10 lg:my-0">
        <a routerLink="/">
          <h1
            class="text-center text-cyan-900 font-semibold text-2xl tracking-[4px] sm:text-3xl"
          >
            SPLI<br />
            TTER
          </h1>
        </a>
      </nav>

      <main @slideInBottom>
        <lbk-tip-calculator
          class="block max-w-xl mx-auto lg:max-w-4xl"
        ></lbk-tip-calculator>
      </main>
    </div>
  `,
  animations: [slideInTop(), slideInBottom()],
})
export class TipCalculatorPageComponent {}
