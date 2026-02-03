import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocNodeComponent } from '../../cyberai/node/node';

@Component({
  selector: 'app-pipeline',
  standalone: true,
  imports: [CommonModule, SocNodeComponent],
  templateUrl: './pipeline.html',
  styleUrls: ['./pipeline.scss']
})
export class PipelineComponent {
  nodes = [
    { id: 'qradar', label: 'QRadar SIEM', desc: 'Log & alert ingestion' },
    { id: 'ai', label: 'AI Engine', desc: 'ML-based threat detection' },
    { id: 'threat', label: 'Threat Intel', desc: 'VirusTotal & AbuseIPDB' },
    { id: 'irms', label: 'IRMS', desc: 'Automated incident creation' },
    { id: 'soc', label: 'SOC Dashboard', desc: 'Monitoring & response' }
  ];
}
