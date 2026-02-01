import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.scss']
})
export class ProjectCard {
  @Input() title = '';
  @Input() desc = '';
}
