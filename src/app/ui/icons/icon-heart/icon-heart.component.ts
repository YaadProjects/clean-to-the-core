/**
 * @module SharedModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Search icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/heart.svg)
 */
@Component({
  selector: 'app-icon-heart',
  templateUrl: './icon-heart.component.html',
  styleUrls: ['./icon-heart.component.scss']
})
export class IconHeartComponent {
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}
