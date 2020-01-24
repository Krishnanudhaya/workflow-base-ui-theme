import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [NgbModule.forRoot()],
  exports: [RouterModule]
})   
export class AppRoutingModule {}  
