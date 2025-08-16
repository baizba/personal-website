import {Component, OnInit} from '@angular/core';
import {ProfileServiceService} from "../profile-service.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any;

  constructor(private profileService: ProfileServiceService) {  }

  ngOnInit(): void {
    this.projects = this.profileService.getProfile().projects;
  }
}
