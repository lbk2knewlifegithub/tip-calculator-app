import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-tip-calculator-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header>
      <nav>
        <a routerLink="/">
          <h1 class="text-cyan-800 font-black text-2xl tracking-[4px]">
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
