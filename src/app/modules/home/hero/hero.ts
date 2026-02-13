import { Component, AfterViewInit, ElementRef } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
  standalone: true
})
export class HeroComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // Run GSAP animations AFTER the DOM is fully loaded
    const heroTitle = this.el.nativeElement.querySelectorAll('h1, h2, p');
    
    gsap.from(heroTitle, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }
}
