import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinUsComponent } from '../app/pages/join-us/join-us.component';
import { ForParentsComponent } from '../app/pages/information/for-parents/for-parents.component';
import { ForProfessionalsComponent } from './pages/information/for-professionals/for-professionals.component';
import { ForGroupsComponent } from './pages/information/for-groups/for-groups.component';
import { MissionStatementComponent } from './pages/information/mission-statement/mission-statement.component';
import { TestimonialsComponent } from './pages/information/testimonials/testimonials.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LocationComponent } from './pages/location/location.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';


const routes: Routes = [
     { path: 'join-us', component: JoinUsComponent },
     { path: 'for-parents', component: ForParentsComponent },
     { path: 'for-professionals', component: ForProfessionalsComponent },
     { path: 'for-groups', component: ForGroupsComponent },
     { path: 'mission-statement', component: MissionStatementComponent },
     { path: 'testimonials', component: TestimonialsComponent },
     { path: 'gallery', component: GalleryComponent },
     { path: 'location', component: LocationComponent },
     { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
