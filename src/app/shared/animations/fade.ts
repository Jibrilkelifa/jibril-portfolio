import { trigger, transition, style, animate } from '@angular/animations';

export const fade = trigger('fade', [
  transition('* <=> *', [
    style({ opacity: 0, transform: 'translateY(8px)' }),
    animate('250ms ease-out', style({ opacity: 1, transform: 'none' }))
  ])
]);
