import {
  trigger, animate, transition, style, state,
  animateChild, group, query as q
} from '@angular/animations';

export const fadeInAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax

  trigger('fadeInAnimation', [
    transition(':enter', [
      style({  opacity: 0 }),
      animate('200ms ease-in', style({  opacity: 1 }))
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({ opacity: 0 }))
    ])
  ]);

export const flyInOutAnimation =
  trigger('flyInOutAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(100%)' }),
      animate('200ms ease-in', style({ opacity: 1, transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
      animate('2ms ease-in', style({ opacity: 0, transform: 'translateX(100%)' }))
    ])
  ])

  export const flyInOverAnimation =
  trigger('flyInOverAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-100%)' }),
      animate('200ms ease-in', style({ opacity: 1, transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
      animate('2ms ease-in', style({ opacity: 0, transform: 'translateY(-100%)' }))
    ])
  ])

const query = (s, a, o = { optional: true }) => q(s, a, o);

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' })),
    query(':enter', style({ transform: 'translateX(100%)' })),

    group([
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ]),
      query(':enter', [
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
        animateChild()
      ])
    ]),
  ]),
]);

export const pageAnimation = trigger('pageAnimation', [
  transition(':enter', [
    query('h1', [
      style({ transform: 'scale(0)' }),
      animate('1s', style('*'))
    ], { optional: true })
  ]),
]);

export const slideInOutAnimation =

  trigger('slideInOutAnimation', [

    state('*', style({
      width: 'fit-content',
      position: 'fixed',
      'z-index': 999,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'overflow-y': 'auto'

    })),

    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-100%)' }),
      animate('200ms ease-in', style({ opacity: 1, transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({ opacity: 0, transform: 'translateX(-100%)' }))
    ])

    /*state('*', style({
      position: 'fixed',
      'z-index': 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'overflow-y': 'scroll'

    })),

    transition(':enter', [
      style({
        right: '-100%'
      }),
      animate('200s ease-in-out', style({
        right: 0,
      }))
    ]),

    transition(':leave', [
      animate('200s ease-in-out', style({
        right: '-400%',
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }))
    ])*/
  ]);
