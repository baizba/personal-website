import {Component} from '@angular/core';
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-skills-tech',
  templateUrl: './skills-tech.component.html',
  styleUrls: ['./skills-tech.component.css']
})
export class SkillsTechComponent {

  skills: string[];
  technologies: string[];

  constructor(profileService: ProfileService) {
    this.skills = profileService.getProfile().skills
    this.technologies = profileService.getProfile().technologies
  }

}
