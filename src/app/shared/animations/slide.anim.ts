import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  CustomAnimation,
  DefaultCustomAnimation
} from '../models/custom-animation.model';

export function slideInLeft(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delay, duration, timing } = option;
  return trigger(name || 'slideInLeft', [
    state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
    transition(
      ':enter',
      group(
        [
          query('*', animateChild()),
          animate('{{duration}}ms {{delay}}ms {{timing}}'),
        ],
        {
          params: { delay, timing, duration },
        }
      )
    ),
  ]);
}

export function slideInRight(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delay, duration, timing } = option;
  return trigger(name || 'slideInRight', [
    state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
    transition(
      ':enter',
      group(
        [
          query('*', animateChild()),
          animate('{{duration}}ms {{delay}}ms {{timing}}'),
        ],
        {
          params: { delay, timing, duration },
        }
      )
    ),
  ]);
}

export function slideInTop(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delay, duration, timing } = option;
  return trigger(name || 'slideInTop', [
    state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
    transition(
      ':enter',
      group(
        [
          query('*', animateChild()),
          animate('{{duration}}ms {{delay}}ms {{timing}}'),
        ],
        {
          params: { delay, timing, duration },
        }
      )
    ),
  ]);
}

export function slideInBottom(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delay, duration, timing } = option;
  return trigger(name || 'slideInBottom', [
    state('void', style({ opacity: 0, transform: 'translateY(100%)' })),
    transition(
      ':enter',
      group(
        [
          query('*', animateChild()),
          animate('{{duration}}ms {{delay}}ms {{timing}}'),
        ],
        {
          params: { delay, timing, duration },
        }
      )
    ),
  ]);
}
