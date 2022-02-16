import { Component, OnInit } from '@angular/core';
// rxjs
import { Observable, of } from 'rxjs';

// links
import { CrudHttpService } from './../shared/crud-http.service';
import { Link } from './data/link.interface';
import { SafeurlPipe } from "../shared/safeurl.pipe";

@Component({
  selector: 'app-links',
  templateUrl: './links.page.html',
  styleUrls: ['./links.page.css']
})
export class LinksPage implements OnInit {


  links$: Observable<Link[]> | null = of([])
  constructor(private svc:CrudHttpService<Link>) {
    this.links$ = svc.list("links")
  }
  ngOnInit(): void {
  }
  loadLink(url: string) {
    // const link =`${url} , blank`;
    window.location.href = url;
  }
}
