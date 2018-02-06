import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LotsPage } from './lots';

@NgModule({
  declarations: [
    LotsPage,
  ],
  imports: [
    IonicPageModule.forChild(LotsPage),
  ],
})
export class LotsPageModule {}
