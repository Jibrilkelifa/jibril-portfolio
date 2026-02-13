import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // Animate contact cards
    const cards = this.el.nativeElement.querySelectorAll('.card');
    gsap.from(cards, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }

}
