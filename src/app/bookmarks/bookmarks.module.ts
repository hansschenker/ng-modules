import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';
import { BookmarksPage } from './bookmarks.page';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';
import { BookmarkListFilterComponent } from './components/bookmark-list-filter/bookmark-list-filter.component';
import { BookmarkAddComponent } from './components/bookmark-add/bookmark-add.component';
import { BookmarkFormComponent } from './components/bookmark-form/bookmark-form.component';
import { BookmarkItemComponent } from './components/bookmark-item/bookmark-item.component';


@NgModule({
  declarations: [
    BookmarksComponent,
    BookmarksPage,
    BookmarkListComponent,
    BookmarkListFilterComponent,
    BookmarkAddComponent,
    BookmarkFormComponent,
    BookmarkItemComponent
  ],
  imports: [
    CommonModule,
    BookmarksRoutingModule
  ]
})
export class BookmarksModule { }
