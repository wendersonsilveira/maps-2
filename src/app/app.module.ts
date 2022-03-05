import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AutocompleteComponent } from "./google-places.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { NzInputModule } from "ng-zorro-antd/input";
import { NgZorroAntdModule } from "ng-zorro-antd";
import {MatExpansionModule} from '@angular/material/expansion';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzListModule } from 'ng-zorro-antd/list';
import { ScrollingModule  } from '@angular/cdk/scrolling';
registerLocaleData(en);
@NgModule({
  declarations: [AppComponent, AutocompleteComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    NzInputModule,
    NgZorroAntdModule,
    NzCardModule,
    NzTableModule,
    NzListModule,
    ScrollingModule 
  ],

  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
