import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ApiTest';
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Characters',
        routerLink: 'characters'
      },
      { label: 'Locations',
    routerLink: 'locations' },
      { label: 'Episode',
    routerLink: 'episodes' }

    ]
  }
}
