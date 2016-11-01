/**
 * @module HomeModule
 */ /** */
import { Component } from '@angular/core';

import { ApiService } from '../core/api/api.service';
/**
 * @whatItDoes Returns the {@link HomeComponent} view.
 * @consumers {@link HomeModule},  {@link HomeRoutingModule}
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  fixedHeight: number;
  tests = [];
  mocks = {
    img: 'http://cleantothecore.com/wp-content/uploads/mp/image-cache/site/0/file-jan-02-6-16-04-pm.4ffbad01a5cb2b7e696072810bc9264d.jpeg',
    labels: [
      {name: 'Corn Free', color: 'rgb(226, 202, 64)'},
      {name: 'Dairy Free', color: 'rgb(122, 185, 208)'},
      {name: 'Egg Free', color: 'rgb(255, 139, 148)'},
      {name: 'Gluten Free', color: 'rgb(193, 163, 97)'},
      {name: 'Nut Free', color: 'rgb(103, 209, 101)'},
      {name: 'Soy Free', color: 'rgb(121, 210, 188)'}
    ]
  };
  constructor(public apiService: ApiService) {
    for (let i = 1; i <= 50; i++) {
      this.tests.push(`test-${i}`);
    }
  }
}
