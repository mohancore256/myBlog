import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav')  sidenav!: MatSidenav;
  title = 'my-blog';

  reason = '';

  close(reason: string) {
    //alert(reason);
    this.reason = reason;
    this.sidenav.close();
  }
}
