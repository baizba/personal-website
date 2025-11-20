import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import { SkillsTechComponent } from './skills-tech/skills-tech.component';
import {ChipModule} from "primeng/chip";
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import {MatMenuModule} from "@angular/material/menu";
import { ChatComponent } from './chat/chat.component';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    ShapedDividerComponent,
    ProfileComponent,
    ProjectsComponent,
    ProjectDialogComponent,
    ExperienceComponent,
    SkillsTechComponent,
    AboutMeComponent,
    ContactComponent,
    ChatComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        NgOptimizedImage,
        MatCardModule,
        MatDialogModule,
        MatChipsModule,
        TimelineModule,
        CardModule,
        ButtonModule,
        ChipModule,
        MatMenuModule,
        MatTooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
