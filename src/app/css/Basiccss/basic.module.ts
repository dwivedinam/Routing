import { HomeTypSideNavComponent } from './home-typ-side-nav/home-typ-side-nav.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeTwoComponent } from './home-two/home-two.component';
import { HomeThreeComponent } from './home-three/home-three.component';
import { MatCardModule, MatSidenavModule } from '@angular/material';

const htmlRouters: Routes = [
  {
    path: 'basiccss', component: HomeTypSideNavComponent,
  }
];

@NgModule({
  declarations: [ HomeOneComponent, HomeTwoComponent, HomeThreeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    RouterModule.forChild(htmlRouters)
  ]
})
export class BasicModule { }
