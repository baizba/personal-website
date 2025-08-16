import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any;

  constructor(private profileService: ProfileService) {  }

  ngOnInit(): void {
    this.projects = this.profileService.getProfile().projects;
  }
}
