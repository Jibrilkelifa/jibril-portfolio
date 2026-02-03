import { trigger, transition, style, animate } from '@angular/animations';

export const fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(10px)' }),
    animate('350ms ease-out')
  ])
]);
