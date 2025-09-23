import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { ShapedDividerComponent } from './shaped-divider/shaped-divider.component';
import { ProfileComponent } from './profile/profile.component';
import {NgOptimizedImage} from "@angular/common";
import { ProjectsComponent } from './projects/projects.component';
import {MatCardModule} from "@angular/material/card";
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatChipsModule} from "@angular/material/chips";
import { ExperienceComponent } from './experience/experience.component';
import {TimelineModule} from "primeng/timeline";

@NgModule({
  declarations: [
    AppComponent,
    ShapedDividerComponent,
    ProfileComponent,
    ProjectsComponent,
    ProjectDialogComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
    MatCardModule,
    MatDialogModule,
    MatChipsModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
