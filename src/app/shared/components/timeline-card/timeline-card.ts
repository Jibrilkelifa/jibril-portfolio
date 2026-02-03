import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItem } from '../../../data/timeline.data';

@Component({
  selector: 'app-timeline-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-card.html',
  styleUrls: ['./timeline-card.scss']
})
export class TimelineCardComponent {
  @Input({ required: true }) item!: TimelineItem;
}
