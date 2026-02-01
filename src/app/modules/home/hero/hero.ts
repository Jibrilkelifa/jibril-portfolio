import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements AfterViewInit {

  ngAfterViewInit() {
    gsap.from('.line', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out'
    });

    gsap.from('p', {
      opacity: 0,
      y: 20,
      delay: 0.8
    });

    gsap.from('.cta button', {
      opacity: 0,
      y: 20,
      delay: 1.1,
      stagger: 0.15
    });
  }
}
