import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertCardComponent } from '../../../shared/components/cert-card/cert-card';
import { CERTIFICATIONS } from '../../../data/certifications.data';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, CertCardComponent],
  templateUrl: './certifications.html',
  styleUrls: ['./certifications.scss']
})
export class CertificationsComponent {
  certs = CERTIFICATIONS;
}
