import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { VideosPage } from './videos.page';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoListFilterComponent } from './components/video-list-filter/video-list-filter.component';
import { VideoAddComponent } from './components/video-add/video-add.component';
import { VideoFormComponent } from './components/video-form/video-form.component';
import { VideoItemComponent } from './components/video-item/video-item.component';


@NgModule({
  declarations: [
    VideosComponent,
    VideosPage,
    VideoListComponent,
    VideoListFilterComponent,
    VideoAddComponent,
    VideoFormComponent,
    VideoItemComponent
  ],
  imports: [
    CommonModule,
    VideosRoutingModule
  ]
})
export class VideosModule { }
