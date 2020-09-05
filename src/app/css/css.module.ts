import { IntroductionComponent } from './introduction/introduction.component';
import { HomeComponent } from './home/home.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsssideNavComponent } from './cssside-nav/cssside-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule, MatSidenavModule } from '@angular/material';




const cssRoutes: Routes = [
  {
    path: 'css', component: CsssideNavComponent,
    children: [
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'introduction', component: IntroductionComponent
      },
      {
        path: '**', redirectTo: ''
      },
    ]
  }
];

@NgModule({
  exports: [
    RouterModule,

  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    RouterModule.forChild(cssRoutes)
  ],
  declarations: [HomeComponent, CsssideNavComponent, IntroductionComponent]
})
export class CssModule { }
