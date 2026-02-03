import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-soc-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './node.html',
  styleUrls: ['./node.scss']
})
export class SocNodeComponent {
  @Input() node!: { id: string; label: string; desc: string };
  @Input() last = false;
}
