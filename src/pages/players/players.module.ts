import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayersPage } from './players';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    PlayersPage,
  ],
  imports: [
    NgxPaginationModule,
    IonicPageModule.forChild(PlayersPage),
  ],
})
export class PlayersPageModule {}
