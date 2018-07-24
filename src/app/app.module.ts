import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';

import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DataTableModule, SharedModule} from 'primeng/primeng';
//rutas
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TabMenuModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DataTableModule,
    SharedModule,
    APP_ROUTING
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
