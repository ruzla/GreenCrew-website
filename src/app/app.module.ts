import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LocationComponent } from './pages/location/location.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ForParentsComponent } from './pages/information/for-parents/for-parents.component';
import { ForProfessionalsComponent } from './pages/information/for-professionals/for-professionals.component';
import { ForGroupsComponent } from './pages/information/for-groups/for-groups.component';
import { MissionStatementComponent } from './pages/information/mission-statement/mission-statement.component';
import { TestimonialsComponent } from './pages/information/testimonials/testimonials.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { InfoNavDropComponent } from './navbar/info-nav-drop/info-nav-drop.component';
import { ImageSliderComponent } from './home/image-slider/image-slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JoinUsComponent,
    GalleryComponent,
    LocationComponent,
    ContactUsComponent,
    ForParentsComponent,
    ForProfessionalsComponent,
    ForGroupsComponent,
    MissionStatementComponent,
    TestimonialsComponent,
    HomeComponent,
    InfoNavDropComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
