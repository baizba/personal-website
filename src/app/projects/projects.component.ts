import {Component, inject, OnInit} from '@angular/core';
import {ProfileService} from "../profile.service";
import {MatDialog} from "@angular/material/dialog";
import {ProjectDialogComponent} from "../project-dialog/project-dialog.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any;
  readonly dialog = inject(MatDialog)

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.projects = this.profileService.getProfile().projects;
  }

  openDialog(project: any) {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {data: project});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
