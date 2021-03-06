import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';
import { CustomAnimation, DefaultCustomAnimation } from '../models';

export function listAnimation(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { delay, duration, timing } = option;
  return trigger('listAnimation', [
    transition(
      '* => *',
      [
        query(
          '*',
          [
            style({ opacity: 0, transform: 'translateX(-100%)' }),
            stagger(100, [animate('70ms')]),
          ],
          { optional: true }
        ),
      ],
      {
        params: { delay, timing, duration },
      }
    ),
  ]);
}
