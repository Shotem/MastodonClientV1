import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  user = null;
  constructor(private auth: AuthService) { }

  ionViewWillEnter() {
    this.user = this.auth.getUser();
  }
 
  logout() {
    this.auth.logout();
  }

}
