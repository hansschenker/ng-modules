import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// shared
import { SharedModule } from './../shared/shared.module';
// links
import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';
import { LinksPage } from './links.page';
import { LinkListComponent } from './components/link-list/link-list.component';
import { LinkListFilterComponent } from './components/link-list-filter/link-list-filter.component';
import { LinkAddComponent } from './components/link-add/link-add.component';
import { LinkFormComponent } from './components/link-form/link-form.component';
import { LinkItemComponent } from './components/link-item/link-item.component';


@NgModule({
  declarations: [
    LinksComponent,
    LinksPage,
    LinkListComponent,
    LinkListFilterComponent,
    LinkAddComponent,
    LinkFormComponent,
    LinkItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LinksRoutingModule
  ]
})
export class LinksModule { }
