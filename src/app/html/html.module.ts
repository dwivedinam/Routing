import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlSideNavComponent } from './html-side-nav/html-side-nav.component';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { ElementsComponent } from './elements/elements.component';
import { AttributesComponent } from './attributes/attributes.component';
import { MatCardModule, MatSidenavModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { HomeTypSideNavComponent } from '../css/Basiccss/home-typ-side-nav/home-typ-side-nav.component';
import { HomeOneComponent } from '../css/Basiccss/home-one/home-one.component';
import { HomeTwoComponent } from '../css/Basiccss/home-two/home-two.component';
import { HomeThreeComponent } from '../css/Basiccss/home-three/home-three.component';



const htmlRouter: Routes = [
  {
    path: 'html', component: HtmlSideNavComponent,
    children: [
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'basiccss',
        component: HomeTypSideNavComponent,
        children: [
          { path: 'one', component: HomeOneComponent },

          { path: 'two', component: HomeTwoComponent, },

          { path: 'three', component: HomeThreeComponent, },

          // { path: '**', redirectTo: 'basiccss', },
        ]
      },
      {
        path: 'basic', component: BasicComponent,
      },
      {
        path: 'elements', component: ElementsComponent,
      },
      {
        path: 'attributes', component: AttributesComponent,
      },
      {
        path: '**', redirectTo: 'basiccss',
      },
    ]
  }
];

@NgModule({

  declarations: [HomeTypSideNavComponent, HomeComponent, BasicComponent, ElementsComponent, AttributesComponent, HtmlSideNavComponent],
  exports: [

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    RouterModule.forChild(htmlRouter)
  ],

})
export class HtmlModule { }
