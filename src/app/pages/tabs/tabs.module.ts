import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/members/tab1',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [ //Aqui se incluyen mas tabs
      {
        path: 'tab1',
        loadChildren:  () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
