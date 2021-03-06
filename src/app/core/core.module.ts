/**
 * @module CoreModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PushNotificationsModule } from 'angular2-notifications';
import { AngularFireModule } from 'angularfire2';
import { AngularFireOfflineModule } from 'angularfire2-offline';

import { ApiService } from './api/api.service';
import { GlobalEventsService } from './global-events/global-events.service';
import { firebaseConfig } from './firebase-config';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavComponent } from './nav/nav.component';
import { StatusBarAwareDirective } from './status-bar/status-bar-aware.directive';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { StatusBarService } from './status-bar/status-bar.service';
import { TimerComponent } from './timer/timer.component';
import { TimerService } from './timer/timer.service';
import { SharedModule } from '../shared/shared.module';
import { SkipNavComponent } from './skip-nav/skip-nav.component';
/**
 * @whatItDoes {@link CoreModule} exists to make commonly used singleton services and single-use classes available
 * for use in the many other modules.
 * @consumers {@link AppModule}
 * 
 * This module follows the Angular style guide [STYLE 04-11](https://angular.io/styleguide#04-11)
 */
@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireOfflineModule,
    CommonModule,
    PushNotificationsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    LayoutComponent,
    StatusBarComponent,
    StatusBarAwareDirective,
    TimerComponent
  ],
  declarations: [
    FooterComponent,
    LayoutComponent,
    NavComponent,
    StatusBarComponent,
    StatusBarAwareDirective,
    TimerComponent,
    SkipNavComponent
  ]
})
export class CoreModule {
  /**
   * The root {@link AppModule} imports the {@link CoreModule} and adds the `providers` to the {@link AppModule}
   * providers. Recommended in the
   * [Angular 2 docs - CoreModule.forRoot](https://angular.io/docs/ts/latest/guide/ngmodule.html#core-for-root)
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ApiService,
        GlobalEventsService,
        StatusBarService,
        TimerService,
        { provide: 'Document', useValue: document },
        { provide: 'Window', useValue: window }
      ]
    };
  }
  /**
   * Prevent reimport of CoreModule
   * [STYLE 04-11](https://angular.io/styleguide#04-12)
   * @param parentModule will be `null` if {@link CoreModule} is not reimported by another module,
   * otherwise it will throw an error.
   * @see [Angular 2 docs - Prevent reimport of the CoreModule](https://angular.io/docs/ts/latest/guide/ngmodule.html#prevent-reimport) 
   */
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
