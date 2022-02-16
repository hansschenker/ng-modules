import { CrudHttpService } from './../shared/crud-http.service';
import { Bookmark } from './data/bookmark.model';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.css']
})
export class BookmarksPage implements OnInit {

  bookmarks$: Observable<Bookmark[]> | null = of([])
  constructor(private svc:CrudHttpService<Bookmark>) {
    this.bookmarks$ = svc.list("bookmarks")
  }
  ngOnInit(): void {
  }

}
