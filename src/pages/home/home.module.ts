import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule  } from '@angular/http';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
