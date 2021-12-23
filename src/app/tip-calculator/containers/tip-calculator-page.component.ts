import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-tip-calculator-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header>
      <nav class="my-10">
        <a routerLink="/">
          <h1 class="text-center text-cyan-900 font-black text-2xl tracking-[4px]">
            SPLI<br />
            TTER
          </h1>
        </a>
      </nav>
    </header>

    <main>
      <lbk-tip-calculator></lbk-tip-calculator>
    </main>
  `,
})
export class TipCalculatorPageComponent {}
