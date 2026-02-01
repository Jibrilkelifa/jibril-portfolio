import { Component } from '@angular/core';
import { ProjectCard } from '../../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})

export class Projects {

}
