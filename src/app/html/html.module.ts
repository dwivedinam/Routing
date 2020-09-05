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



const htmlRouter: Routes = [
  {
    path: 'html', component: HtmlSideNavComponent,
    children: [
      {
        path: 'home', component: HomeComponent,
      //  children: [
      //   {path: 'basiccss' , component: HomeTypSideNavComponent }

      //  ]
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
        path: '**', redirectTo: 'home',
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
