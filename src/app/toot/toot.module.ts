import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TootPageRoutingModule } from './toot-routing.module';

import { TootPage } from './toot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TootPageRoutingModule
  ],
  declarations: [TootPage]
})
export class TootPageModule {}
