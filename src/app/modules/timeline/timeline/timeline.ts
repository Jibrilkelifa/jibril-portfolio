import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineCardComponent } from '../../../shared/components/timeline-card/timeline-card';
import { TIMELINE } from '../../../data/timeline.data';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, TimelineCardComponent],
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss']
})
export class TimelineComponent {
  timeline = TIMELINE;
}
