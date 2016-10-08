import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NgbdAppAotComponent} from './app.component';

@NgModule({
  declarations: [
    NgbdAppAotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  bootstrap: [NgbdAppAotComponent]
})
export class NgbdAotModule {
}
