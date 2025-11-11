import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{

  public events: string[] = ['company 1', 'company 2', 'company 3', 'company 4'];

  experience: any;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.experience = this.profileService.getProfile().experience;
  }
}
