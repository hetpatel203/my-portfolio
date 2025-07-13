import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Het Patel - Portfolio' },
  { path: 'about', component: AboutComponent, title: 'About - Het Patel' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects - Het Patel' },
  { path: 'skills', component: SkillsComponent, title: 'Skills - Het Patel' },
  { path: 'contact', component: ContactComponent, title: 'Contact - Het Patel' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
