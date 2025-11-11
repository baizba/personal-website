import { Component } from '@angular/core';
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  aboutMe: String[];

  constructor(profileService: ProfileService) {
    this.aboutMe = profileService.getProfile().aboutMe;
  }

}
