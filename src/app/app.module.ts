import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgClassComponent } from './componentes/ng-class/ng-class.component';
import { DirNgIfComponent } from './componentes/dir-ng-if/dir-ng-if.component';
import { DirNgForComponent } from './componentes/dir-ng-for/dir-ng-for.component';
import { DirNgSwitchComponent } from './componentes/dir-ng-switch/dir-ng-switch.component';
import { DirNgModelComponent } from './componentes/dir-ng-model/dir-ng-model.component';
import { FormsModule } from '@angular/forms';
import { DirNgStyleComponent } from './componentes/dir-ng-style/dir-ng-style.component';
import { MixComponent } from './componentes/mix/mix.component';

@NgModule({
  declarations: [
    AppComponent,
    NgClassComponent,
    DirNgIfComponent,
    DirNgForComponent,
    DirNgSwitchComponent,
    DirNgModelComponent,
    DirNgStyleComponent,
    MixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
