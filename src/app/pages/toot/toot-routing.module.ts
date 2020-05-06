import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TootPage } from './toot.page';

const routes: Routes = [
  {
    path: '',
    component: TootPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TootPageRoutingModule {}
