import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BornesPage } from './bornes';

@NgModule({
  declarations: [
    BornesPage,
  ],
  imports: [
    IonicPageModule.forChild(BornesPage),
  ],
})
export class BornesPageModule {}
