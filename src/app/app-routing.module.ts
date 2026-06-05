import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RudrastakamComponent } from './pages/rudrastakam/rudrastakam.component';
import { MeaningComponent } from './pages/meaning/meaning.component';
import { AudioComponent } from './pages/audio/audio.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rudrastakam', component: RudrastakamComponent },
  { path: 'meaning', component: MeaningComponent },
  { path: 'audio', component: AudioComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}