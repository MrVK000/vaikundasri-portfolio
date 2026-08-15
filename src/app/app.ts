import { Component } from '@angular/core';
import { CursorComponent } from './components/cursor/cursor';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { AcademicComponent } from './components/academic/academic';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectComponent } from './components/project/project';
import { SkillsComponent } from './components/skills/skills';
import { CertificationsComponent } from './components/certifications/certifications';
import { PersonalComponent } from './components/personal/personal';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CursorComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    AcademicComponent,
    ExperienceComponent,
    ProjectComponent,
    SkillsComponent,
    CertificationsComponent,
    PersonalComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
