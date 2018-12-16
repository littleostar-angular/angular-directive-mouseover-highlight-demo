import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TestPageComponent} from './test-page/test-page.component';
import {MouseoverHighlightDirective} from './directives/mouseover-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MouseoverHighlightDirective,

    TestPageComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
