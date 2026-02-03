import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lab-node.html',
  styleUrls: ['./lab-node.scss']
})
export class LabNodeComponent {
  @Input() node!: { id: string; label: string; description: string; type: string };
  @Input() last = false;
}
