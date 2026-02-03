import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabNodeComponent } from '../lab-node/lab-node';

interface LabNode {
  id: string;
  label: string;
  description: string;
  type: 'API' | 'SQL' | 'Auth' | 'Network';
}

@Component({
  selector: 'app-attack-simulator',
  standalone: true,
  imports: [CommonModule, LabNodeComponent],
  templateUrl: './attack-simulator.html',
  styleUrls: ['./attack-simulator.scss']
})
export class AttackSimulatorComponent {
  nodes: LabNode[] = [
    { id: 'api', label: 'API Endpoint', description: 'Vulnerable API for testing', type: 'API' },
    { id: 'sql', label: 'Database', description: 'SQL Injection Simulation', type: 'SQL' },
    { id: 'auth', label: 'Auth System', description: 'Authentication bypass testing', type: 'Auth' },
    { id: 'network', label: 'Firewall/WAF', description: 'Network attack and WAF detection', type: 'Network' },
    { id: 'soc', label: 'SOC Dashboard', description: 'Incident logged and monitored', type: 'Network' }
  ];
}
