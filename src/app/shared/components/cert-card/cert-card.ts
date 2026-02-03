import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certification } from '../../../data/certifications.data';

@Component({
  selector: 'app-cert-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cert-card.html',
  styleUrls: ['./cert-card.scss']
})
export class CertCardComponent {
  @Input({ required: true }) cert!: Certification;
}
