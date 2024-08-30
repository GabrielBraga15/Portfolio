import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' } },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
