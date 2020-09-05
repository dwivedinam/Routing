import { CssModule } from './css/css.module';
import { HtmlModule } from './html/html.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributesComponent } from './html/attributes/attributes.component';
import { BasicComponent } from './html/basic/basic.component';
import { ElementsComponent } from './html/elements/elements.component';
import { HtmlSideNavComponent } from './html/html-side-nav/html-side-nav.component';
import { MainSideNavComponent } from './main-side-nav/main-side-nav.component';
import { CsssideNavComponent } from './css/cssside-nav/cssside-nav.component';
import { MatSidenavModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BasicModule } from './css/Basiccss/basic.module';

const mainRouter: Routes = [
  {
    path: 'html',
    loadChildren: './html#HtmlModule.module'
  },
  {
    path: 'css',
    loadChildren: './css#CssModule.module'
  },
  {
    path: 'basiccss',
    loadChildren: './css/Basiccss#BasicModule.module'
  },

  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  exports: [
    BrowserModule,
    MatSidenavModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    MainSideNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    HtmlModule,
    CssModule,
    BasicModule,
    RouterModule.forRoot(mainRouter)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
