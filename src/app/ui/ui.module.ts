/**
 * @module UiModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconArrowDownComponent } from './icon-arrow-down/icon-arrow-down.component';
import { IconMinusComponent } from './icon-minus/icon-minus.component';
import { IconPlusComponent } from './icon-plus/icon-plus.component';
import { IconSearchComponent } from './icon-search/icon-search.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
/**
 * @whatItDoes {@link UiModule} exists to hold the common user interface methods that offers a
 * consistant look and api to the rest of the app.
 * 
 * **Input API:**
 * - `.get()` returns the current value
 * - `.set(newValue)` sets the input to a new value
 * - `(update)="newValue"` EventEmitter for all updates 
 * 
 * **Features:**
 * - All input items have the same api
 * - Everything should be super simple
 * - Encapsulation - the messy details of design and function are hidden within the encapsulation
 * of each component.
 * - Each `scss` file only contains scss that relates to the component making it easier to make
 * changes and spot errors. 
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconArrowDownComponent,
    IconMinusComponent,
    IconPlusComponent,
    IconSearchComponent,
    InputComponent,
    SelectComponent
  ],
  exports: [
    IconArrowDownComponent,
    IconMinusComponent,
    IconPlusComponent,
    IconSearchComponent,
    InputComponent,
    SelectComponent
  ]
})
export class UiModule { }
