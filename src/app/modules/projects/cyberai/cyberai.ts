import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-cyberai',
  standalone: true,
  templateUrl: './cyberai.html',
  styleUrls: ['./cyberai.scss']
})
export class Cyberai implements AfterViewInit {

  ngAfterViewInit() {
    gsap.from('.node', {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });

    gsap.to('.arrow', {
      backgroundPosition: '200%',
      duration: 2,
      repeat: -1,
      ease: 'linear'
    });
  }
}
