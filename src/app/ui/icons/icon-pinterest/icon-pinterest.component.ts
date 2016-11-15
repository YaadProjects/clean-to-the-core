/**
 * @module SharedModule
 */ /** */
import { Component, HostBinding } from '@angular/core';
/**
 * Search icon from [Ionicons](http://ionicons.com/).
 * [Source](https://github.com/driftyco/ionicons/blob/master/src/social-pinterest-outline.svg)
 */
@Component({
  selector: 'app-icon-pinterest',
  templateUrl: './icon-pinterest.component.html',
  styleUrls: ['./icon-pinterest.component.scss']
})
export class IconPinterestComponent {
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';
}
