import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink],

  templateUrl: './project-card.html',
  styleUrls: ['./project-card.scss']
})
export class ProjectCard {
  @Input() title = '';
  @Input() desc = '';
}
