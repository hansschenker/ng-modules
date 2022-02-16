import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//
import { CrudHttpService } from './crud-http.service';
import { SafeurlPipe } from './safeurl.pipe';



@NgModule({
  declarations: [
    SafeurlPipe
  ],
  exports: [SafeurlPipe],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [CrudHttpService],
})
export class SharedModule { }
